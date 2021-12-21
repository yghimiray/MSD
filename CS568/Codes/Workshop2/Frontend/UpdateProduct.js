import axios from "axios";
import React from "react";

class UpdateProduct extends React.Component {
    state = {
        product: {
            name: '',
            price: 0,
            brand: '',
            model: ''
        }
    }

    componentDidMount() {
        axios.get('/products/' + this.props.match.params.id + '/details' , {
            headers:{
                authorization:localStorage.getItem('token')
            }
        })
        .then((response)=>{
            let copy = {...this.state};
            copy.product = response.data;
            this.setState(copy)
        
        })
    }
    

    apply=()=>{
        //axios.put('/products',this.state.product,{})
    }

    onChange = (event) => {
        let copy = { ...this.state.product }
        copy[event.target.name] = event.target.value;
        this.setState({ product: copy })
    }

    render() {
        return (
            <div>
                <h2>Update Product</h2>

                Name: <input
                    type='text'
                    value={this.state.product.name}
                    name='name'
                    onChange={(event) => { this.onChange(event) }}
                />

                Price: <input
                    type='text'
                    value={this.state.product.price}
                    name='price'
                    onChange={(event) => { this.onChange(event) }}
                />

                Brand: <input
                    type='text'
                    value={this.state.product.brand}
                    name='brand'
                    onChange={(event) => { this.onChange(event) }}
                />

                Model: <input
                    type='text'
                    value={this.state.product.model}
                    name='model'
                    onChange={(event) => { this.onChange(event) }}
                />

                <input
                    type='button'
                    value='Apply'
                    onClick={this.apply}
                />
            </div>
        )
    }
}

export default UpdateProduct