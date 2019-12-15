import React, { Component } from 'react';
import { View, Text, StatusBar, Dimensions, Alert } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import NavigationService from './NavigationService';
import SplashScreen from 'react-native-splash-screen';

import Home from '../container/Home';

const AppStack = createStackNavigator({
     Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
})

const rootNavigation = createSwitchNavigator(
    {
        App: AppStack,
    },
    {
        initialRouteName : 'App'
    }
)

const NavAppContainer = createAppContainer(rootNavigation);

class Nav extends Component {
    render() {
        return (
            <NavAppContainer
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        )
    }
}

export default Nav