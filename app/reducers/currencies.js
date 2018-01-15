import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT, SET_BASE_CURRENCY, SET_QUOTE_CURRENCY, SET_RATE_CURRENCY } from '../actions/currencies';

const initialState = {
    isFetching: false,
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
            return {
                ...state,
                baseCurrency: action.baseCurrency
            }

        case SET_QUOTE_CURRENCY:
            return {
                ...state,
                quoteCurrency: action.quoteCurrency
            }
        
        case SET_RATE_CURRENCY:
            const conversions = {...state.conversions};
            conversions[action.currency] = action.rates;
            
            return {
                ...state,
                conversions
            };
        default: 
            return state;
    }

    return state;
};


export default reducer;