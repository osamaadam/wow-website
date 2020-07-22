import { ApolloError } from "apollo-server-express";
import { authDB } from "../../database/connections";
import { encryptPassword } from "../utility/encryptPassword";
import { signToken } from "../utility/signToken";

export const login = async (
  _: any,
  args: {
    user: {
      username: string;
      password: string;
    };
  },
  context: any,
  info: any
) => {
  const { username, password } = args.user;
  if (!username.trim().length || !password.trim().length)
    throw new ApolloError("Please, enter your credentials correctly!", "400");

  const encryptedPassword = encryptPassword(username, password);

  const [rows, __] = await authDB.execute(
    `
      SELECT *, sha_pass_hash as password
      FROM account
      WHERE username = "${username}";
    `
  );

  const user: User = {
    ...rows[0],
  };

  if (encryptedPassword !== user.password || !rows[0])
    throw new ApolloError("Invalid credentials!", "401");

  const token = signToken(user);

  return { user, token };
};

export const user = async (_: any, __: any, context: Context) => {
  try {
    const { auth } = context;

    if (!auth) throw new ApolloError("Bad token", "401");

    const [rows, ___] = await authDB.execute(
      `
      SELECT * FROM account
      WHERE id = ${auth.id}
    `
    );

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
