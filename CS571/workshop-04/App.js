import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Search from './components/Search';
import Dashboard from './components/Dashboard';
import ProfileDetails from './components/ProfileDetails';
import Repositories from './components/Repositories';
import Notes from './components/Notes';
import WebView from './components/WebView';

const Stack = createNativeStackNavigator()
export const AuthContext = React.createContext()


export default function App() {

  const [state,dispatch] = React.useReducer((prevState,action)=>{
    switch(action.type){
      case 'SIGN_IN' : return {...prevState, userData: action.data}
      // case 'RESTORE_DATA' : return {...prevState, data: action.value}
      // case 'RESTORE_REPO' : return {...prevState, repos: action.value}
    }
  },{
    // repos:null,
    userData:{}
  })  


  const authContext = React.useMemo(() => {
    return ({
        signIn: async (username) => {
            try{
                const response = await fetch('https://api.github.com/users/'+username)
                const value = await response.json()
                // navigate('Dashboard',{data})
                dispatch({type:'SIGN_IN',data: value })
              } catch(e){
                   console.log(e)
               }
               console.log(state)
            // dispatch({type:'SIGN_IN',data: value })
        },
        // searchRepo: async ()=>{
        //     try{
        //         const response = await fetch(value.repos_url)
        //         const reposValue = await response.json()
        //     } catch(e){
        //         console.log(e)
        //     }
        //     dispatch({type:'RESTORE_REPO',repos: reposValue })
        // }
    })
})



  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
      <Stack.Navigator screenOptions={{ // make navigator common to all screens
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen
          name='Search'
          component={Search}
          options={{
            title: 'Search'
          }}
        />
        <Stack.Screen
          name='Dashboard'
          component={Dashboard}
          options={{
            title: 'Dashboard',
            headerShown: false
          }}
        />
        <Stack.Screen
          name='ProfileDetails'
          component={ProfileDetails}
          options={{
            title: 'Profile Details',
          }}
        />
        <Stack.Screen
          name='Repositories'
          component={Repositories}
          options={{
            title: 'Repositories',
          }}
        />
        <Stack.Screen
          name='Notes'
          component={Notes}
          options={{
            title: 'Notes',
          }}
        />
{/* 
        <Stack.Screen
          name='WebView'
          component={WebView}
          options={{
            title: 'WebView',
          }}
        /> */}

      </Stack.Navigator>
      </AuthContext.Provider>
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