import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options';
import ThemeOptions from './screens/ThemeOptions';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A', 
});

export default () => <ThemeOptions />;