import { Quote, Deal } from './type';

const quote_01 = {
    date : "3/1/2020",
    currency : "EUR",
    price : 0.87
};

const quote_02 = {
    date : "3/2/2020",
    currency : "EUR",
    price : 0.9
};

const quote_03 = {
    date : "3/2/2020",
    currency : "EUR",
    price : 0.78
};

const quote_04 = {
    date : "3/2/2020",
    currency : "EUR",
    price : 0.88
};

const deal_01 = {
    quote : quote_01,
    amount : 143
};

const deal_02 = {
    quote : quote_02,
    amount : 107
};

const deal_03 = {
    quote : quote_03,
    amount : 244
};

const deal_04 = {
    quote : quote_04,
    amount : 22
};

export const fixture_quotes:Quote[] = [
    quote_01,
    quote_02,
    quote_03,
    quote_04
];

export const fixture_deals:Deal[] = [
    deal_01,
    deal_02,
    deal_03,
    deal_04
];
