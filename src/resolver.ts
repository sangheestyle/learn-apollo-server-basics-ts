// import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'graphql-tools';
import { Quote, Deal } from './type';
import { quotes, deals } from './fixture';
import { pubsub } from './server';

const DEAL_UPDATED = 'DEAL_UPDATED'

const resolvers: IResolvers = {
    Query: {
        quotes: (): Quote[] => quotes,
        quote: ({ id }) => quotes.find(quote => quote.id === id),
        deals: (): Deal[] => deals,
        deal: ({ id }) => deals.find(deal => deal.id === id),
    },
    Mutation: {
        updateDeal: (_, { id, open_quote_id, close_quote_id, quantity }) => {
            const deal = deals.find(deal => deal.id === id)
            const openQuote = quotes.find(quote => quote.id === open_quote_id)
            const closeQuote = quotes.find(quote => quote.id === close_quote_id)
            if (!deal || !openQuote || !closeQuote) {
                return null
            }

            deal.open_quote = openQuote
            deal.close_quote = closeQuote
            deal.quantity = quantity

            pubsub.publish(DEAL_UPDATED, {
                dealUpdated: deal,
            })
            
            return deal
        },
    },
    Subscription: {
        dealUpdated: {
            subscribe: () => pubsub.asyncIterator(DEAL_UPDATED)
        }
    }
};

export default resolvers;
