import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT, SET_BASE_CURRENCY, SET_QUOTE_CURRENCY } from '../actions/currencies';

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

        case SET_BASE_CURRENCY:
            return{
                ...state,
                baseCurrency: action.baseCurrency
            }

        case SET_QUOTE_CURRENCY:
            return{
                ...state,
                quoteCurrency: action.quoteCurrency
            }

        default: 
            return state;
    }

    return state;
};


export default reducer;