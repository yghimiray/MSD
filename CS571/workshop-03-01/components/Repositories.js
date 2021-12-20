import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, SafeAreaView, FlatList } from 'react-native';
import STORAGE,{ storeData } from './storage';
import Separator from './Separator';
import Badge from './Badge';
import GlobalContext from './Context';

function Repositories({ route: { params }, navigation }) {
    // const data = params.data;
    const context = useContext(GlobalContext)
    const data = context.user;

    // const [state, setState] = useState({ list: [], loading: false, error: '' })

    const fetchData = async () => {
        if(!context.repos || context.repos.length===0){
            const response = await fetch(data.repos_url)
        const repos = await response.json()
        // setState({ ...state, list: repos })
        context.setRepos(repos)
        storeData(STORAGE.KEY, {user: context.user, repos: repos})
        }
    }

   

    useEffect(() => {
        fetchData()
    }, [])


    const ReposDetails = (props) => {
        return (
            <View style={styles.rowContainer}>
                <TouchableOpacity onPress={() => { navigate('WebView', { url: props.data.html_url }) }}>
                    <Text style={styles.name}>{props.data.name}</Text>
                    <Text style={styles.description}>{props.data.description}
                    </Text>
                </TouchableOpacity>
                <Separator></Separator>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Badge userInfo={{ avatar_url: data.avatar_url, name: data.name, login: data.login }} />
            <FlatList
                data={state.list}
                renderItem={({ item }) => <ReposDetails data={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        color: '#48BBEC',
        fontSize: 18,
        paddingBottom: 5
    },
    stars: {
        color: '#48BBEC',
        fontSize: 14,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    }
});

export default Repositories;