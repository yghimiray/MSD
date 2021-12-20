import axios from 'axios'
import React, { Component } from 'react'

export default class AdminAllTransactions extends Component {

    state = {
        transactions: [],
        message:'List of All Transactions'
    }

    componentDidMount() {

        axios.get('/transactions')
            .then(response => {
                let copy = { ...this.state }
                copy.transactions = response.data
                this.setState(copy)
            })
            
    }

    homepage = () => {
        this.props.history.push('/admin-homepage')
    }

    detail = (billNo) => {
        this.props.history.push('/admin-all-transactions-detail/'+billNo)
    }

    render() {
        
        let transactionSummary = this.state.transactions.map((item, index) => {
            return (
                <div>
                    SN {index + 1+":-"}
                    {item.billNo}
                    <button onClick={()=> this.detail(item.billNo)}> Detail </button>

                </div>
            )
        })


        return (
            <div>
                <button onClick={() => { this.homepage() }}>Your Homepage </button>
                <h2> {this.state.message } </h2>

                {transactionSummary}

            </div>
        )
    }
}
