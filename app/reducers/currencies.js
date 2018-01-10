import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT } from '../actions/currencies';

const initialState = {};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_CURRENCY_AMOUNT:
            return {};
        case SWAP_CURRENCY:
            return {};
        default: 
            return state;
    }

    return state;
};


export default reducer;