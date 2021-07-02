import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen';

const Tab = createBottomTabNavigator ();

export default class Navigation extends Component {
    render () {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name = "Home" component = {HomeScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}