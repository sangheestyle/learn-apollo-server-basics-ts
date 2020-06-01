import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolver';
import { GraphQLSchema } from 'graphql';
import typeDefs from './type-gql';
// import * from './type.graphql' as ttt;



const schema: GraphQLSchema =
    makeExecutableSchema({
        typeDefs,
        resolvers
    });
export default schema;
