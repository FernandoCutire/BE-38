const { ApolloServer, gql } = require('apollo-server');

// 1- graphql maneja tipos y atributos
// 2- Queries(R),  Mutation(CUD), Subscriptions(datos en tiempo real) 

// A) definir el esquema de graphql
const typeDefs = gql`
  type Book {
    title: String
    author: String
    price: Int
  }

  type Query {
    getBooks: [Book]
  }
`;

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    price: 23
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    price: 23
  },
];

// B) Reolvers: funciones que ejecutan la operacion
const resolvers = {
  Query: {
    getBooks: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
