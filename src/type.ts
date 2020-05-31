export type Quote = {
    id:number,
    date:string,
    currency:string,
    price:number
};

export type Deal = {
    id:number,
    quote:Quote,
    amount:number
};
