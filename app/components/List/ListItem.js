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
            { this.props.selected ? <Icon selected={true} /> : null }
            { this.props.customIcon }
        </View>
      </TouchableHighlight>
    )
  }
}

ListItem.PropTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool,
    handleOnPress: PropTypes.func,
    customIcon: PropTypes.element
};

export default ListItem