import React from 'react'
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { TextInputWithButton } from '../components/TextInput';

class Home extends React.Component {

    handlePressBaseCurrency = () => {
        console.log('Press base');
    }

    handlePressQuoteCurrency = () => {
        console.log('Press quote');
    }

    render(){
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Logo />
                
                <View>
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
                </View>
            </Container>
        );
    }
}

export default Home;
