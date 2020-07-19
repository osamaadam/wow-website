import { ApolloServer } from "apollo-server-express";
import express from "express";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typedefs";

require("dotenv").config();

const main = async () => {
  const PORT = process.env.PORT || 5000;
  const app = express();

  const graphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  graphqlServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}..`);
  });
};

main();
