import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux'

import styles from './style';

const Icon = ({selected, color, checked, themeColor}) => {
    const iconStyles = [styles.iconContainer];

    if(selected){
        iconStyles.push({
            backgroundColor: themeColor
        });
    }

    if(color){
        iconStyles.push({
            backgroundColor: color
        });
    }

    return (
        <View style={iconStyles} >
            { checked ? <Image style={styles.icon} source={require('./images/check.png')} /> : null }
        </View>
    );
}

const stateToProps = (state) => {
    return {
        themeColor: state.appState.mainColor
    }
};

export default connect(stateToProps)(Icon)