import React, { PureComponent } from 'react'
import axios from 'axios'
import AdminDisplayUser from './AdminDisplayUser'
import {BrowserRouter,Route} from 'react-router-dom'
import AdminResetPassword from './AdminResetCustomerPassword'


export default class AdminAllUsers extends PureComponent {

    state = {
        farmers: [],
        customers: [],
        thisFarmer: {},
        thisCustomer: {},
        farmerStatus: true,
        customerStatus: true
    }

    homepage = () => {
        this.props.history.push('/admin-homepage')
    }


    componentDidMount() {
        axios.get('/farmers')
            .then((response) => {
                let copy = { ...this.state };
                copy.farmers = response.data;
                this.setState({ farmers: copy.farmers })
            })

        axios.get('/customers')
            .then((response) => {
                let copy = { ...this.state };
                copy.customers = response.data;
                this.setState({ customers: copy.customers })
            })

    }

    changeFarmerStatus = (username) => {
        axios.get('/farmers/' + username)
            .then((response) => {
                let copy = { ...this.state };
                copy.thisFarmer = response.data;
                this.setState({ thisFarmer: copy.thisFarmer })
                copy.farmerStatus = copy.thisFarmer.active
                this.setState({ farmerStatus: copy.farmerStatus })
                this.setState({ farmerStatus: !this.state.farmerStatus })
                copy.thisFarmer.active = this.state.farmerStatus
                this.setState({ thisFarmer: copy.thisFarmer })
                axios.put('/farmers/' + username, this.state.thisFarmer)
                    .then(response => {
                        window.location.reload()
                    })
            })

    }

    changeCustomerStatus = (username) => {
        axios.get('/customers/' + username)
            .then((response) => {
                let copy = { ...this.state };
                copy.thisCustomer = response.data;
                this.setState({ thisCustomer: copy.thisCustomer })
                copy.customerStatus = copy.thisCustomer.active
                this.setState({ customerStatus: copy.customerStatus })
                this.setState({ customerStatus: !this.state.customerStatus })
                copy.thisCustomer.active = this.state.customerStatus
                this.setState({ thisCustomer: copy.thisCustomer })
                axios.put('/customers/' + username, this.state.thisCustomer)
                    .then(response => {
                        window.location.reload()
                    })
            })

    }

    resetFarmerPassword=(username)=>{
        this.props.history.push('/reset-farmer-password/' + username )
    }


    resetCustomerPassword=(username)=>{
        this.props.history.push('/reset-customer-password/' + username)
    }



    render() {
        let farmers = this.state.farmers.map((item, index) => {
            return (
                <AdminDisplayUser
                    key={index}
                    // id ={<input value= {item._id} />}
                    name={<input defaultValue={item.username} />}
                    email={<input defaultValue={item.email} />}
                    type={<input defaultValue={item.type} />}
                    active={<input defaultValue={item.active} />}
                    changeStatus={() => this.changeFarmerStatus(item.username)}
                    resetPassword={() => this.resetFarmerPassword(item.username)}
                ></AdminDisplayUser>
            )
        })

        let customers = this.state.customers.map((item, index) => {
            return (
                <AdminDisplayUser
                    key={index}
                    // id ={<input value= {item._id} />}
                    name={<input defaultValue={item.username} />}
                    email={<input defaultValue={item.email} />}
                    type={<input defaultValue={item.type} />}
                    active={<input defaultValue={item.active} />}
                    changeStatus={() => this.changeCustomerStatus(item.username)}
                    resetPassword={() => this.resetCustomerPassword(item.username)}
                ></AdminDisplayUser>
            )
        })


        return (
            <BrowserRouter>
                <button onClick={() => { this.homepage() }}>Your Homepage </button>
                <h3>List of all users </h3>
                {farmers}
                {customers}
              
            </BrowserRouter>
        )
    }
}
