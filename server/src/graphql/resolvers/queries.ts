import { authDB } from "../../database/connections";
import { ApolloError } from "apollo-server-express";
import { encryptPassword } from "../utility/encryptPassword";

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

  return user;
};
