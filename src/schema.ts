import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolver';
import { GraphQLSchema } from 'graphql';
import typeDefs from './type-gql';

const schema:GraphQLSchema =
    /*
      schema is a concept that includes both
      1) gql type definition, and
      2) resolvers for query and mutation.
      then schema becomes the essential argument
      for apollo server instance. 
     */
    makeExecutableSchema({
        typeDefs,
        resolvers
    });

export default schema;
