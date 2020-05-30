// import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'graphql-tools';
import { Quote } from './type';
import { fixture_quotes } from './fixture';


const resolverMap:IResolvers = {
    Query: {
        quotes():Quote[] {
            return fixture_quotes;
        },
    },
};

export default resolverMap;
