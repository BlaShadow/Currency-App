import React, { Component } from 'react';
import { Text, View, ScrollView, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Container } from '../components/Container';
import { DarkStatusBar } from '../components/LocalStatusBar';
import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {
    constructor(props){
        super(props);

        //Bind functions
        this.handleThemePress = this.handleThemePress.bind(this);
        this.handleLinkPress = this.handleLinkPress.bind(this);
    }

    handleThemePress(){
        const key = this.props.navigation.state.params.backKey;

        console.log('Bakc key options', key);

        this.props.navigation.navigate('ThemeOptions', { title: 'Theme Options', goBackKey: key });
    }

    handleLinkPress(){
        const url = 'http://fixer.io/';
        
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
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