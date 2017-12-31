import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, Keyboard, Animated, Platform, StyleSheet } from 'react-native';

import styles from './style';

//milli seconds
const ANIMATION_DURATION = 250;
class Logo extends Component {
    constructor(props){
        super(props);

        this.backgroundImagewidth = new Animated.Value(styles.$containerSize);
        this.imageWidth = new Animated.Value(styles.$largeImageSize);
    }

    componentDidMount(){
        //Create keyboard listener
        const platformKeyword = Platform.OS === 'ios' ? 'Will' : 'Did';
        this.showKeyboarListener = Keyboard.addListener(`keyboard${platformKeyword}Show`, this.handleShowKeyboard)
        this.hideKeyboarListener = Keyboard.addListener(`keyboard${platformKeyword}Hide`, this.handleHideKeyboard)
    }

    componentWillUnmount(){
        //Remove all created listener
        this.showKeyboarListener.remove();
        this.hideKeyboarListener.remove();
    }

    handleShowKeyboard = () => {
        Animated.parallel([
            Animated.timing(this.backgroundImagewidth, {
                toValue: styles.$smallContainer,
                duration: ANIMATION_DURATION
            }),
            Animated.timing(this.imageWidth, {
                toValue: styles.$smallimageSize,
                duration: ANIMATION_DURATION
            }),
        ]).start();
    }

    handleHideKeyboard = () => {
        Animated.parallel([
            Animated.timing(this.backgroundImagewidth, {
                toValue: styles.$containerSize,
                duration: ANIMATION_DURATION
            }),
            Animated.timing(this.imageWidth, {
                toValue: styles.$largeImageSize,
                duration: ANIMATION_DURATION
            }),
        ]).start();
    }

    render(){
        let imageContainerStyle = [
            styles.backgroundImage,
            {
                width: this.backgroundImagewidth,
                height: this.backgroundImagewidth,
            }
        ];

        let imageStyle = [
            styles.insideImage,
            {
                width: this.imageWidth,
                height: this.imageWidth,
                tintColor: 'red'
            }
        ];

        return (
            <View style={styles.container}>
                <Animated.View style={imageContainerStyle}>
                    <Animated.Image 
                        resizeMode="contain" 
                        style={[StyleSheet.absoluteFill, {tintColor: '#f0f0f0'}, imageContainerStyle]} 
                        source={require('./Images/hexagon.png')} />

                    <Animated.Image 
                        resizeMode="contain" 
                        style={imageStyle} 
                        source={require('./Images/two_way.png')} />

                </Animated.View>

                <Text style={styles.textLogo}>Currency Converter</Text>
            </View>
        );
    }
}

export default Logo;