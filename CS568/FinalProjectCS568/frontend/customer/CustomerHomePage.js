import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter} from 'react-router-dom'
import CheckOut from './cart/CheckOut'

//export const CustomerContext = React.createContext()

export default class CustomerHomePage extends Component {
    state = {
        thisCustomer: {},
    }

    componentDidMount() {
        const username = this.props.match.params.username
        axios.get('/customers/' + username)
            .then((response) => {
                let copy = { ...this.state };
                copy.thisCustomer = response.data;
                this.setState({ thisCustomer: copy.thisCustomer })
                console.log(this.state.thisCustomer)
            })
    }


    updateCustomer = (id) => {
        this.props.history.push('/customer-update/'+id)
    }

    showAllFarmers = (username) => {
        this.props.history.push('/farmers/'+username)
    }

    showAllOrders =(username) =>{
        this.props.history.push('/show-orders/'+username)

    }

    render() {
        return (
          
            <BrowserRouter>
                <div className='customer'>
                    
                <h1> Welcome {this.state.thisCustomer.name} </h1>
                
                <p> <button onClick={()=>{this.updateCustomer(this.state.thisCustomer.username)}}>Account Settings </button> </p>
                <p> <button onClick={()=>{this.showAllFarmers(this.state.thisCustomer.username)}}>Show All Farmers </button> </p>
                <p> <button onClick={()=>{this.showAllOrders(this.state.thisCustomer.username)}}>Show All Orders </button> </p>
                </div>
            </BrowserRouter>

        )
    }
}
