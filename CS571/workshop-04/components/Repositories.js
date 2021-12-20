import React, { useEffect, useState } from 'react';
import {
    StyleSheet, TouchableOpacity, View, Text, SafeAreaView, FlatList
} from 'react-native';

import Separator from './Separator';
import Badge from './Badge';

function Repositories({route:{params:{data}},navigation}) {
    const [state, setState] = useState({list:[], loading:false, error:''})

    const fetchData=async ()=>{
        const response = await fetch(data.repos_url)
        const repos = await response.json()
        setState({...state,list:repos})
    }
    useEffect(()=>{
      fetchData()
    },[])


    const ReposDetails = (props) => {
        return (
        <View style={styles.rowContainer}>
            <TouchableOpacity onPress={()=>{navigate('WebView',{url:props.data.html_url})}}>
                <Text style={styles.name}>{props.data.name}</Text>
                <Text style={styles.description}>{props.data.description}
                </Text>
                </TouchableOpacity>
                <Separator></Separator>
                </View>
        )}
        
    return (
        <SafeAreaView style={styles.container}>
        <Badge userInfo={{avatar_url:data.avatar_url, name:data.name, login:data.login}}/>
          <FlatList
          data={state.list}
          renderItem={({item})=><ReposDetails data={item}/>}
          keyExtractor={item=> item.id}
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