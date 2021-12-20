import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import GlobalContext from './Context';
// import Badge from './Badge';
// import Separator from './Separator';

const Dashboard = ({route:{params},navigation}) => {
    // const data =params.data;
    const context = useContext(GlobalContext)
    const data = context.user;

    const profileDetailsHandler = ()=>{
        navigation.navigate('ProfileDetails')
    }

    const repositoriesHandler = async ()=>{
        navigation.navigate('Repositories')
    }

    const notesHandler = ()=>{
        navigation.navigate('Notes')
    }
    useEffect(()=>{
        navigation.setOptions({
            title: data.name
        })
    },[])

    return (
        <View>
            {/* <Text style={styles.box}>{data.name}</Text> */}
            <View style={styles.profilePicBox}>
            <Image style={styles.image}
            source={{uri:data.avatar_url}}
            />
            </View>
            {/* <Badge></Badge> */}
            <TouchableOpacity style={styles.blue} onPress={profileDetailsHandler}>
                <Text style={styles.buttonText}>Profile Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pink} onPress={repositoriesHandler}>
                <Text style={styles.buttonText}>Repositories</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.purple} onPress={notesHandler}>
                <Text style={styles.buttonText} >Notes</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        padding: 0,
    },
    profilePicBox: {
        flex: 2,
    },
    image: {
        height: 350
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 26,
        alignItems: 'center',
    },
    blue: {
        backgroundColor: 'powderblue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purple: {
        backgroundColor: 'violet',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pink: {
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default Dashboard;