const { gql } = require("apollo-server");

module.exports = gql`
    type Password{
        id: ID!
        createdAt: String!
        websiteName:String!
        websitePassword:String!
        username: String!
    }

    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }

    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }

    type Query{
        getPasswords: [Password]
        getPassword(passwordId: ID!): Password
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!):User!
        createPassword(websiteName: String!, websitePassword: String!):Password!
        deletePassword(passwordId: ID!): String!
    }

`;