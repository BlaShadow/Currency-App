import { combineReducers } from 'redux';

import currencies from './currencies';
import appState from './appState';

export default combineReducers({
    currencies: currencies,
    appState: appState
});