import axios from 'axios';
import React from 'react'

 

class Login extends React.Component {

    state = {
        user: {
            email: '',
            password: ''
        },
        isUserLoggedIn:true
    }

    propertyChanged = (event) => {
        let copy = { ...this.state.user }
        copy[event.target.name] = event.target.value;
        this.setState({ user: copy })
    }

    loginButtonClicked = () => {
        axios.post('/users', this.state.user)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                this.setState({isUserLoggedIn:true})
            })
    }

    render() { 
        return ( 
                <div>
                    Email: <input
                        type='text'
                        value={this.state.user.email}
                        name='email'
                        onChange={(event) => { this.propertyChanged(event) }} />

                    Password: <input
                        type='password'
                        value={this.state.user.password}
                        name='password'
                        onChange={(event) => { this.propertyChanged(event) }} />

                    <input type='button' value='Login' onClick={this.loginButtonClicked} />
                </div> 
        )
    }
}

export default Login