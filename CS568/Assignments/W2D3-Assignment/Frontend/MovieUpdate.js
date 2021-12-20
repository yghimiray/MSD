import axios from 'axios'
import React, { Component } from 'react'

export default class MovieUpdate extends Component {

    state = {
        thisMovie: {},
        updatedMovie: {
            name: '',
            rating: '',
            genre: ''

        }
    }


    componentDidMount() {
        const id = this.props.match.params.id
        axios.get('/movies/' + id)
            .then((response) => {
                let copy = { ...this.state };
                copy.thisMovie = response.data;
                this.setState({ thisMovie: copy.thisMovie })
            })
    }


    propertyChange = (event) => {
        let copy = { ...this.state.updatedMovie };
        copy[event.target.name] = event.target.value;
        this.setState({ updatedMovie: copy })
    }


apply =()=>{
    const id = this.props.match.params.id
    axios.put('/movies/'+id, this.state.updatedMovie)
            .then((response) => {
                // let copy ={...this.state}
                // copy.movie=response.data
                // this.setState(copy)
            })
}





    render() {
        return (
            <div>
                <h2>Update this Movie</h2>
                Name:<input
                    type='text'
                    placeholder={this.state.thisMovie.name}
                    name='name'
                    onChange={(event)=>{this.propertyChange(event)}}
                />
                Rating:<input
                    type='text'
                    placeholder={this.state.thisMovie.rating}
                    name='rating'
                    onChange={(event)=>{this.propertyChange(event)}}
                />
                Genre:<input
                    type='text'
                    placeholder={this.state.thisMovie.genre}
                    name='genre'
                    onChange={(event)=>{this.propertyChange(event)}}
                />
                <button onClick={()=>{this.apply()}}> Apply </button>
            </div>
        )
    }
}
