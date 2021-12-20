import React, { Component } from 'react'
import axios from 'axios'

export default class CustomerUpdate extends Component {
    state = {
        thisCustomer: {},
        updatedCustomer: {
            name: '',
            email: ''
        }
    }

    componentDidMount() {
        const username = this.props.match.params.username
        axios.get('/customers/' + username)
            .then((response) => {
                let copy = { ...this.state };
                copy.thisCustomer = response.data;
                this.setState({ thisCustomer: copy.thisCustomer })
            })
    }


    
    propertyChange = (event) => {
        let copy = { ...this.state.updatedCustomer };
        copy._id = this.state.thisCustomer._id
        copy.username = this.state.thisCustomer.username
        copy.password = this.state.thisCustomer.password
        copy.active = this.state.thisCustomer.active
        copy.cart = this.state.thisCustomer.cart
        copy.order = this.state.thisCustomer.order
        copy.history = this.state.thisCustomer.history
        copy.type = this.state.thisCustomer.type
        copy[event.target.name] = event.target.value;
        this.setState({ updatedCustomer: copy })
    }

    homepage= (username)=>{
        this.props.history.push('/customer-homepage/' + username)
    }

    apply = () => {
        const username = this.props.match.params.username
        axios.put('/customers/' + username, this.state.updatedCustomer)
            .then((response) => {
                // let copy ={...this.state}
                // copy.movie=response.data
                // this.setState(copy)
            })
            this.props.history.push('/customer-homepage/' + username)
    }



    render() {
        return (
            <ul>
                 <button onClick={() => { this.homepage(this.state.thisCustomer.username) }}>Your Homepage </button>
                <h2>Customer Information Update Page</h2>
                Name:<input
                    type='text'
                    placeholder={this.state.thisCustomer.name}
                    name='name'
                    onChange={(event) => { this.propertyChange(event) }}
                />
                Email:<input
                    type='text'
                    placeholder={this.state.thisCustomer.email}
                    name='email'
                    onChange={(event) => { this.propertyChange(event) }}
                />

                <button onClick={() => { this.apply() }}> Apply </button>
                
            </ul>
        )
    }
}
