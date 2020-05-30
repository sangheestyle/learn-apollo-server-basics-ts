export type Quote = {
    date:string,
    currency:string,
    price:number
};

export type Deal = {
    quote:Quote,
    amount:number
};
