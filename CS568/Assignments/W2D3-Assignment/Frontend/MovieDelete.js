import React, { Component } from 'react'
import axios from 'axios'


export default class MovieDelete extends Component {


    confirm= ()=> {
        const id = this.props.match.params.id
        axios.delete('/movies/' + id)
            .then((response) => {
                // let copy = { ...this.state };
                // copy.movie = response.data;
                // this.setState(copy)
            })
    }



    render() {
        return (
            <div>
                <div>You are going to delete this movie. Please confirm.</div>
                <p> <button onClick={()=>{this.confirm()}}>Confirm</button> 
                <button >Cancel</button></p>
            </div>
        )
    }
}
