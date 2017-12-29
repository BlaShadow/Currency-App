import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';

import styles from './style';

const InputWithButton = ({ buttonText = "", placeHolder="", onPress, editable=true}) => (
    <View style={styles.container}>
        <TouchableHighlight onPress={onPress} style={styles.buttonText}>
            <Text>{buttonText}</Text>
        </TouchableHighlight>
        
        <View style={styles.border} />

        <TextInput
            placeholder={placeHolder}
            autoCorrect={false}
            keyboardType="numeric"
            style={styles.input}
         />
    </View>
);

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
};

export default InputWithButton;