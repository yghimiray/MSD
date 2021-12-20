import axios from 'axios'
import React, { Component } from 'react'

export default class AdminAllTransactionsDetails extends Component {

    state = {
        transaction: {},
        billNo:this.props.match.params.billNo,
        message:''
    }

    componentDidMount() {

        axios.get('/transactions/'+this.state.billNo)
            .then(response => {
                let copy = { ...this.state }
                copy.transaction = response.data
                this.setState(copy)
            })
            
    }

    homepage = () => {
        this.props.history.push('/admin-homepage')
    }

    summary = () => {
        this.props.history.push('/admin-all-transactions')
    }

    render() {
        

        return (
            <div>
                <button onClick={() => { this.homepage() }}>Your Homepage </button>
                <button onClick={() => { this.summary() }}>Transaction Summary </button>
                <h2> Transaction Details of {this.state.billNo} </h2>

                <p> Full Name:- {this.state.transaction.fullname}</p>
                <p> Street:- {this.state.transaction.street}</p>
                <p> City:- {this.state.transaction.city}</p>
                <p> State:- {this.state.transaction.state}</p>
                <p> Zipcode:- {this.state.transaction.zip}</p>
                <p> Card No:- {this.state.transaction.cardNo}</p>
                <p> Card Type:- {this.state.transaction.cardType}</p>
                <p> Bill No:- {this.state.transaction.billNo}</p>
                <p> Date of Transaction:- {this.state.transaction.date}</p>
                <p> Order ID:- {this.state.transaction.orderId}</p>
                <p> Customer :- {this.state.transaction.customer}</p>
                <p> Farmer ID:- {this.state.transaction.farmerId}</p>
                <p> Total Amount:- {this.state.transaction.totalAmount}</p> 
            </div>
        )
    }



}
