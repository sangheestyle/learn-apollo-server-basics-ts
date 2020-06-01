import { Quote, Deal } from './type';

const quote_01 = {
    id: "1",
    date: "3/1/2020",
    currency: "EUR",
    price: 0.87
};

const quote_02 = {
    id: "2",
    date: "3/2/2020",
    currency: "EUR",
    price: 0.9
};

const quote_03 = {
    id: "3",
    date: "3/2/2020",
    currency: "EUR",
    price: 0.78
};

const quote_04 = {
    id: "4",
    date: "3/2/2020",
    currency: "EUR",
    price: 0.88
};

const deal_01 = {
    id: "1",
    open_quote: quote_01,
    close_quote: quote_02,
    quantity: 143
};

const deal_02 = {
    id: "2",
    open_quote: quote_02,
    close_quote: quote_03,
    quantity: 107
};

const deal_03 = {
    id: "3",
    open_quote: quote_03,
    close_quote: quote_04,
    quantity: 244
};

const deal_04 = {
    id: "4",
    open_quote: quote_04,
    close_quote: quote_01,
    quantity: 22
};

export const fixture_quotes: Quote[] = [
    quote_01,
    quote_02,
    quote_03,
    quote_04
];

export const fixture_deals: Deal[] = [
    deal_01,
    deal_02,
    deal_03,
    deal_04
];
