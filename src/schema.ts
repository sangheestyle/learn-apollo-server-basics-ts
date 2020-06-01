import 'graphql-import-node';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolver';
import typeDefs from './type.graphql'

const schema: GraphQLSchema =
    makeExecutableSchema({
        typeDefs,
        resolvers
    });

export default schema;
