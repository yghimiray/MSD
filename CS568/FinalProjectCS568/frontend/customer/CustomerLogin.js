import React, { Component } from 'react'
import axios from 'axios';

export default class CustomerLogin extends Component {

    state = {
        // thisCustomer:{},
        loggedCustomer: {
            username:'',
            password:''
        },
        message:''
    }



    propertyChange = (event) => {
        let copy = { ...this.state.loggedCustomer }
        copy[event.target.name] = event.target.value;
        this.setState({ loggedCustomer: copy })
    }


    login = () => {
        axios.post('/customers/login', this.state.loggedCustomer)
            .then(response => {
                console.log(response.data)
                localStorage.setItem('accessToken',response.data.accessToken)
               if(response.data.error){
                this.setState({message:response.data.error})
                let copy={...this.state.loggedCustomer}
                copy.username=''
                copy.password=''
                this.setState({loggedCustomer:copy})
               }else{
                this.props.history.push('/customer-homepage/' + this.state.loggedCustomer.username)   
               }
            })

    }


    render() {
        return (
            <ul>
                <h2>Customer Sign-In Page</h2>
                <h5>(* fields are required)</h5>
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

                <button onClick={() => this.login()}>Sign In</button>


            </ul>
        )
    }


}