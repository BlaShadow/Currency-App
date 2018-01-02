import React from 'react'
import { View, Alert, KeyboardAvoidingView } from 'react-native';

import { Container } from '../components/Container';
import { LocalStatusBar } from '../components/LocalStatusBar';
import { Logo } from '../components/Logo';
import { Header } from '../components/Header'; 
import { TextInputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';

class Home extends React.Component {
    constructor(props){
        super(props);

        //Bind those methods
        this.handlePressSetting = this.handlePressSetting.bind(this);
        this.handlePressBaseCurrency = this.handlePressBaseCurrency.bind(this);
        this.handlePressQuoteCurrency = this.handlePressQuoteCurrency.bind(this);
    }

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList');
    }

    handlePressQuoteCurrency = () => {
        console.log('Press quote');

        Alert.alert(
            'You tapped the button!',
            'Second message',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
        );
    }

    handlePressSetting(){
        this.props.navigation.navigate('Options');
    }

    render(){
        return (
            <Container>
                <LocalStatusBar />
                <Header onPress={this.handlePressSetting} />
                <KeyboardAvoidingView behavior="padding">
                    <Logo />

                    <TextInputWithButton 
                        buttonText="USD"
                        placeHolder="0.00"
                        editable={true}
                        onPress={this.handlePressBaseCurrency}
                    />
        
                    <TextInputWithButton 
                        buttonText="DOP"
                        placeHolder="0.00"
                        editable={true}
                        onPress={this.handlePressQuoteCurrency}
                    />

                    <LastConverted value={2.34} date={new Date()} />

                    <ClearButton 
                        text="Reverse currencies" 
                        onPress={() => {console.log('Clear button pressed')}} 
                    />
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

export default Home;
