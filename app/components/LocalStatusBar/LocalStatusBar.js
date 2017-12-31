import React from 'react';
import { StatusBar } from 'react-native';

const DarkStatusBar = () => <StatusBar translucent={true} barStyle="dark-content" />

export default () => <StatusBar translucent={false} barStyle="light-content" />

export { DarkStatusBar };