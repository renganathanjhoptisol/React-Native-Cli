import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ExploreScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Explore Screen</Text>
      </View>
    );
  }

export default ExploreScreen;

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },
});