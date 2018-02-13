import React from 'react';
import PropTypes from 'prop-types';
import color from 'color'
import { connect } from 'react-redux'
import { View, Text, TouchableHighlight, TextInput } from 'react-native';

import styles from './style';
class InputWithButton extends React.PureComponent{
    render(){
        let { buttonText = "", placeHolder="", onPress, editable=true, onChangeText, value, colorTheme} = this.props;

        const highlightedButtonColor = color(styles.$baseBackgroundColor)
                                    .darken(styles.$baseBackgroundColorModifier);

        const primaryColor = colorTheme;

        return (
            <View style={styles.container}>
                <TouchableHighlight underlayColor={highlightedButtonColor} 
                    onPress={onPress} 
                    style={styles.button}>
                    <Text style={[styles.text, {color: primaryColor}]}>{buttonText}</Text>
                </TouchableHighlight>
                
                <View style={styles.border} />

                <TextInput
                    placeholder={placeHolder}
                    autoCorrect={false}
                    keyboardType="numeric"
                    style={styles.input}
                    editable={editable}
                    value={value.toString()}
                    onChangeText={onChangeText}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }
}

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool
};

const stateToProps = (state) => {
    return {
        colorTheme: state.appState.mainColor
    }
}

export default connect(stateToProps)(InputWithButton);