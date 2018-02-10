import React, { PureComponent } from 'react'
import { Text, View, Linking } from 'react-native'
import PropTypes from 'prop-types'

class LinkComponent extends PureComponent{
    render(){
        return (
            <Text style={{color: 'blue'}}
                  onPress={() => Linking.openURL(this.props.url)}>
                {this.props.children}
            </Text>
        );
    }
}

LinkComponent.propTypes = {
    children: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default LinkComponent;