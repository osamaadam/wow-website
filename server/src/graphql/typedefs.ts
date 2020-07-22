import { gql } from "apollo-server-express";

const typeDefs = gql`
  input Register {
    username: String!
    password: String!
    email: String!
  }

  input UpdateEmail {
    id: Int!
    oldEmail: String!
    newEmail: String!
  }

  input Login {
    username: String!
    password: String!
  }

  type Email {
    email: String!
  }

  type User {
    id: Int!
    username: String!
    email: String
    last_ip: String
    last_attempt_ip: String
    mutetime: Int
    mutereason: String
    muteby: String
  }

  type Query {
    login(user: Login!): User!
  }

  type Mutation {
    updateEmail(details: UpdateEmail!): Email!
    register(user: Register): User!
  }
`;

export default typeDefs;
