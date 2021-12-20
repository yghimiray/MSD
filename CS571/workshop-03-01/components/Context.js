import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export const ACTION={
    SET_USER:'SET_USER',
    SET_REPOS: 'SET_REPOS',
    INIT_DATA:'INIT_DATA'
}


export const reducer = (state, action)=>{
    switch(action.type){
        case ACTION.SET_USER: return{...state, user:action.user};
        case ACTION.SET_REPOS: return {...state, repos:action.repos};
        case ACTION.INIT_DATA: return{user: action.user, repos: action.repos}
        default: return state;
    }
}

const GlobalContext = React.createContext({
    user:{},
    repos:[]
})

export default  GlobalContext