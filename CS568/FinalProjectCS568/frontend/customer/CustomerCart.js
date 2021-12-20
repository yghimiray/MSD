import React, { Component } from 'react'
import axios from 'axios'

export default class CustomerCart extends Component {
    // state = {
    //     thisCustomer: {},
    //     cartObj: {
    //         product: {
    //             _pid: "P001",
    //             farmer: "Farmer1",
    //             price: 10
    //         },
    //         qty: 1,
    //         amount: 10
    //     }

    // }

    // componentDidMount() {
    //     const username = this.props.match.params.username
    //     axios.get('/customers/' + username)
    //         .then((response) => {
    //             let copy = { ...this.state };
    //             copy.thisCustomer = response.data;
    //             this.setState({ thisCustomer: copy.thisCustomer })
    //             console.log(this.state.thisCustomer)
    //         })
    // }

    // propertyChange = (event) => {
    //     let copy = { ...this.state.thisCustomer };
    //     copy[event.target.name] = event.target.value;
    //     this.setState({ thisCustomer: copy })
    // }


    // apply = () => {
    //     const copy = {...this.state.thisCustomer}
    //     const prod = copy.cart.find((item)=>{})
    //     copy.cart.push(this.state.cartObj)
    //     this.setState({thisCustomer:copy})
    //     console.log(this.state.thisCustomer.cart)
    //     const username = this.props.match.params.username
    //     axios.put('/customers/' + username, this.state.thisCustomer)
    //         .then((response) => {
    //             // let copy ={...this.state}
    //             // copy.movie=response.data
    //             // this.setState(copy)
    //         })
    // }



    render() {
        return (
            <div>
                This is a shopping cart page.
                {/* <button onClick={() => { this.apply() }}> Apply </button> */}
            </div>
        )
    }
}
