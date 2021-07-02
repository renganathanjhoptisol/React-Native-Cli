import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerItem } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent (props) {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Avatar.Image
                                source={require('../assets/Images/@rengan.jpeg')}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Rengan</Title>
                                <Caption style={styles.caption}>@rengan</Caption>
                            </View>
                        </View>
                    </View>

                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem 
                                label="Home"
                                onPress={()=> {props.navigation.navigate('Home')}}
                            /> 
                            <DrawerItem 
                                label="Updates"
                                onPress={()=> {props.navigation.navigate('Details')}}
                            />  
                            <DrawerItem 
                                label="Profile"
                                onPress={()=> {props.navigation.navigate('Profile')}}
                            />  
                            <DrawerItem 
                                label="Explore"
                                onPress={()=> {props.navigation.navigate('Explore')}}
                            />  
                        </Drawer.Section>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    label="sign Out"
                    onPress={()=> {}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent : {
        flex : 1,
    },
    userInfoSection : {
        paddingLeft : 20,
    },
    title : {
        fontSize : 16,
        marginTop : 3,
        fontWeight : 'bold',
    },
    caption : {
        fontSize : 14,
        lineHeight : 14,
    },
    row : {
        marginTop : 20,
        flexDirection : 'row',
        alignItems : 'center',
    },
    section : {
        flexDirection : 'row',
        alignItems : 'center',
        marginRight : 15,
   },
   paragraph : {
       fontWeight : 'bold',
       marginRight : 3,
   },
   drawerSection : {
       marginTop : 15,
   },
   bottomDrawerSection : {
       marginBottom : 15,
       borderTopColor : "#f4f4f4",
       borderTopWidth : 1,
   },
   preference : {
       flexDirection : 'row',
       justifyContent : 'space-between',
       paddingVertical : 12,
       paddingHorizontal : 16,
   },
});