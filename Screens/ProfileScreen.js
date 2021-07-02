import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = ({navigation}) => {
    return (
      <View style={styles.homeContainer}>
    <View>
      <Image 
        source = {require('../assets/Images/@rengan.jpeg')}
        style = {styles.homeImage}
      />
    </View>
    <View style={{alignItems : "center", flex : 0.8}}>
      <Text style={styles.homeText}>Profile Screen</Text>
      <TouchableOpacity
        style = {styles.touchButton}
        onPress = { () => {
          navigation.navigate("Explore", {
              userName : "Rengan",
              action : "Listen to the Music!",
          });
        }}
      > 
          <Text style={{fontFamily : "Montserrat-Regular", textAlign : "center", fontWeight : "300", fontSize : 20}}>Go to Explore Screen</Text>
      </TouchableOpacity>
    </View>
    </View>
    );
  }

export default ProfileScreen;

const styles = StyleSheet.create ({
  container : {
    flex : 0.8,
    justifyContent : "center",
    alignItems : "center"
  },
  containerImage : {
    width : 100,
    height : 100,
  },
  homeContainer : {
    flex : 0.8,
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "#f2f2f2"
  },
  homeImage : {
    width : 300,
    height : 200,
    resizeMode : "contain",
    borderRadius : 50
  },
  homeText : {
    textAlign : "center",
    padding : 20,
    fontSize : 20,
    fontWeight : "100",
    fontFamily : "Montserrat-Medium",
  },
  touchButton : {
    marginTop : 20,
    backgroundColor : "#ccccff",
    paddingVertical : 12,
    width : 250,
    borderRadius : 12,
    alignItems : "center",
  },
});

