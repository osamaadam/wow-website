import { account, login } from "./resolvers/queries";
import { updateEmail, register } from "./resolvers/mutations";

const resolvers = {
  Query: {
    account,
    login,
  },
  Mutation: {
    updateEmail,
    register,
  },
};

export default resolvers;
