export type Quote = {
    id:string,
    date:string,
    currency:string,
    price:number
};

export type Deal = {
    id:string,
    quote:Quote,
    amount:number
};
