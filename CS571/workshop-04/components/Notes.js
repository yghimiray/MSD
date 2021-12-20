import React, { Component, useState } from 'react';
import {
    StyleSheet, TouchableOpacity, View, Text, SafeAreaView, FlatList, TextInput
} from 'react-native';

import Badge from './Badge';
import Separator from './Separator';



function Notes({route:{params:{data}},navigation}) {
    const [state, setState]= useState([])
    const [note, setNote]=useState('')

    const addNotes=()=>{
        setState([...state,note])
        setNote('')
    }

    const ShowNotes = (props) => {
        return (
        <View style={styles.rowContainer}>
                <Text style={styles.footerContainer}>{props.text}</Text>
                <Separator></Separator>
                </View>
        )}



    return (
        <SafeAreaView style={styles.container}>
        <Badge userInfo={{avatar_url:data.avatar_url, name:data.name, login:data.login}}/>
        <FlatList  
        data={state}
        renderItem={({item})=><ShowNotes text= {item} />}
        keyExtractor={item=>item}
        />
    <View   style={styles.footerContainer} >
    <TextInput 
        style={styles.searchInput} 
        placeholder='New Note' 
        value={note}
        onChangeText={(note)=>setNote(note)}
        >
        </TextInput>
        <TouchableOpacity style={styles.button} onPress={addNotes} >
            <Text style={styles.buttonText}  >Submit</Text>
        </TouchableOpacity>
    </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    button: {
        height: 60,
        backgroundColor: '#48BBEC',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchInput: {
        height: 60,
        padding: 10,
        fontSize: 18,
        color: '#111',
        flex: 10
    },
    rowContainer: {
        padding: 10
    },
    footerContainer: {
        backgroundColor: '#E3E3E3',
        alignItems: 'center',
        flexDirection: 'row'
    }
});

export default Notes;