import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

const Container = ({ children, color }) => {
    const containerStyles = [styles.container];

    if(color != undefined){
        containerStyles.push({backgroundColor: color});
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={containerStyles}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
}

Container.propTypes = {
    children: PropTypes.any,
};

const stateToProps = (state) => {
    return {
        color: state.backgroundColor
    };
};

export default connect(stateToProps)(Container);
