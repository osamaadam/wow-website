import { ApolloError } from "apollo-server-express";
import { authDB } from "../../database/connections";
import { encryptPassword } from "../utility/encryptPassword";

export const updateEmail = async (
  _: any,
  args: {
    details: {
      id: number;
      oldEmail: string;
      newEmail: string;
    };
  },
  context: any,
  info: any
) => {
  try {
    if (
      !args.details.newEmail.trim().length ||
      !args.details.oldEmail.trim().length
    )
      throw new ApolloError("Please enter all fields!", "400");

    const [oldEmail, __] = await authDB.execute(
      `
      SELECT email FROM account
      WHERE id = ${args.details.id}
    `
    );

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
  _: any,
  args: {
    user: {
      username: string;
      password: string;
      email: string;
    };
  },
  context: any,
  info: any
) => {
  try {
    const { username, password, email } = args.user;

    if (
      !username.trim().length ||
      !password.trim().length ||
      !email.trim().length
    )
      throw new ApolloError("Please, enter all fields!", "400");

    const encryptedPassword = encryptPassword(username, password);

    await authDB.execute(
      `
        INSERT INTO account (username, sha_pass_hash, email, joindate)
        VALUES ("${username}", "${encryptedPassword}", "${email}", NOW());
      `
    );

    const [newUser, __] = await authDB.execute(
      `
        SELECT * FROM account
        WHERE username = "${username}"
      `
    );

    const user: User = {
      ...newUser[0],
    };

    return user;
  } catch (error) {
    throw error;
  }
};
