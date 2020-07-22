import { register, updateEmail } from "./resolvers/mutations";
import { login } from "./resolvers/queries";

const resolvers = {
  Query: {
    login,
  },
  Mutation: {
    updateEmail,
    register,
  },
};

export default resolvers;
