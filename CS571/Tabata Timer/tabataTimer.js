import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


export default class App extends React.Component {
  
state={
  rest:false,
  start:true,
  workCount:20 ,
  restCount:10,
  cycle:1,
  message:"Tabata Timer"
}

showWorkOut = ()=>{
  this.interval=setInterval(()=>{
  let copy={...this.state}
  copy.workCount = copy.workCount -1
  copy.rest=false
  copy.start=false
  copy.restCount=10;
  copy.message= "Round " + copy.cycle
  this.setState(copy)
  if(this.state.workCount===1){
    clearInterval(this.interval)
    this.showRest()
  }
  },1000)
}

showRest = ()=>{
  this.interval=setInterval(()=>{
  let copy={...this.state}
  copy.restCount = copy.restCount -1
  
  copy.workCount=20;
  copy.rest=true
  this.setState(copy)
  if(this.state.cycle===10){
    this.stop()
  }else{
    if(this.state.restCount===1){
    clearInterval(this.interval)
  copy.cycle=copy.cycle+1
  this.setState(copy)
  this.showWorkOut()
  }
  }
  },1000)
  
}

stop=()=>{
  clearInterval(this.interval)
let copy={...this.state}
copy.rest=false
copy.workCount=20
  copy.restCount = 10
  copy.start=true
  copy.cycle=1
  copy.message="Tabata Timer"
  this.setState(copy)
}



  render(){

  return (
    <View style={styles.general}>
    <Text style={styles.timer} >{this.state.message}</Text>
    {this.state.rest ? 
      <Text style={styles.rest} >Rest Count {this.state.restCount}</Text>
    : null }

    {! this.state.rest ? 
    <Text style={styles.workOut} >Work Count {this.state.workCount}</Text>
    :null }
  
   {this.state.start ?
    <TouchableOpacity style={styles.button} 
    onPress = { this.showWorkOut}>
    <Text style={styles.button} >Start</Text>
    </TouchableOpacity>:null
   }

  { ! this.state.start ?
  <TouchableOpacity style={styles.button} 
  onPress = {this.stop}>
    <Text style={styles.button} >Stop</Text>
    </TouchableOpacity>:null
  }


    </View>
  );
  }

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

  button: {
    margin: 5,
    fontSize: 25,
    // borderColor:'red',
    borderRadius:5,
    padding: 5,
    backgroundColor: 'blue',
    fontWeight: 'bold',
    // justifyContent:'center',
    textAlign: 'center',
  },
  
});
