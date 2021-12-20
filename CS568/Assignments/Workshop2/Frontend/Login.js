import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {

    state = {
        user: {
            email: '',
            password: ''
        }
    }

    propertyChange = (event) => {
        let copy = { ...this.state.user }
        copy[event.target.name] = event.target.value;
        this.setState({ user: copy })
    }


    LoginButtonClicked = () => {
        axios.post('/users', this.state.user)
            .then((response) => {
                localStorage.setItem({'token':response.data.token})
            })
    }


    render() {
        return (
            <div>
                <h2>Please Login Here</h2>
                Email : <input
                    type='text'
                    value={this.state.user.email}
                    onChange={(event) => { this.propertyChange(event) }}
                    name='email'
                ></input>
                Password : <input
                    type='text'
                    value={this.state.user.password}
                    onChange={(event) => { this.propertyChange(event) }}
                    name='password'
                ></input>

                <button onClick={() => this.LoginButtonClicked()} > Login </button>

            </div>
        )
    }
}
