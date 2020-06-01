export type Quote = {
    id: string,
    date: string,
    currency: string,
    price: number
};

export type Deal = {
    id: string,
    open_quote: Quote,
    close_quote: Quote,
    quantity: number
};
