import React from 'react'
import { View, Alert, KeyboardAvoidingView } from 'react-native';
import  { connect } from 'react-redux';
import numeral from 'numeral';

import { Container } from '../components/Container';
import { LocalStatusBar } from '../components/LocalStatusBar';
import { Logo } from '../components/Logo';
import { Header } from '../components/Header'; 
import { TextInputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';

import { changeCurrencyAmount, swapCurrency } from '../actions/currencies';
 
class Home extends React.Component {
    constructor(props){
        super(props);

        console.log('Home props ', props);

        //Bind those methods
        this.handlePressSetting = this.handlePressSetting.bind(this);
        this.handlePressBaseCurrency = this.handlePressBaseCurrency.bind(this);
        this.handlePressQuoteCurrency = this.handlePressQuoteCurrency.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {
            title: 'Currency List',
            selected: this.props.baseCurrency,
            typeCurrency: 'BASE'
        });
    }

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {
            title: 'Quote List',
            selected: this.props.quoteCurrency,
            typeCurrency: 'QUOTE'
        });
    }

    handlePressSetting(){
        this.props.navigation.navigate('Options', { title: 'Settings' });
    }

    handleChangeText = (text) => {
        console.log("Changing test", text);

        if(text !== ""){
            this.props.dispatch(changeCurrencyAmount(text));
        } else {
            this.props.dispatch(changeCurrencyAmount(0));
        }
    };

    render(){
        return (
            <Container>
                <LocalStatusBar />
                <Header onPress={this.handlePressSetting} />
                <KeyboardAvoidingView behavior="padding">
                    <Logo />

                    <TextInputWithButton 
                        buttonText={this.props.baseCurrency}
                        placeHolder="0.00"
                        editable={true}
                        value={this.props.amount}
                        onChangeText={this.handleChangeText}
                        onPress={this.handlePressBaseCurrency}
                    />
        
                    <TextInputWithButton 
                        buttonText={this.props.quoteCurrency}
                        placeHolder="0.00"
                        editable={false}
                        value={this.props.convertionSelector}
                        onPress={this.handlePressQuoteCurrency}
                    />

                    <LastConverted value={2.34} date={new Date()} />

                    <ClearButton 
                        text="Reverse currencies" 
                        onPress={() => {this.props.dispatch(swapCurrency())}} 
                    />
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    const amount = state.currencies.amount;
    const convertionSelector = numeral(amount * 48).format('$0,0.00');

    console.log('maps state to props', baseCurrency, quoteCurrency, state);

    return{
        baseCurrency,
        quoteCurrency,
        amount,
        convertionSelector
    }
};

export default connect(mapStateToProps)(Home);
