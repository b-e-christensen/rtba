const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    worldMap: [String]
    unlockedBoxes: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

type Query {
  get: [User]
  getUser: User
  # ---- development query -----
  getUserDevelopment(email: String!): User
}

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
