import 'react-native-gesture-handler';
import React, { useEffect, useReducer } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Search from './components/Search';
import Dashboard from './components/Dashboard';
import ProfileDetails from './components/ProfileDetails';
import Repositories from './components/Repositories';
import Notes from './components/Notes';
import WebView from './components/WebView';
import STORAGE, { storeData, getData } from './components/storage';



const Stack = createNativeStackNavigator()
import GlobalContext, { ACTION, reducer } from './components/Context';


export default function App() {

  const [{ user, repos }, dispatch] = useReducer(reducer, { user: {}, repos: [] })

  const setUser = (thisUser) => {
    dispatch({ type: ACTION.SET_USER, user: thisUser })
  }

  const setRepos = (thisRepos) => {
    dispatch({ type: ACTION.SET_REPOS, repos: thisRepos })
  }
  const getLocalData = async () => {
    const data = await getData(STORAGE.KEY)
    if (data) {
      const currentTime = new Date().getTime()
      if(currentTime-data.createdTime <= 30*24*60*60*1000){
        dispatch({ type: ACTION.INIT_DATA, data })
      }
    }
  }

  useEffect(() => {
    getLocalData()
  }, [])

  return (
    <NavigationContainer>
      <GlobalContext.Provider value={user, repos, setUser, setRepos}>
        <Stack.Navigator screenOptions={{ // make navigator common to all screens
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          <Stack.Screen name='Search' component={Search} options={{ title: 'Search' }} />
          <Stack.Screen name='Dashboard' component={Dashboard} options={{ title: 'Dashboard', headerShown: false }} />
          <Stack.Screen name='ProfileDetails' component={ProfileDetails} options={{ title: 'Profile Details', }} />
          <Stack.Screen name='Repositories' component={Repositories} options={{ title: 'Repositories', }} />
          <Stack.Screen name='Notes' component={Notes} options={{ title: 'Notes', }} />
          {/* 
        <Stack.Screen
          name='WebView'
          component={WebView}
          options={{
            title: 'WebView',
          }}
        /> */}

        </Stack.Navigator>
      </GlobalContext.Provider>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: 'lightblue',
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    // flex: 1,
    borderColor: 'white',
    borderStyle: 'solid',
    fontSize: 25,
    padding: 5,
    borderWidth: 2,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // flex: 1,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    // flex: 1,
    backgroundColor: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
})