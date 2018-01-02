import { StackNavigator } from 'react-navigation';

import { HomeScreen, Options, CurrencyList, ThemeOptions } from '../screens'; 

const stack = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: () => null
        }
    }, 
    CurrencyList: {
        screen: CurrencyList,
    },
    Options: {
        screen: Options
    }, 
    ThemeOptions: {
        screen: ThemeOptions
    },
});

export default stack;