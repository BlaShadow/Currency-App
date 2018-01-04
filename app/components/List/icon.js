import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import styles from './style';

const Icon = ({selected, color, checked}) => {
    const iconStyles = [styles.iconContainer];

    if(selected){
        iconStyles.push(styles.iconVisible)
    }

    if(color){
        iconStyles.push({
            backgroundColor: color
        });
    }

    return (
        <View style={iconStyles} >
            { checked ? <Image style={styles.icon} source={require('./images/check.png')} /> : null }
        </ View>
    );
}

export default Icon