import axios from 'axios'
import React, { Component } from 'react'

export default class CreateMovie extends Component {
    state = {
        movie: {
            id: '',
            name: '',
            rating: '',
            genre: ''
        },
    }


    propertyChange = (event) => {
        let copy = { ...this.state.movie };
        copy[event.target.name] = event.target.value;
        this.setState({ movie: copy })
    }


    addMovie = () => {
        axios.post('/movies', this.state.movie)
            .then((response) => {
                // let copy ={...this.state}
                // copy.movie=response.data
                // this.setState(copy)
            })
    }


    render() {
        return (
            <div>
                <h2>Add new Movie</h2>
                Id: <input
                    type='text'
                    //    value={this.props.name} 
                    onChange={(event) => { this.propertyChange(event) }}
                    name='id'
                ></input>


                Name: <input
                    type='text'
                    //    value={this.props.name} 
                    onChange={(event) => { this.propertyChange(event) }}
                    name='name'
                ></input>
                Rating: <input
                    type='text'
                    // value={this.props.rating} 
                    onChange={(event) => { this.propertyChange(event) }}
                    name='rating'
                ></input>

                Genre: <input
                    type='text'
                    // value={this.props.rating} 
                    onChange={(event) => { this.propertyChange(event) }}
                    name='genre'
                ></input>

                <button onClick={()=>{this.addMovie()}}>Add Movie</button>
            </div>
        )
    }
}
