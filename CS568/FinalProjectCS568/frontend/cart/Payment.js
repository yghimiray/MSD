import React from "react";
import axios from "axios";
// import Farmers from './Farmers'
import { BrowserRouter, Redirect, Link, Route } from "react-router-dom";

export default class Payment extends React.PureComponent {
    
    state = {
        username: this.props.match.params.username,
        orders: this.props.location.state.state, 
    }

    // componentDidMount() {
    //     axios.get('/customers/'+this.state.cId+'/orders')
    //         .then(response => {
    //             console.log(response.data)
    //             let copy = { ...this.state }
    //             copy.orders = response.data;
                
    //             this.setState(copy)
    //         })

    // }
    cancelTranctionBtntnHandler= (username) => {
        console.log(username)
        this.props.history.push('/customer-homepage/'+username)
    }
    paymentBtnHandler = (username) =>{
        let forBill = {...this.state.orders}
        console.log(forBill)
        this.props.history.push('/billing-page/'+username,{order :forBill} )
    }


    render() {
        console.log(this.state.orders)
        console.log(this.props.match.params.username)
        let orderItems = 
             (
           
                <div>
                <p>Your Order Number :-  {this.state.orders._oId}</p>
                <p>Order Date:- {this.state.orders.date.toString()} </p>
                <p>{this.state.orders.items.map(element => {
                        return (
                            <p>
                                Order Product:{element.name}; Order Quantity:{element.quantity}; Unit Price:- {element.price}, TotalAmount:{element.totalPrice}
                            </p>
                        )

                    })
                    
                }
                </p>
                <h3>Status: Pending</h3>

    
                </div>
                )
                    
                   
        return (
          
            <div>
                <div><h3>Your Order Status</h3></div>
                {orderItems}
                <button onClick = {()=>{this.paymentBtnHandler(this.state.username)}} > Payment</button>
                <button onClick ={()=>{this.cancelTranctionBtntnHandler(this.state.username)}}>Cancel Transaction</button>


            </div>
    
        )
    }
}