import React, { Component } from 'react'
import axios from 'axios'
import ProductOne from './ProductOne'


export default class ProductsAll extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        axios.get('/products')
            .then((response) => {
                let copy = { ...this.state }
                copy.products = response.data
                this.setState(copy)
            })
    }

    showDetails = (PID) => {
        this.props.history.push('/product-details/'+PID)
    }



    render() {
        return (
            this.state.products.map((item)=>{
                return(
                    <ProductOne
                    // key={item._id}
                    name={item.name}
                    price={item.price}
                    showDetails={() => { this.showDetails(item.PID) }}
                    // updateProduct={() => { this.updateProduct(item.PID) }}
                    // deleteProduct={() => { this.deleteProduct(item.PID) }}
                    ></ProductOne>
                )
            })
        )
    }
}
