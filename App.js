import React, {Component} from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
// import _Animation from './src/components/_Animation';
// import _allAnimated from './src/components/Animation/_allAnimated';
import _TextAnimator from './src/components/Animation/_TextAnimator';

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        {/* <_Animation /> */}
        {/* <_allAnimated /> */}
        <_TextAnimator 
          content = 'For the things we have to learn before we can do them, we learn by doing them. REACT NATIVE❤️'
          textStyle = {styles.textStyle}
          style = {styles.containerStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container : {
    flex : 1,
    justifyContent : "center",
    paddingTop : 10,
    backgroundColor : "#ecf0f1",
    padding : 0,
  },
  containerStyle : {},
  textStyle : {
    fontSize : 28,
    fontWeight : "100",
    fontFamily : "Montserrat-Medium",
    marginBottom : 14,
  }
})