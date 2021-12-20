import axios from 'axios';
import React, { useState,useContext } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import GlobalContext from './Context';
import jwt_decode from 'jwt_decode'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {
    const [address, setAddress] = useState('')
    const [loginUser, setLoginUser] = useState({ email: '', password: ''})
    const {helpers:{login}} = useContext(GlobalContext)



    const findLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        const location_address = await Location.reverseGeocodeAsync(location.coords)
        setAddress(location_address);
    }

    useEffect(() => {
        findLocation()
    }, [])



    const loginHandler = async () => {
       const rawResponse = await fetch ('http://localhost:3000/users/login', {
           method:'POST',
           headers:{
               'Content-Type':'application/json',
           },
           body:JSON.stringify({
               ...loginUser, city: address.city, state: address.region
           })
       })
       const response = await rawResponse.json()
       let decoded_token ;
        // response gives us { success:1, accessToken, diff_location }
       if(response.success){
           decoded_token = jwt_decode(response.accessToken)
           if(response.diff_location){
            const isAvailable = await SMS.isAvailableAsync();
            if (isAvailable) {
                const { result } = await SMS.sendSMSAsync(
                    [decoded_token.phone],
                    'You logged in from a new location',
                  )};
           }
           login({decoded_token, encoded_token:response.accessToken})
        //    try {
        //     const jsonValue = JSON.stringify({decoded_token, encoded_token:response.token})
        //     await AsyncStorage.setItem('@storage_Key', jsonValue)
        //   } catch (e) {
        //     // saving error
        //   }
       }
    }

    
    return (
        <View style={styles.container} >
            <Text style={styles.title}>This is a Login page </Text>
            <TextInput
                style={styles.searchInput}
                value={loginUser.email}
                placeholder='email'
                autoCapitalize= 'none'
                autoFocus={true}
                onChangeText={(text) => { setLoginUser({ ...loginUser, email: text }) }}
            />
            <TextInput
                style={styles.searchInput}
                value={loginUser.password}
                secureTextEntry={true}
                placeholder='password'
                onChangeText={(text) => { setLoginUser({ ...loginUser, password: text }) }}
            />
            <TouchableOpacity onPress={loginHandler}>
                <Text style={styles.title}>Sign In </Text>
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

export default Login;