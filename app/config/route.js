import { StackNavigator } from 'react-navigation';

import { HomeScreen, Options, CurrencyList } from '../screens'; 

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
    }
});

export default stack;