// import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'graphql-tools';
import { Quote, Deal } from './type';
import { quotes, deals } from './fixture';

const resolvers: IResolvers = {
    Query: {
        quotes: (): Quote[] => quotes,
        quote: ({ id }) => quotes.find(quote => quote.id === id),
        deals: (): Deal[] => deals,
        deal: ({ id }) => deals.find(deal => deal.id === id),
    },
};

export default resolvers;
