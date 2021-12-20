import React, { Component } from 'react'
import axios from 'axios'

export default class productCreate extends Component {
    state = {
        product: {
            PID: '',
            name: '',
            price: 0,
            review: [],
            rating: 0
        }
    }

    propertyChange = (event) => {
        let copy = { ...this.state.product };
        copy[event.target.name] = event.target.value;
        this.setState({ product: copy })
    }


    addProduct = () => {
        axios.post('/products', this.state.product)
            .then((resposnse) => {

            })
    }



    render() {
        return (
            <div>
                <h2>Add new Product</h2>
                PID:<input
                    type='text'
                    name='PID'
                    onChange={(event) => { this.propertyChange(event) }}
                ></input>

                Name:<input
                    type='text'
                    name='name'
                    onChange={(event) => { this.propertyChange(event) }}
                ></input>

                Price:<input
                    type='text'
                    name='price'
                    onChange={(event) => { this.propertyChange(event) }}
                ></input>
                <button onClick={() => { this.addProduct() }}>Add</button>

            </div>
        )
    }
}
