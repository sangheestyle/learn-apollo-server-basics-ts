import gql from 'graphql-tag';

const typeDefs = gql`

type Quote {
    id : ID!
    date : String!
    currency : String!
    price : Float!
}

type Deal {
    id : ID!
    quote : Quote!
    amount : Int!
}

type Query {
    quotes : [Quote]
    quote (id : ID) : Quote
    deals : [Deal]
    deal (id : ID) : Deal
}
`;

export default typeDefs;
