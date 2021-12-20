import React, { Component } from 'react'
import axios from 'axios'

export default class ProductReview extends Component {
    state = {
        thisProduct: {},
        updatedProduct: {},
        newReview:''
    }


    componentDidMount() {
        const PID = this.props.match.params.PID
        axios.get('/products/' + PID)
            .then((response) => {
                let copy = { ...this.state };
                copy.thisProduct = response.data;
                this.setState({ thisProduct: copy.thisProduct })
                // console.log(this.state.thisProduct)
            })
    }


    propertyChange = (event) => {
        let copy = { ...this.state };
        // copy[event.target.name] = event.target.value;
        copy.newReview = event.target.value;
        this.setState(copy)
    }

    


    apply = () => {
        const PID = this.props.match.params.PID
        let copyState={...this.state}
        let copy = copyState.thisProduct
        copy.review.push(this.state.newReview)
        // copy.review = copy.review.concat(this.state.newReview) 
        this.setState(copyState)
        axios.put('/products/' + PID, this.state.thisProduct)
            .then((response) => {

            })
    }



    render() {
        return (
            <div>
                <h2>Add review to this product</h2>
                Review:<input
                    type='text'
                    placeholder={"Add your review here"}
                    // name='newReview'
                    onChange={(event) => { this.propertyChange(event) }}
                />

                <button onClick={() => { this.apply() }}> Apply </button>
            </div>
        )
    }
}
