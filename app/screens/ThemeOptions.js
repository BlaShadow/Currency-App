import React, { Component } from 'react';
import { Text, View, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { DarkStatusBar } from '../components/LocalStatusBar';
import { Separator, ListItem } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

export class ThemeOptions extends Component {
    
    handleItemThemeSelection(){
        console.log('item press');
    }

    render() {
        //'#42A5F5', '#29B6F6', '#26C6DA', '#66BB6A', '#9CCC65', '#2979FF', '#FF7043'
        const colors = [
            { color: '#42A5F5', name: 'Color #42A5F5'},
            { color: '#29B6F6', name: 'Color #29B6F6'},
            { color: '#26C6DA', name: 'Color #26C6DA'},
            { color: '#66BB6A', name: 'Color #66BB6A'},
            { color: '#9CCC65', name: 'Color #9CCC65'},
            { color: '#2979FF', name: 'Color #2979FF'},
            { color: '#FF7043', name: 'Color #FF7043'},
        ];

        return (
            <ScrollView>
                <DarkStatusBar />
                
                { colors.map((item) => (
                    <View key={item.color}>
                        <ListItem 
                            handleOnPress={this.handleItemThemeSelection}
                            selected={true}
                            customColor={item.color}
                            text={item.name} />

                        <Separator />
                    </View>
                )) }
            </ScrollView>
        )
    }
}

export default ThemeOptions