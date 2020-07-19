import { authDB } from "../../database/connections";
import { ApolloError } from "apollo-server-express";
import { getFields } from "../utility/getFields";
import { encryptPassword } from "../utility/encryptPassword";

export const account = async (
  _: any,
  args: { id: number },
  __: any,
  info: any
) => {
  try {
    const queryFields = getFields(info).toString();
    const [rows, fields] = await authDB.execute(
      `
        SELECT ${queryFields} FROM account
        WHERE id = ${args.id}
        LIMIT 1;
      `
    );
    if (!rows) throw new ApolloError("Account not found!");
    const account = {
      ...rows[0],
    };
    return account;
  } catch (error) {
    throw error;
  }
};

export const login = async (
  _: any,
  args: {
    credentials: {
      username: string;
      password: string;
    };
  },
  context: any,
  info: any
) => {
  const { username, password } = args.credentials;
  if (!username.trim().length || !password.trim().length)
    throw new ApolloError("Please, enter your credentials correctly!", "400");

  const encryptedPassword = encryptPassword(username, password);

  const queryFields = getFields(info).toString();

  const [rows, __] = await authDB.execute(
    `
      SELECT ${queryFields}, sha_pass_hash as password
      FROM account
      WHERE username = "${username}";
    `
  );

  const account: Account = {
    ...rows[0],
  };

  if (encryptedPassword !== account.password || !rows[0])
    throw new ApolloError("Invalid credentials!", "401");

  return account;
};
