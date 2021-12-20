import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()
const Services = createNativeStackNavigator()



function Quotes({ navigation }) {
  const [quote, setQuote] = useState("")
  const fetchQuotes = async () => {
    const response = await fetch('https://api.kanye.rest', {
      method: 'GET'
    })
    const data = await response.json()
    setQuote(data.quote)
  }
  return (
    <View>
      <Text style={styles.container} >Quote of the day: </Text>
      <Text style={styles.container}  >{quote}</Text>
      <Button
        style={styles.button}
        title="Refresh"
        onPress={fetchQuotes}
      />
      <Button
        style={styles.button}
        title="See picture of the day"
        onPress={() => navigation.navigate('PIC_OF_THE_DAY')}
      />
    </View>
  )
}






function About({ navigation }) {
  return (
    <View>
      <Text style={{fontSize:20, fontWeight: 'bold', textDecorationLine: 'underline', textAlign: 'center',}}  >About me </Text>
      <Image
        source={'./profile Pic.jpg'}
        style={{ height: 100, width: 100 }} />
<Text style={styles.container}  >Yogesh Ghimiray </Text>
<Text style={styles.container}  >2000 N Court St </Text>
<Text style={styles.container}  >Fairfield, IA, 52556</Text>
<Text style={styles.container}  >yghimiray@miu.edu </Text>
<Text style={{margin: 10}}  >{' '} </Text>
<Text style={{fontSize:20, fontWeight: 'bold', textDecorationLine: 'underline', textAlign: 'center',}}  >Education</Text>
<Text style={styles.container}  >MBA from Maharishi International University</Text>
<Text style={styles.container}  >Chartered Accountant</Text>
<Text style={{margin: 10}}  >{' '} </Text>
<Text style={{fontSize:20, fontWeight: 'bold', textDecorationLine: 'underline', textAlign: 'center',}}  >Profession</Text>
<Text style={styles.container}  >Director of Student Accounts</Text>
<Text style={styles.container}  >Maharishi International University</Text>
    </View>
  )
}



function Home({ navigation }) {
  return (
    <View>
      <Text style={styles.container}  >Welcome Home </Text>
      <Button
        style={styles.button}
        title="See quotes of the day"
        onPress={() => navigation.navigate('QUOTES')}
      />
      <Button
        title="See picture of the day"
        onPress={() => navigation.navigate('PIC_OF_THE_DAY')}
      />
    </View>
  );
}



function PicOfTheDay({ navigation }) {
  const [picture, setPicture] = useState('')
  const fetchPic = async () => {
    const response = await fetch('https://picsum.photos/100', {
      method: 'GET'
    })
    setPicture(response.url)
  }
  return (
    <View>
      <Text style={styles.container} >Picture of the day </Text>
      <Image
        source={{ uri: picture }}
        style={{ height: 100, width: 100 }} />
      <Button
        title="Refresh"
        onPress={fetchPic}
      />
      <Button
        title="See quotes of the day"
        onPress={() => navigation.navigate('QUOTES')}
      />
    </View>
  );
}


function HomeNavigator({ navigation }) {
  return (
    <Services.Navigator screenOptions={{ // make navigator common to all screens
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} >
      <Services.Screen
        name="HOME_SCREEN"
        component={Home}
        options={{
          title: 'Home Screen',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
      />

      <Services.Screen
        name="QUOTES"
        component={Quotes}
        options={{
          title: 'Quotes',
        }}
      />
      <Services.Screen
        name="PIC_OF_THE_DAY"
        component={PicOfTheDay}
        options={{
          title: 'Pic of the day',
        }}
      />
    </Services.Navigator>

  );
}


export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator style={styles.container} >
        <Tab.Screen
          name="HOME"
          component={HomeNavigator}
          options={{
            title: 'Home',
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Ionicons name="md-home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="ABOUT_ME"
          component={About}
          options={{
            title: 'About me',
            headerShown: false,
            tabBarLabel: 'About',
            tabBarIcon: () => (
              <Ionicons name="ios-information-circle" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}






const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 50,
    width: 'auto',
    // backgroundColor:'blue'
  }
});
