import { Quote } from './type';

const quote_01 = {
    date : "3/1/2020",
    currency : "EUR"
};

const quote_02:Quote = {
    date : "3/2/2020",
    currency : "EUR"
};

export const quotes:Quote[] = [quote_01, quote_02];
