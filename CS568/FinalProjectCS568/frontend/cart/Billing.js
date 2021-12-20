import React from "react"
import axios from "axios"
import BillForm from "./BillForm"
import { Container, Row } from "react-bootstrap"


export default class Billing extends React.Component {
    state = {
        username:this.props.match.params.username,
        checkOut: this.props.location.state.order,
        totalAmount: this.props.location.state.order.items.reduce((sum, item) => sum + item.totalPrice, 0),
        message: ""

    }

    cancelCheckOutBtnHandler = (username) => {
        console.log(username)
        this.props.history.push('/customer-homepage/' + username)
    }



    render() {
        let date = new Date()
        console.log(this.props.location.state.order)
        console.log(this.state.checkOut)
        


        let checkOutItem = this.state.checkOut.items.map(item => {

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

            <div class="w3-container">
                <Container>
               <Row>
                    <h3>Brilliance Famers Shopping Center</h3> 
            <div className="checkOut-page">
                <header>Brilliance Farmers Shopping Center </header>

                    <p>FairField , Iowa, 52577</p>
                    <p>Phone :(641) 222-8000</p>
                    <p>Email : brilliance@miu</p>
                    </div>
                    </Row>
               
                </Container>
                <body>
                <div class >Billing Information</div>
                <p>Order N0# :{this.state.checkOut._oId}</p>
                <p>Billing Date :{date.toString()}</p>
               
    
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
                   <BillForm finalBill={this.state}></BillForm>

               

                <button onClick={() => { this.cancelCheckOutBtnHandler(this.state.username) }}>Cancel Your Transaction</button>
           </body>
            </div>

        )
    }
}