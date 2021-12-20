import React, { Component } from 'react'
import axios from 'axios'

export default class ProductUpdate extends Component {

    state = {
        thisProd: {},
        updatedProd: {
            name: '',
            price: ''
        }
    }


    componentDidMount() {
        const PID = this.props.match.params.PID
        axios.get('/products/' + PID)
            .then((response) => {
                let copy = { ...this.state };
                copy.thisProd = response.data;
                this.setState({ thisProd: copy.thisProd })
            })
    }


    propertyChange = (event) => {
        let copy = { ...this.state.updatedProd };
        copy[event.target.name] = event.target.value;
        this.setState({ updatedProd: copy })
    }


    apply = () => {
        const PID = this.props.match.params.PID
        axios.put('/products/' + PID, this.state.updatedProd)
            .then((response) => {
                // let copy ={...this.state}
                // copy.movie=response.data
                // this.setState(copy)
            })
    }




    render() {
        return (
            <div>
                <h2>Update this Product</h2>
                Name:<input
                    type='text'
                    placeholder={this.state.thisProd.name}
                    name='name'
                    onChange={(event) => { this.propertyChange(event) }}
                />
                Price:<input
                    type='text'
                    placeholder={this.state.thisProd.price}
                    name='price'
                    onChange={(event) => { this.propertyChange(event) }}
                />

                <button onClick={() => { this.apply() }}> Apply </button>
            </div>
        )
    }
}
