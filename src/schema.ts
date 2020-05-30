import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolver';
import { GraphQLSchema } from 'graphql';
import gql from 'graphql-tag';


// import * as typeDefs from './schema/schema.graphql';

const typeDefs = gql`
    type Query {
        helloWorld: String!
    }
`;

const schema:GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
