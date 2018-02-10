import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import currencies from './currencies';
import appState from './appState';

const persistConfig = {
    key: 'root',
    storage,
}

const appStateReducer = persistReducer(persistConfig, appState)

export default combineReducers({
    currencies: currencies,
    appState: appStateReducer
});