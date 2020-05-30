import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolver';
import { GraphQLSchema } from 'graphql';
import gql from 'graphql-tag';

const typeDefs = gql`

type Quote {
    date: String!
    currency: String!
}

type Query {
        quotes: [Quote]
    }

`;

const schema:GraphQLSchema =
    makeExecutableSchema({
        typeDefs,
        resolvers
    });

export default schema;
