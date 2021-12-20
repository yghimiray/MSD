import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';
import GlobalContext from './Context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { report } from '../../../backend/userRoute';

const Log =({timeStamp,city, state })=>{
    return(
        <View>
            <Text>Date: {new Date(timeStamp).toDateString()}</Text>
            <Text>Date: {city}</Text>
            <Text>Date: {state}</Text>
        </View>
    )
}




const Logs = () => {
    const {state, helpers:{logout}} = useContext(GlobalContext)
    const [logs, setLogs] = useState([])

    const signout =async ()=>{
        logout(null)
            // try {
            //     const value = await AsyncStorage.removeItem('@storage_Key')
            //   } catch(e) {
            //     // error reading value
            //   }
    }

const getLogs= async ()=>{
    const rawResponse = await fetch('http://localhost:3000/users/logs',{
        headers:{'Authorization':'Bearer '+ state.encoded_token}
    })
    const response = await rawResponse.json()
    setLogs(reponse.logs)
}

useEffect(()=>{
    getLogs()
},[])


    return (
        <View style={styles.container} >
             <TouchableOpacity onPress={signout}>
                <Text style={styles.title}>Sign Out </Text>
            </TouchableOpacity>
            <Text style={styles.title}>This is a Logs page </Text>
           <ScrollView>
               {logs.map(log=><Log {...log} />)}
           </ScrollView>
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
export default Logs;