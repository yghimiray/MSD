import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { myContext } from './App';
import Rest from './Rest';


export default function WorkOut() {
  const { cycle, stop, workCountInput, message, setMessage } = useContext(myContext)
  const [workCount, setWorkCount] = useState(workCountInput)


  useEffect(() => {
    setMessage("Round"+cycle)
    let interval = setInterval(() => {
      if (workCount === 0) {
        clearInterval(interval)
      } else {
        setWorkCount(workCount - 1)
       
      }
    }, 1000)
    return ()=>clearInterval(interval)
  }, [workCount])


  return (
    <View style={styles.workOut}>

      {(workCount >= 1) ? 
      <Text style={styles.workOut} >WorkOut {workCount}</Text>
    :
    <Rest></Rest>
    }



    </View>
  )
}



const styles = StyleSheet.create({
  workOut: {
    flex: 1,
    // margin: 5,
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
    margin: 5,
    fontSize: 25,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
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
    margin: 5,
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
