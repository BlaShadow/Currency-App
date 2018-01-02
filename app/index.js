import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options';
import ThemeOptions from './screens/ThemeOptions';

import StackNavigator from './config/route';

EStyleSheet.build({
    $primaryBlue: '#03A9F4', 
});

export default () => <StackNavigator />;