import React, { Component } from 'react'
import { Text, View, FlatList, StatusBar } from 'react-native'

import { Container } from '../components/Container';
import { LocalStatusBar } from '../components/LocalStatusBar';
import listData from '../data/currency';

export class CurrencyList extends Component {
  render() {
    const data = listData;

    return (
        <View style={{flex: 1}}>
            <LocalStatusBar />
            
            <FlatList 
                data={data} 
                renderItem={ ({item, index}) => <Text>{item}</Text>}
                keyExtractor={ item => item}
            />
        </View>  
    )
  }
}

export default CurrencyList;