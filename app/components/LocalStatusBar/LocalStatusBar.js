import React from 'react';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux'
import Color from 'color'

const statusWrapStyles = [{
    height: 0,
}]

const DarkStatusBarComponent = ({themeColor}) => {
    const darkenColor =  Color(themeColor).darken(0.4);

    return (
        <View style={statusWrapStyles}>
            <StatusBar backgroundColor={darkenColor} translucent={false} barStyle="light-content" />
        </View>
    )
}

const LocalStatusBarComponent = ({themeColor}) => {
    const darkenColor = Color(themeColor).darken(0.4);

    return (
        <View style={statusWrapStyles}>
            <StatusBar backgroundColor={darkenColor} translucent={false} barStyle="light-content" />
        </View>
    )
}

const stateToProps = (state) => ({
    themeColor: state.appState.mainColor
})

const LocalStatusBar = connect(stateToProps)(LocalStatusBarComponent)
const DarkStatusBar = connect(stateToProps)(DarkStatusBarComponent)

export default LocalStatusBar;
export { DarkStatusBar };