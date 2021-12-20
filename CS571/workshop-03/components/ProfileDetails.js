import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import Separator from './Separator';
import Badge from './Badge';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobalContext from './Context';

const ProfileDetails = ({route:{params},navigation}) => {
    // const data = params.data
    const context = useContext(GlobalContext)
    const data = context.user;

    const detailsArr = ['company', 'location', 'followers', 'following', 'email', 'bio'];

    return (
        <SafeAreaView style={styles.container}>
        <Badge userInfo={data}/>
        <TouchableOpacity style={styles.rowContainer}>
            <Text style={styles.rowTitle}>Company</Text>
            <Text style={styles.rowContent}>{data.company}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer}>
            <Text style={styles.rowTitle}>Location</Text>
            <Text style={styles.rowContent}>{data.location}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer}>
            <Text style={styles.rowTitle}>Followers</Text>
            <Text style={styles.rowContent}>{data.followers}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer}>
            <Text style={styles.rowTitle}>Following</Text>
            <Text style={styles.rowContent}>{data.following}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer}>
            <Text style={styles.rowTitle}>Bio</Text>
            <Text style={styles.rowContent}>{data.bio}</Text>
        </TouchableOpacity>
       
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    rowContainer: {
        padding: 10
    },
    rowTitle: {
        color: '#48BBEC',
        fontSize: 16
    },
    rowContent: {
        fontSize: 19
    }
});
export default ProfileDetails;