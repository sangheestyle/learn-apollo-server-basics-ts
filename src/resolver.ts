// import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'graphql-tools';
import { Quote, Deal } from './type-intrnl';
import { fixture_quotes, fixture_deals } from './fixture';

const resolvers:IResolvers = {
    Query: {
        quotes():Quote[] {
            return fixture_quotes;
        },
        deals():Deal[] {
            return fixture_deals;
        }
    },
};

export default resolvers;
