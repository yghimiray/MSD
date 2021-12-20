import React, { Component } from 'react'
import axios from 'axios'

export default class FarmerAddProduct extends Component {
    state = {
        thisFarmer: {},
        addedProduct: {
            _pId: '',
            name: '',
            category: '',
            price: '',
            quantity: ''
        },
        message:'Farmers Product Addition Page',
        add:true
    }

    componentDidMount() {
        const username = this.props.match.params.username
        axios.get('/farmers/' + username)
            .then((response) => {
                let copy = { ...this.state };
                copy.thisFarmer = response.data;
                this.setState({ thisFarmer: copy.thisFarmer })
            })
    }



    propertyChange = (event) => {
        let copy = { ...this.state.addedProduct };
        
        copy[event.target.name] = event.target.value;
        this.setState({ addedProduct: copy })
    }

    apply = () => {
        let copy = { ...this.state }
        copy.thisFarmer.products.push(this.state.addedProduct)
        this.setState(copy)
        const username = this.props.match.params.username
        axios.put('/farmers/' + username, this.state.thisFarmer)
            .then((response) => {

            })
            this.setState({message:"Product added successfully"})
            this.setState({add:false})
        }

    homepage = (username) => {
        this.props.history.push('/farmer-homepage/' + username)
    }


    render() {
        return (
            <ul >
                <button onClick={() => { this.homepage(this.state.thisFarmer.username) }}>Your Homepage </button>
                <h2>{this.state.message} </h2>

            {this.state.add ? 
              <div>
              <ul >
                  Product ID:<input 
                      type='text'
                      name='_pId'
                      onChange={(event) => { this.propertyChange(event) }}
                  />
              </ul>
              <ul>
                  Name of Product:<input 
                      type='text'
                      name='name'
                      onChange={(event) => { this.propertyChange(event) }}
                  />
              </ul>
              <ul>
                  Product Category:<input
                      type='text'
                      name='category'
                      onChange={(event) => { this.propertyChange(event) }}
                  />
              </ul>
              <ul>
                  Price:<input
                      type='text'
                      name='price'
                      onChange={(event) => { this.propertyChange(event) }}
                  />
              </ul>
              <ul>
                  Quantity:<input
                      type='text'
                      name='quantity'
                      onChange={(event) => { this.propertyChange(event) }}
                  />
              </ul>
              <button style={{ position: 'relative', marginLeft: 80 ,marginTop:30 }} onClick={() => { this.apply() }}> Apply </button>
              </div>
            :null}
          
          </ul>
        )
    }
}
