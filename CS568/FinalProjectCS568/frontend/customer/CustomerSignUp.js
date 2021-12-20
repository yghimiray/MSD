import React, { Component } from 'react'
import axios from 'axios';

export default class CustomerSignUp extends Component {
    state = {
        customer: {
            _id: '',
            name: '',
            email: '',
            username: '',
            password: '',
            active: true,
            cart: [],
            order: [],
            history: [],
            type:'Customer'
        }
    }

    propertyChange = (event) => {
        let copy = { ...this.state.customer }
        copy[event.target.name] = event.target.value;
        this.setState({ customer: copy })
    }

    signup = () => {
        axios.post('/customers', this.state.customer)
            .then(response => {

            })
            this.props.history.push('/customer-login')
    }

    render() {
        return (
            <ul>
                <h2>Customer Sign-Up Page</h2>
                <h5>(* fields are required)</h5>
                <ul>
                    CustomerID *:<input
                        type='text'
                        name='_id'
                        onChange={(event) => { this.propertyChange(event) }}
                    ></input>
                </ul>
                <ul>
                    Name *:<input
                        type='text'
                        name='name'
                        onChange={(event) => { this.propertyChange(event) }}
                    ></input>
                </ul>
                <ul>
                    Email *:<input
                        type='text'
                        name='email'
                        onChange={(event) => { this.propertyChange(event) }}
                    ></input>
                </ul>
                <ul>
                    Username *:<input
                        type='text'
                        name='username'
                        onChange={(event) => { this.propertyChange(event) }}
                    ></input>
                </ul>
                <ul>
                    Password *:<input
                        type='text'
                        name='password'
                        onChange={(event) => { this.propertyChange(event) }}
                    ></input>
                </ul>

                <button onClick={() => this.signup()}>Sign Up</button>

            </ul>
        )
    }
}
