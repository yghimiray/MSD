import axios from 'axios'
import React, { Component } from 'react'

export default class MovieDetails extends Component {

    state = {
        movie: {}
    }


    componentDidMount() {
        const id = this.props.match.params.id
        axios.get('/movies/' + id)
        .then((response) => {
                let copy = { ...this.state };
                copy.movie = response.data;
                this.setState(copy)
            })

    }

    

    render() {
        return (
            <div>
                <h2>Details of this movie</h2>
                <p>ID:{this.state.movie.id}</p>
                <p>Name:{this.state.movie.name}</p>
                <p>Rating:{this.state.movie.rating}</p>
                <p>Genre:{this.state.movie.genre}</p>
                <p>ReleasedYear:{this.state.movie.released}</p>
                <p>Director:{this.state.movie.director}</p>

            </div>
        )
    }
}
