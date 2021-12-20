import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import GlobalContext from './Context';
import STORAGE,{ storeData } from './storage';


const Search = ({ navigation: { navigate } }) => {

    const [user, setUser] = useState('');
    const [state, setState] = useState({ isLoading: false, error: false })
    const context = useContext(GlobalContext)



    const searchByUsername = async () => {
        setState({ isLoading: true, error: false })
        if (context.user && context.user.login === user) {
            navigate('Dashboard')
        } else {
            try {
                const response = await fetch('https://api.github.com/users/' + user.username)
                const jsonData = await response.json()
                if (jsonData?.id) {
                    context.setUser(jsonData)
                    storeData(STORAGE.KEY, {createdTime: new Date().getTime(), user: jsonData, repos: context.repos})
                    navigate('Dashboard')
                    setState({ ...state, isLoading: false })
                } else {
                    throw new Error('Profile not found')
                }
            } catch (e) {
                setUser({ ...user, error: e })
            }

        }
    }



    return (
        <View style={styles.container} >
            <Text style={styles.title}>Search for a GitHub user </Text>
            <TextInput
                style={styles.searchInput}
                placeholder='GitHub username'
                value={user.username}
                autoCapitalize={false} // no capital letters
                autoFocus={true} // give the keyboard immediately
                onChangeText={(text) => { setUser(text) }}
            />
            <TouchableOpacity style={styles.button} onPress={search}>
                <Text style={styles.buttonText}>Search</Text>
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
export default Search;