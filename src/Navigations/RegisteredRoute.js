import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SettingScreen from '../Screens/SettingScreen';
import MainTabScreen from '../Screens/MainTabScreen';
import { DrawerContent } from '../Screens/DrawerContent';
import UnRegisteredRoute from './UnRegisteredRoute';


const Drawer = createDrawerNavigator ();

function RegisteredRoute() {
  return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName = "Login" drawerContent={props => <DrawerContent {...props}/>}>
         <Drawer.Screen name="Login" component={UnRegisteredRoute}/> 
         <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
         <Drawer.Screen name="Drawer" component={DrawerContent}/>
         <Drawer.Screen name="Settings" component={SettingScreen} />
       </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default RegisteredRoute;