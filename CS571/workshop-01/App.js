import { StatusBar } from 'expo-status-bar';
import React from 'react'; import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native';
import contacts from './contacts';
import { generateUUID } from './contacts';
import { compareNames } from './contacts';
import OneContact from './OneContact';


export default class App extends React.Component {

  state = {
    contacts: [...contacts],
    show: true,
    addContact: false,
    newContact:{
      name:'',
      phone:''
    }
  }

  showHideContacts = () => {
    // let copy = {...this.state}
    // copy.show= ! copy.show
    this.setState({ show: !this.state.show })
  }

  sortNames = () => {
    this.state.contacts.sort(compareNames)
  }

  addForm = () => {
    this.setState({ addContact: true })
  }

  

  render() {
    return (
      <View >
        <TouchableOpacity style={styles.button} onPress={this.showHideContacts}>
          <Text>Show/Hide</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.sortNames}>
          <Text>Sort Names </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.addForm}>
          <Text>Add New Contact </Text>
        </TouchableOpacity>


        {this.state.show ?
          //   <ScrollView>
          //   {this.state.contacts.map((item) => {
          //    return(
          //      <OneContact
          //      key={item.name}
          //      name={item.name}
          //      phone={item.phone}
          //    >
          //    </OneContact>
          //    )
          //  })} 
          //    </ScrollView>

          <FlatList
            data={this.state.contacts}
            renderItem={({ item }) =>
              <Text>{item.name} {item.phone}</Text>
            }
            keyExtractor={item => item.name}
          />
          : null
        }


        {this.state.addContact ?
          <TextInput
            style={styles.button}
          >Name</TextInput>
          : null}

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    margin: 5,
    fontSize: 25,
    // borderColor:'red',
    borderRadius: 20,
    width: 'auto',
    padding: 5,
    backgroundColor: 'green',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',
  }
});
