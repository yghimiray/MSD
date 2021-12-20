import React, { Component } from 'react'
import axios from 'axios'

export default class ProductDetails extends Component {
    state = {
        product: {
        }
    }

    componentDidMount() {
        const PID = this.props.match.params.PID;
        axios.get('/products/'+PID)
        .then((response)=>{
            let copy= {...this.state}
            copy.product=response.data
            this.setState(copy)       
        })
    }

    updateProduct = (PID) => {
        this.props.history.push("/product-update/" + PID)
    }


    deleteProduct = (PID) => {
        this.props.history.push("/product-delete/" + PID)
    }

    
    addReview = (PID) => {
        this.props.history.push("/product-review/" + PID)
    }



    render() {
        return (
            <div>
               <h2>Details of this Product</h2>
                <p>ID:{this.state.product.PID}</p>
                <p>Name:{this.state.product.name}</p>
                <p>Price:{this.state.product.price}</p>
                <p>Review:{this.state.product.review}</p>
                <p>Rating:{this.state.product.rating}</p>
                <button onClick={()=>{this.updateProduct(this.state.product.PID)}}>Update</button> 
                <button onClick={()=>{this.deleteProduct(this.state.product.PID)}}>Delete</button> 
                <button onClick={()=>{this.addReview(this.state.product.PID)}}>Add Review</button> 
            </div>
        )
    }
}
