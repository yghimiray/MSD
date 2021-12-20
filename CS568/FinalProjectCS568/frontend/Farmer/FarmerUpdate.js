import React, { Component } from 'react'
import axios from 'axios'

export default class FarmerUpdate extends Component {
    state = {
        thisFarmer: {},
        updatedFarmer: {
            farm: '',
            address: '',
            email: ''
        }
    }

    componentDidMount() {
        const username = this.props.match.params.username
        axios.get('/farmers/' + username)
            .then((response) => {
                let copy = { ...this.state };
                copy.thisFarmer = response.data;
                this.setState({ thisFarmer: copy.thisFarmer })
                // console.log(this.state.thisFarmer)
            })
    }



    propertyChange = (event) => {
        let copy = { ...this.state.updatedFarmer };
        copy._id = this.state.thisFarmer._id
        copy.username = this.state.thisFarmer.username
        copy.password = this.state.thisFarmer.password
        copy.active = this.state.thisFarmer.active
        copy.products = this.state.thisFarmer.products
        copy.orders = this.state.thisFarmer.orders
        copy.history = this.state.thisFarmer.history
        copy.rating = this.state.thisFarmer.rating
        copy.type = this.state.thisFarmer.type
        copy[event.target.name] = event.target.value;
        this.setState({ updatedFarmer: copy })
    }



    apply = () => {
        const username = this.props.match.params.username
        axios.put('/farmers/' + username, this.state.updatedFarmer)
            .then((response) => {

            })
    }

    homepage= (username)=>{
        this.props.history.push('/farmer-homepage/' + username)
    }

    render() {
        return (
            <ul>
                <button onClick={() => { this.homepage(this.state.thisFarmer.username) }}>Your Homepage </button>
                <h2>Farmer Information Update Page</h2>
                Name of Farm:<input
                    type='text'
                    placeholder={this.state.thisFarmer.farm}
                    name='farm'
                    onChange={(event) => { this.propertyChange(event) }}
                />

                Address:<input
                    type='text'
                    placeholder={this.state.thisFarmer.address}
                    name='address'
                    onChange={(event) => { this.propertyChange(event) }}
                />

                Email:<input
                    type='text'
                    placeholder={this.state.thisFarmer.email}
                    name='email'
                    onChange={(event) => { this.propertyChange(event) }}
                />

                <h2> <button onClick={() => { this.apply() }}> Apply </button> </h2>

            </ul>
        )
    }
}
