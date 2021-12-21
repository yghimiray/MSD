import axios from "axios";
import React from "react";
import CreateReview from "./CreateReview";
import Review from "./Review";

class ProductDetail extends React.Component {
    state = {
        product: {
            name: '',
            price: 0,
            brand: '',
            model: '',
            reviews:[]
        }
    }

componentDidMount(){
    axios.get('/products/'+this.props.match.params.id+'/details',{
        headers:{
            authorization : localStorage.getItem('token')
        }
    })
    .then((response)=>{
       let copy = {...this.state};
       copy.product = response.data;
       this.setState(copy)
    })
}

    render() {
        return (
            <div>
                <h3>Product Detail</h3>
                <p>{this.state.product.name}</p>
                <p>{this.state.product.price}</p>
                <p>{this.state.product.brand}</p>
                <p>{this.state.product.model}</p>
                <h4>Reviews</h4>
                {
                    this.state.product.reviews.map((item)=>{
                        return (
                            <Review 
                             title={item.title}
                             description={item.description}
                             key= {item.id}
                             />
                        )
                    })
                }
            </div>
        )
    }
}

export default ProductDetail