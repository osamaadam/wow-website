import { authDB } from "../../database/connections";
import { ApolloError } from "apollo-server-express";

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
