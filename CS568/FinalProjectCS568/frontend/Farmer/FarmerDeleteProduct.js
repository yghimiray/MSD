import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

export default class FarmerDeleteProduct extends Component {
    state = {
        thisFarmer: {},
        prodId:this.props.match.params.id,
        currentProducts: [],
        thisProduct: {}, // Why doesn't this get updated?
        message:'Do you want to delete this product ' + this.props.match.params.id+' ?'
    }



    componentDidMount() {
        const username = this.props.match.params.username
        const prodId = this.props.match.params.id;
        axios.get('/farmers/' + username)
            .then((response) => {
                let copy = { ...this.state };
                copy.thisFarmer = response.data;
                this.setState(copy)
                copy.currentProducts = this.state.thisFarmer.products
                this.setState(copy)
                copy.thisProduct=this.state.currentProducts.find(item=> item._pId === prodId)
                this.setState({copy})
            })
    }

    homepage = (username) => {
        this.props.history.push('/farmer-homepage/' + username)
    }


    confirm = (id) => {
        let copy = { ...this.state }
        copy.thisFarmer.products = this.state.currentProducts.filter(item => item._pId !== id)
        this.setState({ copy })
        const username = this.props.match.params.username
        axios.put('/farmers/' + username, this.state.thisFarmer)
            .then((response) => {

            })
        this.setState({message:"Product has been successfully deleted"})
        // console.log(this.state.thisProduct)
    }



    render() {
        return (
            <div>
                <button onClick={() => { this.homepage(this.state.thisFarmer.username) }}>Your Homepage </button>
                <h2>{this.state.message} </h2>
                <Button onClick={() => this.confirm(this.state.prodId)}> Confirm </Button>
                <Button onClick={() => { this.homepage(this.state.thisFarmer.username) }}> Cancel </Button>
            </div>
        )
    }
}
