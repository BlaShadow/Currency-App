import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './style';

const Header = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image resizeMode="contain" 
                    style={styles.image} 
                    source={require('./Images/settings.png')} 
                />
            </TouchableOpacity>
        </View>
    )
}

Header.propTypes = {
    onPress: PropTypes.func
};

export default Header;

