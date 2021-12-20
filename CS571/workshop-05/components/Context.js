import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export const ACTION={
    SET_USER:'SET_USER',
    SET_LOGS: 'SET_LOGS'
}


export const reducer = (state, action)=>{
    switch(action.type){
        case ACTION.SET_USER: return{...state, user:action.user};
        case ACTION.SET_LOGS: return {...state, logs:action.logs};
        default: return state;
    }
}

const GlobalContext = React.createContext({
    user:{},
    logs:[]
})

export default  GlobalContext