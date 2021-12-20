import React, { Component } from 'react'
import axios from 'axios'

export default class ProductDelete extends Component {

    confirm = () => {
        const PID = this.props.match.params.PID
        axios.delete('/products/' + PID)
            .then((response) => {
                // let copy = { ...this.state };
                // copy.movie = response.data;
                // this.setState(copy)
            })
    }


    render() {
        return (
            <div>
                <h3>You are going to delete this movie. Please confirm.</h3>
                <p> <button onClick={()=>{this.confirm()}}>Confirm</button> 
                <button >Cancel</button></p>
            </div>
        )
    }
}
