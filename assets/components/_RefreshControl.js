import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default class refreshControl extends Component {
    state = {
        persons : [
            {name : "mukesh"},
            {name : "ramesh"},
            {name : "suresh"},
            {name : "hitesh"},
        ],
        isLoading : false,
    }

    _onRefresh () {
        this.setState({
            isLoading : true
        }, 
        
        () => {
            this.setState ({
                persons : [...this.state.persons, {name : "ranbeer"}],
                isLoading : false
            })
        }
        
        )
    }

    render () {
       
        return (
            <View>
                <Text style={styles.headerText}>Pull To RefreshControl In FlatList</Text>
                <FlatList 
                    style = {styles.listItem}
                    data = {this.state.persons}
                    renderItem = {({item}) => {
                        return <Text style={styles.listName}>{item.name}</Text>
                    }}
                    keyExtractor = {(item, index) => item.name} 
                    refreshing ={this.state.isLoading}
                    onRefresh = {() => this._onRefresh()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    headerText : {
        fontFamily : "Montserrat-Bold",
        textAlign : "center",
        paddingTop : 20,
    },  
    listItem : {
        backgroundColor : "#ddd",
        marginVertical : 10,
        padding : 10,
    },
    listName : {
        padding : 20,
        textAlign : "center",
        justifyContent : "center",
        fontFamily : "Montserrat-Bold",
        fontSize : 20
    }
});