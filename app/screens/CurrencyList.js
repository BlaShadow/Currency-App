import React, { Component } from 'react'
import { Text, View, FlatList, StatusBar } from 'react-native'

import { Container } from '../components/Container';
import { DarkStatusBar } from '../components/LocalStatusBar';
import { ListItem, Separator } from '../components/List';
import listData from '../data/currency';

export class CurrencyList extends Component {
    constructor(props){
        super(props);

        //Bind methods
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
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
                            handleOnPress={this.handlePress}
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

export default CurrencyList;