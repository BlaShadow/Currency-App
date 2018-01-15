import React, { Component } from 'react'
import { Text, View, FlatList, StatusBar } from 'react-native'
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { DarkStatusBar } from '../components/LocalStatusBar';
import { ListItem, Separator } from '../components/List';
import listData from '../data/currency';
import { setBaseCurrency, setQuoteCurrency } from '../actions/currencies';

export class CurrencyList extends Component {
    constructor(props){
        super(props);

        //Bind methods
        this.currency = this.props.navigation.state.params.selected;
        this.typeCurrency = this.props.navigation.state.params.typeCurrency;
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress(currency) {
        let handler = undefined;

        if(this.typeCurrency === 'BASE'){
            handler = setBaseCurrency;
        } else if(this.typeCurrency === 'QUOTE'){
            handler = setQuoteCurrency;
        }

        //Dispatch action
        this.props.dispatch(handler(currency));

        //Go back
        this.props.navigation.goBack(null);
    }

    render() {
        const data = listData;
        const selected = this.props.navigation.state.params.selected;

        return (
            <View style={{flex: 1}}>
                <DarkStatusBar />

                <FlatList 
                    data={data} 
                    renderItem={ ({item, index}) => (
                        <ListItem 
                            text={item}
                            handleOnPress={() => this.handlePress(item)}
                            selected={item === selected}
                            checked={true}
                        />
                    )}
                    ItemSeparatorComponent={Separator}
                    keyExtractor={ item => item}
                />
            </View>  
        )
    }
}

//Mapping state to props :)
const stateToProps = (state) => state;

export default connect(stateToProps)(CurrencyList);