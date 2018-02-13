import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView, Platform } from 'react-native';

import { DarkStatusBar } from '../components/LocalStatusBar';
import { Separator, ListItem } from '../components/List';
import { setThemePrimaryColor } from '../actions/appState';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

export class ThemeOptions extends Component {
    
    handleItemThemeSelection(color){
        this.props.dispatch(setThemePrimaryColor(color));

        const backKey = this.props.navigation.state.params.goBackKey;

        //Go back
        this.props.navigation.goBack(backKey);
    }

    render() {
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
                            handleOnPress={ () => this.handleItemThemeSelection(item.color) }
                            selected={true}
                            checked={this.props.selected == item.color}
                            customColor={item.color}
                            text={item.name} />

                        <Separator />
                    </View>
                )) }
            </ScrollView>
        )
    }
}

const stateToProps = (state) => ({
    color: state.appState.mainColor
});

export default connect(stateToProps)(ThemeOptions);