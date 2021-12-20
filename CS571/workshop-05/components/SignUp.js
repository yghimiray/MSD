import React, { useState , useEffect, useContext} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { NavigationHelpersContext } from '@react-navigation/core';
import GlobalContext from './Context';


const SignUp = ({navigation:{navigate}}) => {
    const [location, setLocation] = useState('')
    const[user,setUser]=useState({email:'',password:'',phone:'',loggedLocation:{},prev_location:[]})
    const context = useContext(GlobalContext)


    const findLocation=async ()=>{
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);    
    }

    useEffect(()=>{
        const now = Date();
        // findLocation()
        setUser({...user, prev_location: user.prev_location.push({Location:"FF", time: now})})
    },[])

    const signUp= ()=>{
         axios.post('http://localhost:3000/users', user)
        context.setContextUser(user)
         setUser({email:'',password:'',phone:'',loggedLocation:{},prev_location:[]})
         navigate('Logs')
    }

    return (
        <View style={styles.container} >
            <Text style={styles.title}>This is a SignUp page </Text>
            <TextInput 
            style={styles.searchInput} 
            value={user.email}
            placeholder='email' 
            autoFocus={true}
            onChangeText={(text)=>{setUser({...user, email: text})}}
            />
            <TextInput 
            style={styles.searchInput} 
            value={user.password}
            placeholder='password' 
            onChangeText={(text)=>{setUser({...user, password: text})}}
            />
            <TextInput 
            style={styles.searchInput} 
            value={user.phone}
            placeholder='phone' 
            onChangeText={(text)=>{setUser({...user, phone: text})}}
            />
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
export default SignUp;