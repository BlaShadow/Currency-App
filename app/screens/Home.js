import React from 'react'
import { View, StatusBar, Alert } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { TextInputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';

class Home extends React.Component {

    handlePressBaseCurrency = () => {
        console.log('Press base');
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

    render(){
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
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

            </Container>
        );
    }
}

export default Home;
