import 'react-native-gesture-handler';
import React, { useEffect, useReducer, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Logs from './components/Logs';
import GlobalContext from './components/Context';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator()
// const Stack = createNativeStackNavigator()

export default function App() {
  const [state, setState] = useState(null)

  const helpers ={
    login: async (obj)=>{
      setState(obj)
      try {
        const jsonValue = JSON.stringify(state)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
      } catch (e) {
        // saving error
      }},
    logout: async ()=>{
      setState(null)
      try {
        const value = await AsyncStorage.removeItem('@storage_Key')
      } catch(e) {
        // error reading value
      }
    }
  }


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if (value !== null) {
        setState(JSON.parse(value))
      }
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <GlobalContext.Provider value={{ state, helpers }}>
      <Stack.Navigator>
        {state ? <Stack.Screen name='Logs' component={Logs} /> :
          <>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
          </>
        }
      </Stack.Navigator>
    </GlobalContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
