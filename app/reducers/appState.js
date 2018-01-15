import { APP_STATE_NORMAL, APP_STATE_WAIT } from "../actions/currencies";
import { APP_PRIMARY_COLOR } from "../actions/appState";


const defaultState = {
    isFetchingData: false,
    mainColor: '#03A9F4'
};

const reducer = (state = defaultState, action) => {
    switch(action.type){
        case APP_STATE_NORMAL:
            return { ...state, isFetchingData: false};

        case APP_STATE_WAIT:
            return { ...state, isFetchingData: true }
        
        case APP_PRIMARY_COLOR:
            return {...state, mainColor: action.color}
        default:
            return state;
    }

    return state;
};

export default reducer;