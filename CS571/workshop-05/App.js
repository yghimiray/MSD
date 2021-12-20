import 'react-native-gesture-handler';
import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Logs from './components/Logs';
import GlobalContext, { ACTION, reducer } from './components/Context';


const Stack = createStackNavigator()
// const Stack = createNativeStackNavigator()

export default function App() {
  const [{user,logs}, dispatch] = useReducer(reducer,{user:{}, logs:[]})
  
  const setContextUser=(thisUser)=>{
    dispatch({type:ACTION.SET_USER, user:thisUser})
  }
  
  const setContextLogs=(thisLogs)=>{
    dispatch({type:ACTION.SET_LOGS, logs:thisLogs})
  }

  return (
    <GlobalContext.Provider value={user, logs, setContextUser, setContextLogs}>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='SignUp' component={SignUp}/>
      <Stack.Screen name='Logs' component={Logs}/>
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
