import React, { PureComponent } from 'react'
import { Text, View, Linking } from 'react-native'
import PropTypes from 'prop-types'

import styles from './style'

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

export default class About extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Currency Converter </Text>
        <Text style={styles.content}>
            Feel free to use this app, this app it's a test of the React native Tech, 
            if you got any errors send a feedback just contact me at Github 
            <LinkComponent url="https://github.com/BlaShadow"> @blashadow </LinkComponent> or my personal web   
            <LinkComponent url="http://nightdeveloper.net"> Blog </LinkComponent>
        </Text>

        <Text style={styles.content}> All icons and resources are from  
            <LinkComponent url="https://www.flaticon.com/"> Icons </LinkComponent> 
        </Text>

        <Text style={[styles.content, {textAlign: 'center'}]}> 
            Version 1.0
        </Text>
      </View>
    )
  }
}