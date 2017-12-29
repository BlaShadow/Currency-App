import React from 'react';
import { View, Image, ImageBackground, Text } from 'react-native';

import styles from './style';

const Logo = () => (
    <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={require('./Images/hexagon.png')}>
            <Image style={styles.insideImage} source={require('./Images/two_way.png')} />
        </ImageBackground>
        <Text style={styles.textLogo}>Currency Converter</Text>
    </View>
);

export default Logo;