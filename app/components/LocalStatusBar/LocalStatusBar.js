import React from 'react';
import { StatusBar, View } from 'react-native';

const statusWrapStyles = []

const DarkStatusBar = () => (
    <View style={statusWrapStyles}>
        <StatusBar backgroundColor="#333333" translucent={true} barStyle="dark-content" />
    </View>
)

export default () => (
    <View style={statusWrapStyles}>
        <StatusBar backgroundColor="#333333" translucent={true} barStyle="light-content" />
    </View>
)

export { DarkStatusBar };