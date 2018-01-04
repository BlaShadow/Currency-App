import { StackNavigator } from 'react-navigation';

import { HomeScreen, Options, CurrencyList, ThemeOptions } from '../screens'; 

const configOptions = (shouldShowHeader) => {

    console.log('Should show header', shouldShowHeader);
    if(shouldShowHeader === false){
        return { header: () => null };
    }

    return ({ navigation }) => ({
        headerTitle: navigation.state.params.title
    });
}

const configureScreen = (screenComponent, shouldShowHeader = true) => {
    return {
        screen: screenComponent,
        navigationOptions: configOptions(shouldShowHeader)
    }
}

const stack = StackNavigator({
    Home: configureScreen(HomeScreen, false), 
    CurrencyList: configureScreen(CurrencyList),
    Options: configureScreen(Options), 
    ThemeOptions: configureScreen(ThemeOptions),
}, {
    mode: 'modal'
});

export default stack;