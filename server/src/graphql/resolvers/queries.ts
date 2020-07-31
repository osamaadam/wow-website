import { ApolloError } from "apollo-server-express";
import { gqlDefaultInput, User } from "src/types";
import { authDB } from "../../database/connections";
import { encryptPassword } from "../utility/encryptPassword";
import { sanitizeInput } from "../utility/sanitizeInput";
import { signToken } from "../utility/signToken";

export const login = async (
  ...input: gqlDefaultInput<{
    user: {
      username: string;
      password: string;
    };
  }>
) => {
  const { args } = sanitizeInput(input);
  let { username, password } = args.user;

  username = username.trim();
  password = password.trim();

  if (!username.length || !password.length)
    throw new ApolloError("Please, enter your credentials correctly!", "400");

  const encryptedPassword = encryptPassword(username, password);

  const [rows, __] = (await authDB.execute(
    `
      SELECT *, sha_pass_hash as password
      FROM account
      WHERE username = ?
    `,
    [username]
  )) as any;

  const user: User = {
    ...rows[0],
  };

  if (encryptedPassword !== user.password || !rows[0])
    throw new ApolloError("Invalid credentials!", "401");

  const token = signToken(user);

  return { user, token };
};

export const user = async (...input: gqlDefaultInput<{}>) => {
  try {
    const { context } = sanitizeInput(input);
    const { auth, isAuthenticated } = context;

    if (!isAuthenticated) throw new ApolloError("Bad token", "401");

    const [rows, ___] = (await authDB.execute(
      `
      SELECT * FROM account
      WHERE id = ?
    `,
      [auth.id]
    )) as any;

    if (!rows) throw new ApolloError("User not found", "404");

    const user = {
      ...rows[0],
    };

    const token = signToken(user);

    return { user, token };
  } catch (error) {
    throw error;
  }
};
