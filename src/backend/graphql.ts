import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

const Schema = `
  type User {
    firstName: String!
    lastName: String!
  }
  
  type Query {
    user: User
  }
  
  type Mutation {
    updateProfile(
      firstName: String!
      lastName: String!
    ): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

// fake database
let user = {
  firstName: 'Hongbo',
  lastName: 'Miao'
};

const Resolvers = {
  Query: {
    user() {
      console.log('Apollo Query', user);

      return {
        firstName: user.firstName,
        lastName: user.lastName
      };
    }
  },
  Mutation: {
    updateProfile: (_, { firstName, lastName }) => {
      user.firstName = firstName;
      user.lastName = lastName;
      console.log('Apollo Mutation', user);

      return {
        firstName: user.firstName,
        lastName: user.lastName
      };
    },
  }
};

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
});

export function GraphQL() {
  return graphqlExpress({
    schema: executableSchema
  });
}

export function GraphiQL() {
  return graphiqlExpress({
    endpointURL: '/graphql'
  });
}
