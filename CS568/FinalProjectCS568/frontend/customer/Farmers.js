import React from 'react'
import axios from 'axios'
import DisplayFarmers from './DisplayFarmers'
import { withRouter } from 'react-router'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import OrderStatus from './OrderStatus'
import { Button, Container, Row, Col } from 'react-bootstrap'
import './Farmers.css'

class Farmers extends React.Component {

    state = {
        farmers: [],
        customerId:"",
        customer:""
    }

    componentDidMount() {
        axios.get('/farmers')
            .then(response => {
                console.log(response.data);
                let copy = { ...this.state }
                let farmersArray = response.data;
                farmersArray.sort(function(a,b){
                    return b.rating - a.rating
                })
                copy.farmers = farmersArray
                this.setState(copy)
            })
            
            axios.get('/customers/'+this.props.match.params.username)
            .then(response => {
                console.log(response.data);
                let copy = { ...this.state }
                copy.customer = response.data;
                this.setState(copy)
                copy.customerId= this.state.customer._id
                this.setState({ copy})
            })
            

    }

    selectFarmerBtnHandler = (id, username) => {
        console.log(id)
        this.props.history.push('/farmer-products/'+id, {user :username} )
    }

    customerHomepage =(username)=>{
    this.props.history.push('/customer-homepage/'+username)
    }
    


    render() {


        let displayFarmers = this.state.farmers.map((item, index) => {
            
            console.log(item)
            console.log(this.state.farmers)

            return (
                <div className="Farmers">
                    <body className="Farmers-header">
                            <DisplayFarmers
                                key={index}
                                farm={item.farm}
                                address={item.address}
                                special={item.special}
                                rating ={item.rating}
                                // rating = {item.rating}
                                selectFarmerBtnHandler={() => { this.selectFarmerBtnHandler(item._id,this.props.match.params.username) }}
                            ></DisplayFarmers>
                    </body>
                </div>
            )
        })
        return (
            // <BrowserRouter>
            // <Link to={'/order-status' + 1}> Order Status </Link>

           <div>
            <header>
            <Button onClick={() => { this.customerHomepage(this.props.match.params.username) }}>Customer Homepage </Button>
            </header>
                <div>
                    <Container>
                    {displayFarmers}
                    </Container>
                   
                </div>
                </div>
                // {/* <Switch> */}
            //     <Route path={'/order-status' + 1} component={OrderStatus} />
            // </BrowserRouter>


        )
    }
}

export default withRouter(Farmers)

