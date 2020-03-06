const { gql } = require('apollo-server');
const find = require('lodash/find');
const uuid = require('uuid/v1');

const BOOKS = [
  {
    id: 'book-1',
    name: 'Blah',
    author: {
      id: 'vygbuhjnk',
      name: 'Dan Jarvis',
      age: 10000
    },
  },
  {
    id: 'book-2',
    name: 'The ocean',
    author: {
      id: 'cxidlaksdjlfk',
      name: 'Mark Twain',
      age: 35
    },
  },
  {
    id: 'book-3',
    name: 'The outsider',
    author: {
      id: 'ertyuio',
      name: 'Steven King',
      age: 25
    },
  },
  {
    id: 'book-3',
    name: 'The grind stone',
    author: {
      id: 'laksdjlfk',
      name: 'Who dis?',
      age: 25
    },
  },
];

const typeDefs = gql`
  type Book {
    id: ID!
    name: String
    author: Author
  }

  type Author {
    id: ID!
    name: String
    age: Int
  }

  input BookInput {
    name: String
    author: AuthorInput
  }

  input AuthorInput {
    name: String
    age: Int
  }

  type Query {
    book(id: String): Book
    books: [Book]
  }

  type Mutation {
    createBook(book: BookInput): Book
  }
`;

const resolvers = {
  Query: {
    book: (_, {id}) => find(BOOKS, { id }),
    books: () => BOOKS,
  },
  Mutation: {
    createBook: (_, {book}) => {
      BOOKS.push({
        ...book,
        id: uuid(),
      });
      return BOOKS;
    },
  },
};

module.exports = { typeDefs, resolvers };
