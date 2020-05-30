import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'graphql-tools';
import { Quote } from './type';
import { quotes } from './fixture';


const resolverMap:IResolvers = {
    Query: {
        quotes():Quote[] {
            return quotes;
        },
    },
};

export default resolverMap;
