
import React from 'react';
import {
    AppRegistry,
    View,
    Text,
    TouchableHighlight,
    Navigator
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';

const AppNavigation = StackNavigator({
    Login: {screen: LoginPage},
    Home: {screen: HomePage}
});

AppRegistry.registerComponent('aierLifeRN', () => AppNavigation);