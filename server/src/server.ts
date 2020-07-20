import { ApolloServer } from "apollo-server-express";
import express from "express";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typedefs";
import path from "path";

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
});

graphqlServer.applyMiddleware({ app });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "..", "..", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "..", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}..`);
});
