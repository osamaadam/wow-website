import { account, login } from "./resolvers/queries";
import { updateEmail } from "./resolvers/mutations";

const resolvers = {
  Query: {
    account,
    login,
  },
  Mutation: {
    updateEmail,
  },
};

export default resolvers;
