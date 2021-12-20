import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter} from 'react-router-dom'

export default class FarmerHomePage extends Component {
    state = {
        thisFarmer: {},
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


    updateFarmer = (username) => {
        this.props.history.push('/farmer-update/' + username)
    }

    showAllProducts = (username) => {
        this.props.history.push('/farmer-all-product/' + username)
    }

    addProduct = (username) => {
        this.props.history.push('/farmer-add-product/' + username)
    }


    render() {
        return (
            <BrowserRouter>
                <h1> Welcome {this.state.thisFarmer.farm} </h1>
              

                <div>


                </div>

                <p> <button onClick={()=>{this.updateFarmer(this.state.thisFarmer.username)}}>Account Settings </button> </p>
                <p> <button onClick={()=>{this.showAllProducts(this.state.thisFarmer.username)}}>Show All Products </button> </p>
                <p> <button onClick={()=>{this.addProduct(this.state.thisFarmer.username)}}>Add New Product </button> </p>
                <p> <button >Show All Orders </button> </p>
            </BrowserRouter>

        )
    }
}
