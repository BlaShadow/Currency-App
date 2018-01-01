import React, { Component } from 'react';
import { Text, View, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { DarkStatusBar } from '../components/LocalStatusBar';
import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {

    handleThemePress(){
        console.log('theme');
    }

    handleLinkPress(){
        console.log('url');
    }

    render() {
        return (
        <ScrollView>
            <DarkStatusBar />
            
            <ListItem 
                text="Theme" 
                customIcon={
                    <Ionicons 
                        name={`${ICON_PREFIX}-arrow-forward`}
                        color={"#868686"}
                    />
                }
                handleOnPress={this.handleThemePress} 
            />
            
            <Separator />
            
            <ListItem     
                text="Fixer.io" 
                customIcon={
                    <Ionicons 
                        name={`${ICON_PREFIX}-link`}
                        color={"#868686"}
                    />
                }
                handleOnPress={this.handleLinkPress} 
            />

            <Separator />
        </ScrollView>
        )
    }
}

export default Options