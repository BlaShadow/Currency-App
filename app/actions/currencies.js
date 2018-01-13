export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const SET_BASE_CURRENCY = 'SET_BASE_CURRENCY';
export const SET_QUOTE_CURRENCY = 'SET_QUOTE_CURRENCY';

export const changeCurrencyAmount = amount => ({
    type: CHANGE_CURRENCY_AMOUNT,
    amount: parseFloat(amount)
});

export const swapCurrency = () => ({
    type: SWAP_CURRENCY
});

export const setBaseCurrency = (baseCurrency) => ({
    type: SET_BASE_CURRENCY,
    baseCurrency
});

export const setQuoteCurrency = (quoteCurrency) => ({
    type: SET_QUOTE_CURRENCY,
    quoteCurrency
});