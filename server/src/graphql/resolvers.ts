import { register, updateEmail } from "./resolvers/mutations";
import { login, user } from "./resolvers/queries";

const resolvers = {
  Query: {
    login,
    user,
  },
  Mutation: {
    updateEmail,
    register,
  },
};

export default resolvers;
