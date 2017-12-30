import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import color from 'color';

import styles from './style';

const ClearButton = ({onPress = () => {}, text = ""}) => {
    const highlightedButtonColor = color('white')
                                    .darken(0.4);
    
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.icon} source={require('./Images/two_way.png')} />
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default ClearButton;