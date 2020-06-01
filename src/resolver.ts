// import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'graphql-tools';
import { Quote, Deal } from './type';
import { fixture_quotes, fixture_deals } from './fixture';

const resolvers: IResolvers = {
    Query: {
        quotes(): Quote[] {
            return fixture_quotes;
        },
        quote(args) {
            return fixture_quotes.find(
                fixture_quotes =>
                    fixture_quotes.id === args.id);
        },
        deals(): Deal[] {
            return fixture_deals;
        },
        deal(args) {
            return fixture_deals.find(
                fixture_deals =>
                    fixture_deals.id === args.id);
        },
    },
};

export default resolvers;
