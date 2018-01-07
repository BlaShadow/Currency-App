import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { HomeScreen, Options, CurrencyList, ThemeOptions } from '../screens'; 

const configOptions = (shouldShowHeader) => {
    if(shouldShowHeader === false){
        return { header: () => null };
    }

    return ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
        headerBackTitle: 'Atrás'
    });
}

const configureScreen = (screenComponent, shouldShowHeader = true) => {
    return {
        screen: screenComponent,
        navigationOptions: configOptions(shouldShowHeader)
    }
}

const homeStackNavigator = StackNavigator({
    Home: configureScreen(HomeScreen, false), 
    Options: configureScreen(Options), 
    ThemeOptions: configureScreen(ThemeOptions),
});

const stack = StackNavigator({
    Home: configureScreen(homeStackNavigator, false),  
    CurrencyList: configureScreen(CurrencyList),
}, {
    mode: 'modal',
    cardStyle: {
        paddingTop: StatusBar.currentHeight
    }
});

export default stack;