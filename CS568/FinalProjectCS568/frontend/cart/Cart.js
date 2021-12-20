import React from "react";
import axios from "axios";
import './Cart.css'

export default class Cart extends React.PureComponent {
    state = {
        cartProduct: [],
        checkOut: [],
        savedCartProduct: [],
        fId: "",
        username: this.props.location.state.username

    }
    componentDidMount() {
        
        console.log(this.props.location.state.username)
        const user = this.props.location.state.username
        //let copy = this.props.location.state[0].cart;
        // let cartCopy = this.props.location.state;
        // let stateCopy = { ...this.state }
        // stateCopy.cartProduct = cartCopy.cart
        // stateCopy.fId = cartCopy.farmerId
        //added
        axios.get('/customers/' + user + '/cart')
        .then(response => {
            console.log(response.data)
            let copy = {...this.state}
            copy.cartProduct = response.data;
            this.setState(copy)

           // let copy = { ...this.state }
           // copy.product = response.data;
            //copy.cart = response.data;
           // copy.username = this.props.location.state.user;
           //copy.username = user
            console.log(copy)
           // this.setState(copy)
        })



        //this.setState(stateCopy)
    }

    addQuantityBtnHandler = (pId) => {
        let copy = { ...this.state }

        console.log(copy)
        let indexOfItem = copy.cartProduct.findIndex(item => item._pId == pId)
        console.log(indexOfItem)
        copy.cartProduct[indexOfItem].quantity += 1;
        copy.cartProduct[indexOfItem].totalPrice = copy.cartProduct[indexOfItem].price * copy.cartProduct[indexOfItem].quantity;
        console.log(copy.cartProduct[indexOfItem].quantity)
        console.log(copy)
        this.setState({ copy })
        // copy.quantity +=1
        // this.setState({cartProduct :copy})

    }

    deleteQuantityBtnHandler = (pId) => {
        let copy = { ...this.state }

        console.log(copy)
        let indexOfItem = copy.cartProduct.findIndex(item => item._pId == pId)
        console.log(indexOfItem)
        if (copy.cartProduct[indexOfItem].quantity <= 1) {
            copy.cartProduct.splice(indexOfItem, 1)

        } else {
            copy.cartProduct[indexOfItem].quantity -= 1;

            copy.cartProduct[indexOfItem].totalPrice = copy.cartProduct[indexOfItem].price * copy.cartProduct[indexOfItem].quantity;
            console.log(copy.cartProduct[indexOfItem].quantity)
            console.log(copy)

        }
        this.setState({ copy })
    }

    confirmYourItemsBtnHandler = () => {

        let copy = { ...this.state }
        copy.cartProduct.forEach(item => this.state.checkOut.push(item))
        this.setState(copy)
        console.log(copy)
        console.log(this.state.checkOut)
        this.props.history.push('/checkout-page', { user: this.state.username, checkOutItems: this.state.checkOut, fId: this.state.fId })


    }
    saveSelectBtnHandler = () => {
        let copy = { ...this.state }
        copy.cartProduct.forEach(item => this.state.savedCartProduct.push(item))
        this.setState(copy)
        console.log(copy)
        this.props.history.push('/farmer-products/' + this.state.fId, { user: this.state.username, saveCartItems: this.state.savedCartProduct, fId: this.state.fId })


    }
    customerHomepage = (username) => {
        this.props.history.push('/customer-homepage/' + username)
    }







    render() {
        console.log(this.props.location.state.cart)

        // let cartProduct = this.state.cartProduct[0].cart;
        //  console.log(this.state.cartProduct[0].cart)
        //    console.log(cartProduct.name)
        let displayCartProducts = this.state.cartProduct.map((item, index)=> {
            return (
                <div key={item._pId} >

                    <div className="cart-items">
                        <ul>{index+1}</ul>
                        <ul>Item: {item.name}</ul>
                        <ul>Price:{item.price}</ul>
                        <ul>Quantity:{item.quantity}</ul>
                       <ul>Total Price:{item.totalPrice}</ul> <ul></ul>
                       </div>               

                   <button style={{background:"yellow",color:"green"}} onClick={() => { this.addQuantityBtnHandler(item._pId) }}>Add Item</button> 
                    <button style={{background:"orange",color:"blue"}} onClick={() => { this.deleteQuantityBtnHandler(item._pId) }}>Remove Item</button>
                   
                </div>


            )
        })
        return (
            <div className='display-cart'>
                <header>
                    <button onClick={() => { this.customerHomepage(this.state.username) }}>Customer Homepage </button>
                </header>
                <div><h4>Your Cart</h4></div>
                {displayCartProducts}
                <button style={{background:"red",color:"green"}}onClick={() => { this.confirmYourItemsBtnHandler() }}>Confirm Your Selected Items</button>
                <button style={{background:"rgb(173, 235, 149)",color:"green"}}onClick={() => { this.saveSelectBtnHandler() }}>Save and Select More</button>
            </div>



        )
    }
}