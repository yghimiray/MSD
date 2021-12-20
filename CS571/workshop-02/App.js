import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CoursesList from './components/CoursesList';
import About from './components/About';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseDetails from './components/CourseDetails';
import AddReview from './components/AddReview';

const BottomTab = createMaterialBottomTabNavigator()
const Stack = createNativeStackNavigator()


const CourseStack = ()=>{
  return(
    <Stack.Navigator screenOptions={{ // make navigator common to all screens
      headerTitleAlign: 'center',
    }} >
      <Stack.Screen name = 'CoursesList' component={CoursesList}  />
      <Stack.Screen name = 'CourseDetails' component={CourseDetails}  />
      <Stack.Screen name = 'AddReview' component={AddReview}  />
    </Stack.Navigator>
  )
}



export default function App() {

  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name='COURSE_STACK'
          component={CourseStack}
          options={{
            tabBarLabel: 'Courses',
            tabBarIcon: () => (
              <MaterialIcons name="subject" size={24} color="black" />
            ),
          }}
        />
        <BottomTab.Screen
          name='ABOUT'
          component={About}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: () => (
              <Ionicons name="ios-information-circle" size={24} color="black" />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
