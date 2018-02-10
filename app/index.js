import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options';
import ThemeOptions from './screens/ThemeOptions';
import store, { persistor } from './config/store';
import StackNavigator from './config/route';

EStyleSheet.build({
    $primaryBlue: '#03A9F4', 
});

export default () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <StackNavigator />
        </PersistGate>
    </Provider>
);