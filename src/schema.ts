import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolver';
import { GraphQLSchema } from 'graphql';
import gql from 'graphql-tag';

const typeDefs = gql`

type Quote {
    date: String!
    currency: String!
    price: Float
}

type Deal {
    quote: Quote
    amount: Int 
}

type Query {
    quotes: [Quote]
    deals: [Deal]
}

`;

const schema:GraphQLSchema =
    makeExecutableSchema({
        typeDefs,
        resolvers
    });

export default schema;
