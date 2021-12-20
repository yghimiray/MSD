import React from "react";
import axios from "axios";
import Farmers from './Farmers'
import {BrowserRouter, Redirect,Link, Route } from "react-router-dom";

export default class OrderStatus extends React.PureComponent {
    state = {
        orders: [],
       customer:this.props.match.params.username
        

    }

    componentDidMount() {
        axios.get('/customers/'+this.state.customer+'/orders')
            .then(response => {
                console.log(response.data)
                let copy = { ...this.state }
                copy.orders = response.data;
                
                this.setState(copy)
            })

    }
    goTobtnHandler =(id)=>{
       this.props.history.push('/farmers')
        
    }


    render() {
        let orderItems = this.state.orders.map(item => {
            return (
            <div key={item._fId}>
                <div>
                <button  onClick={()=>{this.showDetailsClick()}}>Your Order Number :{item._oId}</button>
                <p>Order Date:{item.date} </p>
                    

                </div>
                    
                    <p>{item.items.map(element => {
                        return (
                            <p>
                                Order Product:{element.name}
                                <p>
                                    Order Quantity:{element.quantity}
                                </p>
                                <p>
                                    TotalAmount:{element.totalPrice}
                                </p>
                            </p>
                        )

                    })
                    
                }
                </p>
                
                <p>Order Status : {item.status}</p>
                <hr/>


                </div>
            )
        })
        return (
          
            <div>
                <div><h3>Your Order Status</h3></div>
                <div>{orderItems}</div>
                <button onClick ={()=>{this.goTobtnHandler(1)}}>Go To Farmers</button>
                <button onClick = {()=>{this.paymentBtnHandler()}} > Payment</button>


            </div>
    
        )
    }
}