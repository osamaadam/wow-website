import { ApolloError } from "apollo-server-express";
import { gqlDefaultInput, User } from "src/types";
import { authDB } from "../../database/connections";
import { encryptPassword } from "../utility/encryptPassword";
import { sanitizeInput } from "../utility/sanitizeInput";
import { signToken } from "../utility/signToken";

export const updateEmail = async (
  ...input: gqlDefaultInput<{
    details: {
      id: number;
      oldEmail: string;
      newEmail: string;
    };
  }>
) => {
  try {
    const { args } = sanitizeInput(input);
    if (
      !args.details.newEmail.trim().length ||
      !args.details.oldEmail.trim().length
    )
      throw new ApolloError("Please enter all fields!", "400");

    const [oldEmail, __] = (await authDB.execute(
      `
      SELECT email FROM account
      WHERE id = ${args.details.id}
    `
    )) as any;

    if (oldEmail[0].email !== args.details.oldEmail)
      throw new ApolloError("Wrong email", "401");

    await authDB.execute(
      `
      UPDATE account
      SET email = "${args.details.newEmail}"
      WHERE id = ${args.details.id}
    `
    );

    return { email: args.details.newEmail };
  } catch (error) {
    throw error;
  }
};

export const register = async (
  ...input: gqlDefaultInput<{
    user: {
      username: string;
      password: string;
      email: string;
    };
  }>
) => {
  try {
    const { args } = sanitizeInput(input);
    let { username, password, email } = args.user;
    username = username.trim();
    password = password.trim();
    email = email.trim();

    if (!username.length || !password.length || !email.length)
      throw new ApolloError("Please, enter all fields!", "400");

    const encryptedPassword = encryptPassword(username, password);

    await authDB.execute(
      `
        INSERT INTO account (username, sha_pass_hash, email, joindate)
        VALUES ("${username}", "${encryptedPassword}", "${email}", NOW());
      `
    );

    const [newUser, __] = (await authDB.execute(
      `
        SELECT * FROM account
        WHERE username = "${username}"
      `
    )) as any;

    const user: User = {
      ...newUser[0],
    };

    const token = signToken(user);

    return { user, token };
  } catch (error) {
    throw error;
  }
};
