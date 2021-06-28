import React, { Component } from 'react';
import { View, StyleSheet, Animated, Text, Button } from 'react-native';

export default class animation extends Component {
    
    // fadeAnim will be used as the value for opactiy. Initial value : 0
    state = {
        fadeAnim : new Animated.Value(0),
    };

    componentDidMount () {
        this.fadeIn()
    }

    componentWillUnmount () {                                                                                                                      
        this.fadeOut()
    }                                                                                                                              

    fadeIn = () => {
        // will change fadeAnim value to 1 in 5 seconds
        Animated.timing (this.state.fadeAnim, {
            toValue : 1,
            duration : 1000,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            useNativeDriver: true,
        }).start( () => {
            setTimeout(() => {
                this.fadeOut()
            }, 1000);
        });
    };

    fadeOut = () => {
        // will change fadeAnim value to 0 in 3 seconds
        Animated.timing(this.state.fadeAnim, {
            toValue : 0,
            duration : 1000,                            
            useNativeDriver: true,
        }). start(() => {
            setTimeout(() => {   
                this.fadeIn()
            }, 1000);
        });
    };

    render () {   
        

        return(

            <View style={styles.container}>
                <Animated.View 
                    style = {[
                        styles.fadingContainer,
                        {
                            opacity : this.state.fadeAnim
                        }
                    ]}
                >
                    <Text style={styles.fadinText}>Welcome React!🙂</Text>
                </Animated.View>
                <View style={styles.buttonRow}>
                    <Button title = "Visible"  />
                    <Button title = "Invisible"  />
                </View>
            </View>

        );

    }

}

const styles = StyleSheet.create ({
    container : {
        alignItems : "center",
        justifyContent : "center"
    },
    fadingContainer : {
        margin : 30,
        padding : 10,
        backgroundColor : "powderblue",
    },  
    fadinText : {
        fontSize : 28,
    },
    buttonRow : {
        marginBottom : 30,
        flexBasis : 100,
        justifyContent : "space-evenly",
        marginVertical : 100,
    }

});