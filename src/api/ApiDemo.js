import axios from "axios";
import React, { Component } from "react";
import { View, Text , StyleSheet, TouchableOpacity} from "react-native";

// GET a data from JSON Placeholder Using Axios Api 
const getDataUsingSimpleGetCall = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(response){
        // handle success
        alert(JSON.stringify(response.data))
    })
    .catch(function(err){
        // handle error
        alert(err.message);
    })
    .finally(function(){
        // always executed
        alert('Finally called')
    });
};

// Get a Async & Await Using GET a Data Using Axios Api
const getDataUsingAsyncAwaitGetCall = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1',);
        alert(JSON.stringify(response.data));
    } catch(err) {
        // handle Error
        alert(err.message);
    }
}

// Using Post function In Axios Api using JSON Placeholder (SimplePostCall)
const postDataUsingSimplePostCall = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts',{
        title : 'foo',
        body : 'bar',
        userId : 1,
    })
    .then(function(response){
        // handle success
        alert(JSON.stringify(response.data));
    })
    .catch(function(err){
        // handle error
        alert(err.message);
    })
}

const multipleRequestsInSingleCall = () => {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(function(response){
            // handle success
            alert('Post 1:' +JSON.stringify(response.data))
        }),
        axios.get('https://jsonplaceholder.typicode.com/posts/2')
        .then(function(response){
            // handle successs
            alert('Post 2:' +JSON.stringify(response.data))
        }),
    ])
    .then(axios.spread(function(acct, perms){
        // Both requestes are now complete
        alert('Both requests are now complete');
    }),
    );
    
}

export default class Api extends Component {
     
    render () {
        return(
            <View style={styles.container}>
                <Text style={{fontSize:20, textAlign:"center", fontFamily:"Montserrat-Regular", fontWeight:"900"}}>
                    Example of Axios Networking in React Native
                </Text>
                    {/* Running GET Request */}
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress = {getDataUsingSimpleGetCall}
                >
                    <Text>SimpleGetCall</Text>
                </TouchableOpacity>
                
                    {/* Running Async & Await GET methods */}
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress = {getDataUsingAsyncAwaitGetCall}
                >
                    <Text>Data Using Async Await GET</Text>
                </TouchableOpacity>

                    {/* POST data Using POST Method */}
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress = {postDataUsingSimplePostCall}
                >
                    <Text>Post Data Using POST</Text>
                </TouchableOpacity>
                    {/* Multiple Concurrent Requests In Single Call */}
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress = {multipleRequestsInSingleCall}
                >
                    <Text>Multiple Concurrent Requests In Single Call</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        padding : 16,
    },
    buttonStyle : {
        alignItems : "center",
        backgroundColor : "#DDDDDD",
        padding : 10,
        width : '100%',
        marginTop : 16,
    },
})