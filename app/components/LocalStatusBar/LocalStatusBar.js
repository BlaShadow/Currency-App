import React from 'react';
import { StatusBar } from 'react-native';

const DarkStatusBar = () => <StatusBar backgroundColor="blue" translucent={true} barStyle="dark-content" />

export default () => <StatusBar backgroundColor="blue" translucent={false} barStyle="light-content" />

export { DarkStatusBar };