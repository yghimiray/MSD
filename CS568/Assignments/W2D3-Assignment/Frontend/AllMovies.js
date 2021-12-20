import React, { Component } from 'react'
import axios from 'axios';
import OneMovie from './OneMovie';

export default class AllMovies extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        axios.get('/movies')
            .then((response) => {
                let copy = { ...this.state };
                copy.movies = response.data
                this.setState(copy)
            })
    }


    showDetails = (id) => {
        this.props.history.push("/movie-details/" + id)
    }


    updateMovie = (id) => {
        this.props.history.push("/movie-update/" + id)
    }


    deleteMovie = (id) => {
        this.props.history.push("/movie-delete/" + id)
    }




    render() {
        return (
            this.state.movies.map((item) => {
                return (
                    <OneMovie
                        key={item.id}
                        name={item.name}
                        rating={item.rating}
                        showDetails={() => { this.showDetails(item.id) }}
                        updateMovie={() => { this.updateMovie(item.id) }}
                        deleteMovie={() => { this.deleteMovie(item.id) }}
                    >
                    </OneMovie>
                )
            })
        )
    }
}
