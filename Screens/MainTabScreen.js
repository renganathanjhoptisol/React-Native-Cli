import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
 
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        barStyle={{ backgroundColor: '#009387' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailStackScreen}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
  )
  
export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions = {{
      headerStyle : {
       backgroundColor : "#009387"
     },
     headerTintColor : "#fff",
     headerTitleStyle : {
       fontWeight : "bold"
     }
    }}>
      <HomeStack.Screen name = "Home" component = {HomeScreen} options={{
        title : "OverView",
        headerLeft : () => (
          <Icon.Button name="ios-menu" size={25}backgroundColor = "#009387" 
          onPress={() => {
            navigation.openDrawer() 
          }} > </Icon.Button>
        )
      }}/>
    </HomeStack.Navigator>
  );
  
  const DetailStackScreen = ({navigation}) => (
    <DetailStack.Navigator screenOptions = {{
      headerStyle : {
       backgroundColor : "#009387"
     },
     headerTintColor : "#fff",
     headerTitleStyle : {
       fontWeight : "bold"
     }
    }}>
      <DetailStack.Screen name = "Details" component = {DetailScreen} options={{
         headerLeft : () => (
          <Icon.Button name="ios-menu" size={25}backgroundColor = "#009387" 
          onPress={() => {
            navigation.openDrawer() 
          }} > </Icon.Button>
        )   
      }}/>
    </DetailStack.Navigator>
  );