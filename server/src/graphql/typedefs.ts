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

  type Email {
    email: String!
  }

  type Account {
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
    account(id: Int!): Account!
    login(username: String!, password: String!): Account!
  }

  type Mutation {
    updateEmail(details: UpdateEmail!): Email!
    register(username: String!, email: String!, password: String!): Account!
  }
`;

export default typeDefs;
