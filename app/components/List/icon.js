import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import styles from './style';

const Icon = ({selected}) => {
    const iconStyles = [styles.iconContainer];

    if(selected){
        iconStyles.push(styles.iconVisible)
    }

    return (
        <View style={iconStyles} >
            { selected ? <Image style={styles.icon} source={require('./images/check.png')} /> : null }
        </ View>
    );
}

export default Icon