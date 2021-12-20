import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const AuthContext = React.createContext()

export default function Context (){


    const authcontext = React.useMemo(() => {
        return {
            signIn: async (username) => {
                try{
                    const response = await fetch('https://api.github.com/users/'+username)
                    const value = await response.json()
                    // navigate('Dashboard',{data})
                   } catch(e){
                       console.log(e)
                   }
                dispatch({type:'SIGN_IN',data: value })
            },
            // searchRepo: async ()=>{
            //     try{
            //         const response = await fetch(value.repos_url)
            //         const reposValue = await response.json()
            //     } catch(e){
            //         console.log(e)
            //     }
            //     dispatch({type:'RESTORE_REPO',repos: reposValue })
            // }
        }
    })

return(
<AuthContext.Provider value = {authcontext}>

</AuthContext.Provider>

)
}