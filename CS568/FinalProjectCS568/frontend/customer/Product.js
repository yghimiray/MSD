import React from "react";
import DisplayProducts from "./DisplayProducts";
import axios from "axios";
import { withRouter } from 'react-router'
import { Button, Container, Row, Col } from 'react-bootstrap'
import './Products.css'


class Product extends React.Component {
    state = {
        product: [],
        cart: [],
        // savedCartProduct :this.props.location.state,
        //farmerId : this.props.match.params.id
        farmerId: this.props.match.params.id,
        username: "",
        message:"",
    }


    componentDidMount() {
        console.log(this.state.farmerId)
        let copy = { ...this.state }
        const user = this.props.location.state.user;
        axios.get('/farmers/' + this.state.farmerId + '/products')
            .then(response => {

               // let copy = { ...this.state }
                copy.product = response.data;
               // copy.username = this.props.location.state.user;
               copy.username = user;
                console.log(copy)
                this.setState(copy)
            })

            axios.get('/customers/' + user + '/cart')
            .then(response => {

               // let copy = { ...this.state }
               // copy.product = response.data;
                copy.cart = response.data;
               // copy.username = this.props.location.state.user;
               copy.username = user
                console.log(copy)
               // this.setState(copy)
            })
            this.setState(copy)

    }

    addToCartBtnHandler = (pId) => {
        const user = this.props.location.state.user;
        let copy ={...this.state}
        

        console.log(pId)
        let cartProduct = this.state.cart.find(item => item._pId == pId);
        

        if(cartProduct){
           // let copy ={...this.state}
            copy.message ="You have already selected this product. Please choose another product";
        } else {
            copy.message="";

        let addTocartProduct = this.state.product.find(item => item._pId == pId);
        //let copy = { ...this.state }
        addTocartProduct.quantity = 1;
        addTocartProduct.totalPrice = addTocartProduct.price;
        console.log(addTocartProduct)

        let item = copy.cart.push(addTocartProduct)
        console.log(copy)

        axios.post('/customers/' + user + '/cart', addTocartProduct)
        .then(response => {
            console.log(response.data)

           // let copy = { ...this.state }
           // copy.product = response.data;
            //copy.cart = response.data;
           // copy.username = this.props.location.state.user;
           //copy.username = user
            console.log(copy)
           // this.setState(copy)
        })
        }
        this.setState(copy)
       
    }

    seeCartBtnHandler = (username) => {
        let x = this.props.location.state.saveCartItems
        console.log(x)
        let copy = { ...this.state };

        if (x !== undefined) {
            this.props.location.state.saveCartItems.forEach(items => {
                copy.cart.push(items)
            })
            this.setState(copy)
        }
        console.log(this.state)
        this.props.history.push('/display-cart', this.state)

    }
    cancelBtnHandler = (username) => {
        this.props.history.push('/customer-homepage/' + username)
    }
    customerHomepage = (username) => {
        console.log(username)
        this.props.history.push('/customer-homepage/' + username)
    }



    render() {
        console.log(this.props.location.state)
        let products = this.state.product.map((item, index) => {
            return (
                <div >
                    <Container id="products">
                        <DisplayProducts class="products-grid"
                            key={index}
                            name={item.name}
                            category={item.type}
                            price={item.price}
                            addToCartBtnHandler={() => { this.addToCartBtnHandler(item._pId) }}
                        ></DisplayProducts>
                    </Container>

                </div>

            )
        })
        return (
            <div className="Products">
                <ul id="welcome">Welcome to the Brilliance Farmers Online Market Product page.</ul>
                <ul id="welcome-msg">Please Select your choosen products by clicking  Add to Cart</ul>
                <span>{this.state.message}</span>


                <div className="display-products">
                    {products}
                </div>


                <div id="product-btn">
                   <ul> <button className="product-btn1" onClick={() => { this.seeCartBtnHandler(this.props.location.state.user) }}>See Cart</button></ul>
                    <button className="product-btn2" onClick={() => { this.cancelBtnHandler(this.props.location.state.user) }}>Cancel</button>
                </div>

            </div>

        )
    }
}
export default withRouter(Product)