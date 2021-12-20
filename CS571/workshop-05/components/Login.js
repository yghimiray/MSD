import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import GlobalContext from './Context';

const Login = ({ navigation: { navigate } }) => {
    const [location, setLocation] = useState('')
    const [user, setUser] = useState({ email: '', password: '',loggedLocation:{} })
    const context = useContext(GlobalContext)



    const findLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    }

    useEffect(() => {
        const now = Date();
        // findLocation()
        // setUser({...user, loggedLocation: {Location:location, time: now}})
        setUser({...user, loggedLocation: {Location:"FF", time: now}})
    }, [])



    const login = () => {
        axios.post('http://localhost:3000/users/login', user)
        // context.setContextUser(user)
        setUser({ email: '', password: '' ,loggedLocation:{}})
        navigate('Logs')
        
    }

    return (
        <View style={styles.container} >
            <Text style={styles.title}>This is a Login page </Text>
            <TextInput
                style={styles.searchInput}
                value={user.email}
                placeholder='email'
                onChangeText={(text) => { setUser({ ...user, email: text }) }}
            />
            <TextInput
                style={styles.searchInput}
                value={user.password}
                placeholder='password'
                onChangeText={(text) => { setUser({ ...user, password: text }) }}
            />
            <TouchableOpacity onPress={login}>
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