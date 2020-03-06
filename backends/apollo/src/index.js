const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./graphql/schema');
const { context } = require('./graphql/context');

const server = new ApolloServer({ typeDefs, resolvers, context });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});