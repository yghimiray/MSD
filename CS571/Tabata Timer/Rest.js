import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { myContext } from './App';
import WorkOut from './WorkOut';


export default function Rest() {
  const { cycle, setCycle, stop, cycleInput, restCountInput, message, setMessage } = useContext(myContext)
  const [restCount, setRestCount] = useState(restCountInput)

  useEffect(() => {
    let interval = setInterval(() => {
      if (cycle === cycleInput) {
        clearInterval(interval)
        stop()
      } else {
        if (restCount === 0) {
          clearInterval(interval)
          setCycle(cycle + 1)
        } else {
          setRestCount(restCount - 1)
        }
      }
    }, 1000)
    return ()=>clearInterval(interval)

  }, [restCount])

  return (
    <View style={styles.rest}>

      {(restCount >= 1) ?
        <Text style={styles.rest} >Rest Count {restCount}</Text>
        :
        <WorkOut></WorkOut>
      }


    </View>
  )
}


const styles = StyleSheet.create({
  workOut: {
    flex: 1,
    margin: 5,
    fontSize: 25,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    fontWeight: 'bold',
    backgroundColor: 'green',
    padding: 8,
    textAlign: 'center',
  },
  rest: {
    flex: 1,
    // margin: 5,
    fontSize: 25,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    fontWeight: 'bold',
    backgroundColor: 'red',
    padding: 8,
    textAlign: 'center',
  },
  timer: {
    flex: 1,
    margin: 5,
    fontSize: 25,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    padding: 8,
    textAlign: 'center',
  },
  general: {
    flex: 1,
    // margin: 5,
    // fontSize: 25,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    // fontWeight: 'bold',
    backgroundColor: 'black',
    padding: 10,
    textAlign: 'center',
  },
  textInput: {
    height: 35,
    backgroundColor: 'white',
    borderColor: 'black',
    margin: 3,
  },

  button: {
    margin: 5,
    fontSize: 25,
    // borderColor:'red',
    borderRadius: 20,
    width: 'auto',
    padding: 5,
    backgroundColor: 'blue',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  },

});
