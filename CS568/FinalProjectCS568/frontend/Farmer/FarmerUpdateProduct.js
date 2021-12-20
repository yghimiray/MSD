import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

export default class FarmerUpdateProduct extends Component {
    state = {
        thisFarmer: {},
        prodId: this.props.match.params.id,
        currentProducts: [],
        updatingProduct: {
            name: '',
            category: '',
            price: '',
            quantity: ''
        },
        confirm:false,
        message: 'Product Update Page'
    }



    componentDidMount() {
        const username = this.props.match.params.username
        axios.get('/farmers/' + username)
            .then((response) => {
                let copy = { ...this.state };
                copy.thisFarmer = response.data;
                this.setState(copy)
                copy.currentProducts = this.state.thisFarmer.products
                this.setState(copy)
            })
    }

    homepage = (username) => {
        this.props.history.push('/farmer-homepage/' + username)
    }

    propertyChange = (event) => {
        let copy = { ...this.state.updatingProduct };
        copy._pId = this.state.prodId
        copy[event.target.name] = event.target.value;
        this.setState({ updatingProduct: copy })
    }


    delete = (id) => {
        let copy = { ...this.state }
        copy.thisFarmer.products = this.state.currentProducts.filter(item => item._pId !== id)
        this.setState({ copy })
        const username = this.props.match.params.username
        axios.put('/farmers/' + username, this.state.thisFarmer)
            .then((response) => {

            })
    }




    update = (id) => {
        this.delete(id)
        let copy = { ...this.state }
        copy.thisFarmer.products.push(this.state.updatingProduct)
        this.setState({ copy })
        this.setState({ message: 'Do you want to Update this product ' + this.props.match.params.id + ' ?' })
        this.setState({confirm:true})
        // console.log(this.state.thisFarmer.products)
    }


    confirm = () => {
        const username = this.props.match.params.username
        axios.put('/farmers/' + username, this.state.thisFarmer)
            .then((response) => {

            })
        this.setState({message:"Product has been successfully updated"})
    }





    render() {
        return (
            <div>
                <button onClick={() => { this.homepage(this.state.thisFarmer.username) }}>Your Homepage </button>

                <h2> {this.state.message}</h2>
               
                {this.state.confirm ? null : 
                  <div>
                  Name{<input
                      type='text'
                      name='name'
                      onChange={(event) => { this.propertyChange(event) }}
                  />}
                  Category{<input
                      type='text'
                      name='category'
                      onChange={(event) => { this.propertyChange(event) }}
                  />
                  }
                  Price{<input
                      type='text'
                      name='price'
                      onChange={(event) => { this.propertyChange(event) }}
                  />}

                  Quantity{<input
                      type='text'
                      name='quantity'
                      onChange={(event) => { this.propertyChange(event) }}
                  />
                  }
                  <p> <Button onClick={() => this.update(this.state.prodId)}> Apply </Button></p>
              </div>

}

                {this.state.confirm ? 
                <div>  <p><Button onClick={() => this.confirm()}> confirm </Button>
                <Button onClick={() => { this.homepage(this.state.thisFarmer.username) }}> Cancel </Button></p>
                </div> : null }              
               

            </div>
        )
    }
}
