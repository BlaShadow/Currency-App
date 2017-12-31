import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A', 
});

export default () => <CurrencyList />;