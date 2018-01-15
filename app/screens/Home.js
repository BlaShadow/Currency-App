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

import { changeCurrencyAmount, swapCurrency, startFetchForCurrency } from '../actions/currencies';
 
class Home extends React.Component {
    constructor(props){
        super(props);

        console.log('Home props ', props);

        //Bind those methods
        this.handlePressSetting = this.handlePressSetting.bind(this);
        this.handlePressBaseCurrency = this.handlePressBaseCurrency.bind(this);
        this.handlePressQuoteCurrency = this.handlePressQuoteCurrency.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSelectedBaseCurrency = this.handleSelectedBaseCurrency.bind(this);
    }

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {
            title: 'Currency List',
            selected: this.props.baseCurrency,
            typeCurrency: 'BASE',
            backAction: this.handleSelectedBaseCurrency
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
        const key = this.props.navigation.state.key;

        this.props.navigation.navigate('Options', { title: 'Settings', backKey: key });
    }

    handleChangeText = (text) => {
        console.log("Changing test", text);

        if(text !== ""){
            this.props.dispatch(changeCurrencyAmount(text));
        } else {
            this.props.dispatch(changeCurrencyAmount(0));
        }
    };

    handleSelectedBaseCurrency = (backBurrency) => {
        console.log('do some magic stuff');
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

                    <LastConverted 
                        value={this.props.rate} 
                        base={this.props.baseCurrency} 
                        quote={this.props.quoteCurrency}
                        date={new Date()} />

                    <ClearButton 
                        text="Reverse currencies" 
                        onPress={() => {this.props.dispatch(swapCurrency())}} 
                    />
                </KeyboardAvoidingView>
            </Container>
        );
    }

    updateRates(){
        if(this.props.shouldLoadRates){
            this.props.dispatch(startFetchForCurrency(this.props.baseCurrency));
        }
    }

    componentWillMount(){
        this.updateRates();
    }

    componentDidUpdate(){
        this.updateRates();
    }
}

const mapStateToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    const amount = state.currencies.amount;
    const shouldLoadRates = state.currencies.conversions[baseCurrency] === undefined;
    const rate = !shouldLoadRates ? state.currencies.conversions[baseCurrency][quoteCurrency] : 0;
    const convertionSelector = numeral(amount * rate).format('$0,0.00');
    
    console.log('quote currency rate', rate, shouldLoadRates);

    return {
        baseCurrency,
        quoteCurrency,
        amount,
        convertionSelector,
        shouldLoadRates,
        rate
    }
};

export default connect(mapStateToProps)(Home);
