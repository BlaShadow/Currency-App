import { setNormalState, setWaitingState } from "./appState";

export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const SET_BASE_CURRENCY = 'SET_BASE_CURRENCY';
export const SET_QUOTE_CURRENCY = 'SET_QUOTE_CURRENCY';
export const SET_RATE_CURRENCY = 'SET_RATE_CURRENCY';

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

export const setCurrencyRate = (currency, rates) => ({
    type: SET_RATE_CURRENCY,
    currency,
    rates
});

export const startFetchForCurrency = (currency) => {
    return (dispatch) => {
        dispatch(setWaitingState());

        fetch(`https://api.fixer.io/latest?base=${currency}`)
            .then(response => response.json())
            .then(data => {
                dispatch(setNormalState());

                dispatch(setCurrencyRate(currency, data.rates));
            })
            .catch((error) => {
                console.log(error);
                dispatch(setNormalState());
            });
    }
}
