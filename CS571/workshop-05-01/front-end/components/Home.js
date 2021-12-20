import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const Home = ({navigation:{navigate}}) => {

    const login =()=>{
        navigate('Login')
    }

    const signUp=()=>{
        navigate('SignUp')
    }

    return (
        <View style={styles.container} >
            <Text style={styles.title}>This is a home page </Text>
            <TouchableOpacity onPress={login}>
            <Text style={styles.title}>Sign In </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={signUp}>
            <Text style={styles.title}>Sign Up </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#48BBEC',
        justifyContent: 'center',
        padding: 30,
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: 'white'
    },
    searchInput: {
        height: 50,
        padding: 5,
        marginRight: 5,
        fontSize: 22,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        color: 'white'
    },
    buttonText: {
        fontSize: 20,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    error: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
});
export default Home;