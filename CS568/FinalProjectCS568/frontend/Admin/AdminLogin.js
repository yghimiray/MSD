import React, { Component } from 'react'

export default class AdminLogin extends Component {
    state={
        adminUser:{
            username:'admin',
            password:"123"
        },
        loggedUser: {
            username:'',
            password:''
        },
        isLoggedIn:false,
        message:''
    }

    

    propertyChange = (event) => {
        let copy = { ...this.state.loggedUser }
        copy[event.target.name] = event.target.value;
        this.setState({ loggedUser: copy })
        
    }

    login = () => {
      
       if(this.state.adminUser.username===this.state.loggedUser.username && this.state.adminUser.password===this.state.loggedUser.password){
        this.props.history.push('/admin-homepage')       
       }else{
        let copy = { ...this.state}
        copy.loggedUser.username=''
        copy.loggedUser.password=''
        copy.message = "Warnng! Invalid Admin Login Credentials."
        this.setState(copy)
    }
    }


    render() {
        return (
            <ul>
                <h2>Admin Sign-In Page</h2>
                <h5>(* fields are required)</h5>
                <h3>{this.state.message} </h3>
                <ul>
                    Username *:<input
                        type='text'
                        value={this.state.loggedUser.username}
                        name='username'
                        onChange={(event) => { this.propertyChange(event) }}
                    ></input>
                </ul>
                <ul>
                    Password *:<input
                        type='text'
                        value={this.state.loggedUser.password}
                        name='password'
                        onChange={(event) => { this.propertyChange(event) }}
                    ></input>
                </ul>

                <button onClick={() => this.login()}>Sign In</button>
            </ul>
        )
    }

}
