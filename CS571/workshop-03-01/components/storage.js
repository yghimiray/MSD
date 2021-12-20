import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
      return true
    } catch (e) {
      // saving error
      return false
    }
  }


  export const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
      return null
    }
  }
  
 const STORAGE ={
   KEY:'@USER_KEY'   
  }

  export default STORAGE;