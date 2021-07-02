import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './Screens/MainTabScreen';
import SettingScreen from './Screens/SettingScreen';


import { DrawerContent } from './Screens/DrawerContent';

const Drawer = createDrawerNavigator ();

export default class App extends Component {
  render() {
    return (
     <NavigationContainer>
       <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
         <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
         <Drawer.Screen name="Settings" component={SettingScreen} />
       </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
