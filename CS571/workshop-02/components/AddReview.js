import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';

const AddReview = ({route:{params:{course}}}) => {
  const [state, setState] = useState({ name: '', rating: 0, comment: '', submitting: false })
  const [indicator,setIndicator]=useState(false)

  useEffect( ()=>{
    async () => {
      try {
        return await AsyncStorage.getItem('@storage_Key')
        // if(value !== null) {
        //   // value previously stored
        // }
      } catch(e) {
        // error reading value
      }
    }
  },[])


  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@storage_Key', course.code)
    } catch (e) {
      // saving error
    }
  }

  return (
    <View style={styles.root}>
      <Text style={styles.addReview}> Add Review </Text>
      <TextInput style={styles.input} placeholder="Your name" onChangeText={(text) => setState({...state,  name: text })} />
      <Text style={styles.rating}> Your Rating </Text>
      <View style={styles.stars}>
        {[1, 2, 3, 4, 5].map(num => {
          <TouchableOpacity style={styles.stars}>
            <AntDesign key={num} name="star" size={50} color="#FFD64C" />
          </TouchableOpacity>
        })}
      </View>
      <TextInput style={styles.bigInput} placeholder="Your comments here" onChangeText={(text) => setState({...state,  comment: text })} />
      <TouchableOpacity style={styles.submitButton} onPress={storeData(),
        setTimeout(() => {
          setIndicator(!indicator)
        }, 2000)
      }>
        <Text style={styles.submitButtonText}>Submit Review</Text>
      </TouchableOpacity>
      <ActivityIndicator size="large" color="#0000ff" animating={indicator} />
    </View>
  );
};





const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 25,
    color: '#444',
    textAlign: 'center',
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
  },
  bigInput: {
    padding: 10,
    minHeight: 100,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
  },

  rating: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginVertical: 40,
  },
  stars: {
    marginBottom: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starButton: {
    padding: 5,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0066cc',
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default AddReview;
