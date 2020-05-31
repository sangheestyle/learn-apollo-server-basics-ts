import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
// import resolvers from './resolver';
import { GraphQLSchema } from 'graphql';
import gql from 'graphql-tag';

export const typeDefs = gql`

type Quote {
    id:ID!
    date: String!
    currency: String!
    price: Float!
}


type Deal {
    id:ID!
    quote: Quote!
    amount: Int!
}

type Query {
    quotes: [Quote]!
    deals: [Deal]!
}

`;



/*
const schema:GraphQLSchema =
    makeExecutableSchema({
        typeDefs,
        resolvers
    });
*/

// export default typeDefs;
