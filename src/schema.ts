import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolver';
import { GraphQLSchema } from 'graphql';
import gql from 'graphql-tag';
import { Quote } from './type';

const quote_01 = {
    date : "3/1/2020",
    currency : "EUR"
};

const quote_02:Quote = {
    date : "3/2/2020",
    currency : "EUR"
};

export const quotes:Quote[] = [quote_01, quote_02];

const typeDefs = gql`
type Quote {
date: String!
currency: String!
}

type Query {
        quotes: [Quote]
    }
`;

const schema:GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
