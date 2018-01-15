import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';
import color from 'color';

import styles from './style';
import Icon from './icon';

class ListItem extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.handleOnPress} underlayColor={'#333333'}>
                <View style={styles.row}>
                    <Text style={styles.text}> {this.props.text} </Text>
                    { this.props.selected ? <Icon checked={this.props.checked} selected={true} color={this.props.customColor} /> : null }
                    { this.props.customIcon }
                </View>
            </TouchableHighlight>
        )
    }
}

ListItem.propTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool,
    handleOnPress: PropTypes.func,
    customIcon: PropTypes.element,
    customColor: PropTypes.string
};

export default ListItem