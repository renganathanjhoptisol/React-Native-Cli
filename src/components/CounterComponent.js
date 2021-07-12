import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button 
            title = "Increse"
            accessibilityLabel = "Increse"
            onPress = { this.props.increment }
        />

        <Text> {this.props.count} </Text>

        <Button 
            title = "Decrese"
            accessibilityLabel = "Decrese"
            onPress = { this.props.decrement }
        />

      </View>
    );
  }
}

export default CounterApp;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#fff",
        justifyContent : "center",
        alignItems : "center",
    },
})
