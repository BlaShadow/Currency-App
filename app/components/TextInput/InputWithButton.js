import React from 'react';
import PropTypes from 'prop-types';
import color from 'color';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';

import styles from './style';

const InputWithButton = ({ buttonText = "", placeHolder="", onPress, editable=true, onChangeText}) => {

    const highlightedButtonColor = color(styles.$baseBackgroundColor)
                                    .darken(styles.$baseBackgroundColorModifier);
    return (
        <View style={styles.container}>
            <TouchableHighlight underlayColor={highlightedButtonColor} 
                onPress={onPress} 
                style={styles.button}>
                <Text style={styles.text}>{buttonText}</Text>
            </TouchableHighlight>
            
            <View style={styles.border} />

            <TextInput
                placeholder={placeHolder}
                autoCorrect={false}
                keyboardType="numeric"
                style={styles.input}
                editable={editable}
                onChangeText={onChangeText}
                underlineColorAndroid="transparent"
            />
        </View>
    );
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool
};

export default InputWithButton;