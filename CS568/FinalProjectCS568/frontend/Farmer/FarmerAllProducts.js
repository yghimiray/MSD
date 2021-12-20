import React, { Component } from 'react'
import axios from 'axios'
import FarmerOneProduct from './FarmerOneProduct'

export default class FarmerAllProducts extends Component {
    state = {
        thisFarmer: {},
        currentProducts: [],
        thisProduct: {},
        updatingProduct: {
            name: '',
            category: '',
            price: '',
            quantity: ''
        },
    }



    componentDidMount() {
        const username = this.props.match.params.username
        axios.get('/farmers/' + username)
            .then((response) => {
                let copy = { ...this.state };
                copy.thisFarmer = response.data;
                this.setState(copy)
                copy.currentProducts = this.state.thisFarmer.products
                this.setState(copy)
            })
    }

    homepage = (username) => {
        this.props.history.push('/farmer-homepage/' + username)
    }

    propertyChange = (event) => {
        let copy = { ...this.state.updatingProduct };
        copy[event.target.name] = event.target.value;
        copy._pId=this.state.thisProduct._pId
        this.setState({ updatingProduct: copy })
    }

    delete=(username,id)=>{
      this.props.history.push('/farmers-delete-product/'+username+'/product/'+id)
    }


    update = (username, id) => {
        this.props.history.push('/farmers-update-product/'+username+'/product/'+id)
    }



    render() {
        let currentProducts = this.state.currentProducts.map((item,index)=>{
             return (
                                <FarmerOneProduct
                                    key={index}
                                    id={<input defaultValue={item._pId} size="5" />}
                                    name={<input defaultValue={item.name} size="12"/>}
                                    category={<input defaultValue={item.category} size="10"/>}
                                    price={<input defaultValue={item.price} size="4" />}
                                    quantity={<input defaultValue={item.quantity} size="5" />}
                                    update={() => this.update(this.state.thisFarmer.username,item._pId)}
                                    delete={() => this.delete(this.state.thisFarmer.username,item._pId)}
                                >
                                </FarmerOneProduct>
                            )

        })
        return (
            <div>
                <button onClick={() => { this.homepage(this.state.thisFarmer.username) }}>Your Homepage </button>
                <h2>List of all products </h2>
                {currentProducts}

            </div>
        )
    }
}
