import axios from "axios";
import React from "react";
import { withRouter } from "react-router";
import { Form, Button, Card } from 'react-bootstrap'
import '../App.css';

class BillForm extends React.Component {
  state = {
    finalBill: this.props.finalBill,
    billing: {
      fullname: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      cardNo: "",
      cardType: "",
    }

  }

  handleChange = (event) => {

    let copy = { ...this.state }
    copy.billing[event.target.name] = event.target.value;
    this.setState(copy)
  }


  handleSubmit = (event, username) => {
    console.log(username)

    // event.preventDefault();
    let date = new Date()
    let copy = { ...this.state }
    const date1 = Date.now()
    const number = Math.floor(Math.random() * 700)
    const billNo = 'BNO' + this.state.finalBill.checkOut._fId + date1 + number;
    copy.billing.billNo = billNo;
    copy.billing.date = date.toString();
    copy.billing.farmerId = this.state.finalBill.checkOut._fId;
    copy.billing.orderId = this.state.finalBill.checkOut._oId;
    copy.billing.username = this.state.finalBill.username;
    copy.billing.totalAmount = this.state.finalBill.totalAmount;
    this.setState(copy)
    console.log(this.state.finalBill.username)

    axios.post('/transactions', this.state.billing)
      .then(response => {
        console.log(response.data)
        if (response.data) {
          this.props.history.push('/fedback-page/' + this.state.finalBill.username, {fId:this.state.billing.farmerId})
        } else {
          this.props.history.push('/customer-homepage/' + username)
        }
      })
      console.log(this.state.finalBill.username)

      
  }

  customerHomepage = (username) => {
    console.log(username)
    this.props.history.push('/customer-homepage/' + username)
  }


  render() {
    console.log(this.state.finalBill)
    
    return (

      <div class='container'>
         <button onClick={() => { this.customerHomepage(this.state.finalBill.username) }}>Home Page</button>
        <form >
          <label>
            <ul>
              Full Name :
              <textarea name="fullname" onChange={(e) => { this.handleChange(e) }} />
            </ul>
          </label>
          <ul>
            Address:
            <label>
              Street:
              <textarea name="street" onChange={(e) => { this.handleChange(e) }} />
            </label>
            <label>
              City:
              <textarea name="city" onChange={(e) => { this.handleChange(e) }} />
            </label>
            <label>
              State:
              <textarea name="state" onChange={(e) => { this.handleChange(e) }} />
            </label>
            <label>
              Zip Code:
              <textarea name="zip" onChange={(e) => { this.handleChange(e) }} />
            </label>
          </ul>
          <ul>
            <label>
              Card No:
              <textarea name="cardNo" onChange={(event) => { this.handleChange(event) }} />
            </label>
            <label>Card Type
              <select name="cardType" onChange={(e) => { this.handleChange(e) }}>
                <option value="debit">Debit</option>
                <option value="credit">Credit</option>
              </select>
            </label>
          </ul>
          
          <input type="button" value="Submit Payment" onClick={() => this.handleSubmit(this.state.finalBill.username)} />
        </form>
       
      </div>
    )
  }
}


export default withRouter(BillForm);