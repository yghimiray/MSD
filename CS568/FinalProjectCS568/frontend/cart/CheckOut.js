import React from "react";
import axios from 'axios'
import Payment from "./Payment";
//import { CustomerContext } from "../CustomerHomePage"; 

export default class CheckOut extends React.Component {
        //static contextType = CustomerContext;
        
    state = {
        username:this.props.location.state.user,
        checkOut: this.props.location.state.checkOutItems,
        orders: {
            _fId: "",
            _oId: "",
            cId: "",
            date: "",
            items: []
        },
        totalAmount: this.props.location.state.checkOutItems.reduce((sum, item) => sum + item.totalPrice, 0),
        message: ""

    }


    checkOutBtnHandler = (username) => {
        console.log(this.state.checkOut)
        let copy = { ...this.state }
        console.log(copy.checkOut.length === 0)
        if (copy.checkOut.length <= 0) {
            this.setState({ message: "NO ITEMS FOR FOR ORDER" })
        } else {
            const farmersId = this.props.location.state.fId
            const date = Date.now()
            const number = Math.floor(Math.random() * 10000)
            const orderId = farmersId + this.state.orders.cId + date + number;
            console.log(orderId)
            copy.orders.date = new Date();
            copy.orders._oId = orderId;
            copy.orders._fId = farmersId;
            copy.message = "Thank you for the Shopping"
            copy.checkOut.forEach(element => {
                copy.orders.items.push(element)
            })
            this.setState(copy)
            console.log(this.state.orders)
            axios.post('/farmers/' + this.state.orders._fId + '/orders', this.state.orders)
                .then(response => {
                    console.log(response.data)
                })

            axios.post('/customers/'+this.state.username +'/orders', this.state.orders)
                .then(response => {
                    console.log(response.data)
                })


        }

        const orders = { ...this.state.orders }
        console.log(this.state.username)

        this.props.history.push('/payment-page/'+this.state.username, { state: orders })

    }

    cancelCheckOutBtnHandler = (username) => {
        console.log(username)
        this.props.history.push('/customer-homepage/' + username)
    }



    render() {
        // let value = this.context;
        // console.log(value)
        console.log(this.props.location.state.user)
        console.log(this.state.checkOut)


        let checkOutItem = this.state.checkOut.map(item => {

            return (
                <tbody key={item._pId}>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.totalPrice}</td>

                    </tr>
                </tbody>
            )
        })
        return (
            <div className="checkOut-page">
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    {checkOutItem}
                </table>
                <div>

                </div>
                <p>SubTotal:  {this.state.totalAmount}</p>
                <p>Tax:</p>
                <p>Grand Total:  {this.state.totalAmount}</p>
                <button onClick={() => { this.checkOutBtnHandler(this.state.username) }}>Check Out</button>
                <button onClick={() => { this.cancelCheckOutBtnHandler(this.state.username) }}>Cancel Your Transaction</button>
            </div>

        )
    }
}