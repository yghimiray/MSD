import React from 'react';
import axios from 'axios'
import Product from './Product';
import './App.css';


class Products extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {
        console.log(localStorage.getItem('token'))
        axios.get('/products', { headers: { Authorization: localStorage.getItem('token') } })
            .then((response) => {
                let copy = { ...this.state }
                copy.products = response.data;
                this.setState(copy)
            })
    }

    showDetailClicked=(id)=>{
            this.props.history.push('/product-detail/'+ id);
    }

    updateProduct=(id)=>{
        this.props.history.push('/update-product/'+id);
    }


    render() {
        return (
            this.state.products.map((item) => {
                return <Product
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    showDetailClicked={()=>{this.showDetailClicked(item.id)}}
                    updateProduct={()=>{this.updateProduct(item.id)}}
                ></Product>
            })
        )
    }
}

export default Products