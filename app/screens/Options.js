import React, { Component } from 'react';
import { Text, View, ScrollView, Platform, Linking } from 'react-native';

import { Container } from '../components/Container';
import { DarkStatusBar } from '../components/LocalStatusBar';
import { ListItem, Separator } from '../components/List';
import { Icon } from '../components/Icon'

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {
    constructor(props){
        super(props);

        //Bind functions
        this.handleThemePress = this.handleThemePress.bind(this);
        this.handleLinkPress = this.handleLinkPress.bind(this);
        this.handleAboutPress = this.handleAboutPress.bind(this);
    }

    handleThemePress(){
        const key = this.props.navigation.state.params.backKey;

        this.props.navigation.navigate('ThemeOptions', { title: 'Theme Options', goBackKey: key });
    }

    handleLinkPress(){
        const url = 'http://fixer.io/';
        
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    handleAboutPress(){
        this.props.navigation.navigate('AboutScreen', { title: 'About'});
    }

    render() {
        return (
            <ScrollView>
                <DarkStatusBar />
                
                <ListItem 
                    text="Theme" 
                    customIcon={
                        <Icon name="next" />
                    }
                    handleOnPress={this.handleThemePress} 
                />
                
                <Separator />
                
                <ListItem     
                    text="Fixer.io" 
                    customIcon={
                        <Icon name="link" />
                    }
                    handleOnPress={this.handleLinkPress} 
                />

                <ListItem     
                    text="About" 
                    customIcon={
                        <Icon name="next" />
                    }
                    handleOnPress={this.handleAboutPress} 
                />

                <Separator />
            </ScrollView>
        )
    }
}

export default Options