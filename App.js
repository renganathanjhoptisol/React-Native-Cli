import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './Screens/MainTabScreen';

import { DrawerContent } from './Screens/DrawerContent';

const Drawer = createDrawerNavigator ();


export default class App extends Component {
  render() {
    return (
     <NavigationContainer>
       <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
         <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
       </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
