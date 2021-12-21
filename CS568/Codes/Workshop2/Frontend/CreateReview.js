import axios from "axios";
import React from "react";

class CreateReview extends React.Component {

    state = {
        review: {
            title: '',
            description: ''
        }
    }

    onChange = (event) => {
        let copy = { ...this.state.review }
        copy[event.target.name] = event.target.value;
        this.setState({ review: copy })
    }

    createReview=()=>{
        axios.post('/products/' + 1+ '/reviews',this.state.review,{
            headers:{
                authorization :''
            }
        } )
    }

    render() {
        return (
            <div>
                Title: <input
                    type='text'
                    value={this.state.review.title}
                    onChange={this.onChange}
                    name='title' />

                Description: <input
                    type='text'
                    value={this.state.review.description}
                    onChange={this.onChange}
                    name='description' />

                <input type='button'
                    value='Add Review'
                    onClick={this.createReview} />
            </div>
        )
    }
}

export default CreateReview