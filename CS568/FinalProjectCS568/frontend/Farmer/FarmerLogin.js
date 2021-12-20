import React, { Component } from 'react'
import axios from 'axios';
export const farmerContext = React.createContext()

export default class FarmerLogin extends Component {

    state = {
        loggedFarmer: {
            username: '',
            password: ''
        },
        isLoggedIn:false,
        message: ''
    }



    propertyChange = (event) => {
        let copy = { ...this.state.loggedFarmer }
        copy[event.target.name] = event.target.value;
        this.setState({ loggedFarmer: copy })
    }

    login = () => {
        axios.post('/farmers/login', this.state.loggedFarmer)
            .then(response => {
                // console.log(response.data)
                localStorage.setItem('accessToken', response.data.accessToken)
                if (response.data.error) {
                    this.setState({ message: response.data.error })
                    let copy = { ...this.state.loggedFarmer }
                    copy.username = ''
                    copy.password = ''
                    this.setState({ loggedFarmer: copy })
                } else {
                    this.props.history.push('/farmer-homepage/' + this.state.loggedFarmer.username)
                }
            })
    }

    // updateFarmer=(username)=>{
    //     this.props.history.push('/farmer-update/' + username)
    // }



    render() {
        return (
            <ul>
                <h2>Farmer Sign-In Page</h2>
                <h5>(* fields are required)</h5>
                <h5>{this.state.message} </h5>
                <ul>
                    Username *:<input
                        type='text'
                        name='username'
                        value={this.state.loggedFarmer.username}
                        onChange={(event) => { this.propertyChange(event) }}
                    ></input>
                </ul>
                <ul>
                    Password *:<input
                        type='text'
                        name='password'
                        value={this.state.loggedFarmer.password}
                        onChange={(event) => { this.propertyChange(event) }}
                    ></input>
                </ul>

                <button onClick={() => this.login()}>Sign In</button>

                <farmerContext.Provider
                value = {this.state.isLoggedIn}
                ></farmerContext.Provider>


            </ul>
        )
    }

}
