import React, { Component } from 'react'
import axios from 'axios';

export default class FarmerSignUp extends Component {
    state = {
        farmer: {
            _id: '',
            farm:'',
            address:'',
            username: '',
            password: '',
            email:'',
            active: true,
            products:[],
            orders: [],
            history: [],
            rating:0,
            type:'Farmer'
        }
    }

    propertyChange = (event) => {
        let copy = { ...this.state.farmer }
        copy[event.target.name] = event.target.value;
        this.setState({ farmer: copy })
    }

    signup = () => {
        console.log(this.state.farmer)
        axios.post('/farmers', this.state.farmer)
            .then(response => {

            })
            this.props.history.push('/farmer-login')
    }

    render() {
        return (
            <ul>
                <h2>Farmers Sign-Up Page</h2>
                <h5>(* fields are required)</h5>
                <ul>
                    Farmer's ID *:<input
                        type='text'
                        name='_id'
                        onChange={(event) => { this.propertyChange(event) }}
                    ></input>
                </ul>
                <ul>
                    Farm's Name *:<input
                        type='text'
                        name='farm'
                        onChange={(event) => { this.propertyChange(event) }}
                    ></input>
                </ul>
                <ul>
                    Address *:<input
                        type='text'
                        name='address'
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

                <ul>
                    Email *:<input
                        type='text'
                        name='email'
                        onChange={(event) => { this.propertyChange(event) }}
                    ></input>
                </ul>

                <button onClick={() => this.signup()}>Sign Up</button>

            </ul>
        )
    }
}
