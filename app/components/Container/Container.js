import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

class Container extends React.PureComponent {
    render(){
        const { children, color } = this.props;
        const containerStyles = [styles.container];

        containerStyles.push({backgroundColor: color});
        
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={containerStyles}>
                    {children}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

Container.propTypes = {
    children: PropTypes.any,
};

const stateToProps = (state) => {
    return {
        color: state.appState.mainColor
    };
};

export default connect(stateToProps)(Container);

