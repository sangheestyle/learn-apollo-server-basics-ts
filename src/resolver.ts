import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'graphql-tools';

import { quotes } from './schema';

const resolverMap:IResolvers = {
    Query: {
        quotes()
        {
            return quotes;
        },
    },
};

export default resolverMap;
