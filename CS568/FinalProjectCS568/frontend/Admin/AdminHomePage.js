import React, { Component } from 'react'
import { BrowserRouter} from 'react-router-dom'


export default class AdminHomePage extends Component {
   
    allUsers = () => {
        this.props.history.push('/admin-all-users')
    }


    allTransactions = () => {
        this.props.history.push('/admin-all-transactions')
    }


    

    render() {
        return (
            <BrowserRouter>
                <h1> Welcome to Admin Page </h1>
              
                {/* <p> <button onClick={()=>{this.accountSettings()}}>Account Settings </button> </p> */}
                <p> <button onClick={()=>{this.allUsers()}} style={{ position: 'relative', marginLeft: 80, marginTop: 30 }} >Show All Users </button> </p>
                <p> <button onClick={()=>{this.allTransactions()}} style={{ position: 'relative', marginLeft: 80, marginTop: 30 }}>Show All Transactions </button> </p>
            </BrowserRouter>

        )
    }
}
