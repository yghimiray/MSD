import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import WorkOut from './WorkOut';
import Rest from './Rest';

export const myContext = React.createContext()

export default function App() {

  const [cycleInput, setCycleInput] = useState('')
  const [restCountInput, setRestCountInput] = useState('')
  const [workCountInput, setWorkCountInput] = useState('')
  const [message, setMessage] = useState("Tabata Timer")
  const [start, setStart] = useState(false)
  const [cycle, setCycle] = useState(1);

  const startChange = () => {
    setStart(true)
  }

  const stop = ()=>{
    setMessage("Thank You")
    setStart(false)
    setCycle(1)
    setWorkCountInput('')
    setRestCountInput('')
    setCycleInput('')
  }

  const workCountChange = (count) => {
    if (+ count) {
      setWorkCountInput(Number(count))
    }
  }


  const restCountChange = (count) => {
    if (+ count) {
      setRestCountInput(Number(count))
    }
  }


  const cycleChange = (count) => {
    if (+ count) {
      setCycleInput(Number(count))
    }
  }

  return (
    <View style={styles.general}>
      <Text style={styles.timer} >{message}</Text>


      {! start ?
      <SafeAreaView>
      <TextInput
        style={styles.textInput}
        placeholder="Set Your Work Count"
        onChangeText={workCountChange}
        value={workCountInput}
      ></TextInput>

      <TextInput 
      style={styles.textInput} 
      placeholder="Set Your Rest Count" 
      onChangeText={restCountChange} 
      value = {restCountInput}
        ></TextInput>
      
      <TextInput 
      style={styles.textInput} 
      placeholder="Set Your Total Cycles" 
      onChangeText={cycleChange} 
      value={cycleInput}
      ></TextInput>

    </SafeAreaView>
    :null
    }

      {start ?
        <myContext.Provider value={{ cycle, setCycle, stop, cycleInput, setCycleInput, restCountInput, workCountInput, message, setMessage }}>
          <WorkOut></WorkOut>
          {/* <Rest></Rest> */}
        </myContext.Provider> : null
      }


      {! start ?
            <TouchableOpacity style={styles.button}
            onPress={startChange}>
            <Text style={styles.button} >Start</Text>
          </TouchableOpacity>
    :null
    }

      {start ?
      <TouchableOpacity style={styles.button}
      onPress={stop} >
        <Text style={styles.button} >Stop</Text>
      </TouchableOpacity>
:null
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
