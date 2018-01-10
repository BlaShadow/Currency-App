import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT } from '../actions/currencies';

const initialState = {
    baseCurrency: 'USD',
    quoteCurrency: 'GBP',
    amount: 100,
    conversions: {
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_CURRENCY_AMOUNT:
            return {
                ...state, 
                amount: action.amount
            };
        case SWAP_CURRENCY:
            const baseCurrency = state.quoteCurrency;
            const quoteCurrency = state.baseCurrency;

            return {
                ...state, 
                baseCurrency, 
                quoteCurrency
            };
        default: 
            return state;
    }

    return state;
};


export default reducer;