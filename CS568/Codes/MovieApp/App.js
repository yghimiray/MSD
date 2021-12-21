import logo from './logo.svg';
import './App.css';
import React from 'react'

import Movie from './Movie'
import CreateMovie from './CreateMovie';
import UpdateMovie, { Test } from './UpdateMovie';




class App extends React.Component {

  state = {
    movies: [
      { id: 1, name: 'movie1', rating: 4, genre: 'comedy' },
      { id: 2, name: 'movie2', rating: 3, genre: 'horror', directorName: '', year: 1111, description: '' }
    ],
    newMovie: {
      name: '',
      rating: 0
    },
    favoriteMovies: [],
    showFavorite: true,
    showMovies: true,
    showUpdateMovie: false,
    movieToBeUpdated: {
      id: 0,
      name: ''
    }

  }

  updateMovieNameChanged = (event) => {
    let copy = { ...this.state.movieToBeUpdated }
    copy.name = event.target.value;
    this.setState({ movieToBeUpdated: copy })
  }

  showHideButtonEventHandler = () => {
    this.setState({ showFavorite: !this.state.showFavorite })
  }
  showHideMovieButtonEventHandler = () => {
    this.setState({ showMovies: !this.state.showMovies })
  }


  addFavoriteMovieButtonClickHandler = (id) => {
    let movie = this.state.movies.find((item) => {
      return item.id === id
    })

    this.setState({ favoriteMovies: this.state.favoriteMovies.concat(movie) })
  }

  newMovieNameChange = (event) => {
    this.setState({
      newMovie: {
        name: event.target.value,
        rating: this.state.newMovie.rating
      }
    })
  }

  newMovieRatingChange = (event) => {
    this.setState({
      newMovie: {
        name: this.state.newMovie.name,
        rating: event.target.value
      }
    })
  }

  onSaveMovie = () => {
    console.log(this.state.newMovie)
    this.setState({ movies: this.state.movies.concat(this.state.newMovie) })
  }

  deleteMovie = (id) => {
    let result = this.state.movies.filter((item) => {
      return id !== item.id
    })
    this.setState({ movies: result })
  }

  deleteMovieFavorite = (id) => {
    let result = this.state.favoriteMovies.filter((item) => {
      return id !== item.id
    })
    this.setState({ favoriteMovies: result })
  }



  movieNameChangeEventHandler = (id, event) => {
    let result = this.state.movies.map((item) => {
      if (item.id === id) {
        let copy = { ...item };
        copy.name = event.target.value;
        return copy;
      }
      return item;
    });
    this.setState({ movies: result })
  }

  movieRatingChangeEventHandler = (id, event) => {
    let result = this.state.movies.map((item) => {
      if (item.id === id) {
        let copy = { ...item };
        copy.rating = event.target.value;
        return copy;
      }
      return item;
    });
    this.setState({ movies: result })
  }

  deleteMovieFromFavorite = (id) => {
    let result = this.state.favoriteMovies.filter((item) => {
      return item.id !== id
    })
    this.setState({ favoriteMovies: result })
  }

  updateButtonClickEventhandler = (id) => {
    this.setState({ showUpdateMovie: !this.state.showUpdateMovie })
    let movie = this.state.movies.find((item) => {
      return item.id === id
    })
    let copy = { ...this.state.movieToBeUpdated }
    copy = movie;
    this.setState({ movieToBeUpdated: copy })

    this.setState({ i: this.state.i + 1 })
    this.setState({ i: this.state.i + 1 })

    //   this.setState((state)=>{
    //       return { i : state.i +1}
    //   })

    //   this.setState((state)=>{
    //     return { i : state.i +1}
    // })
  }

  applyButtonClickHandler = () => {
    let result = this.state.movies.filter((item) => {
      return item.id !== this.state.movieToBeUpdated.id
    });
    result.push(this.state.movieToBeUpdated);
    this.setState({ movies: result })
  }



  render() {

    let favorites = this.state.favoriteMovies.map((item) => {
      return (
        <Movie
          key={item.id}
          movieName={item.name}
          movieRating={item.rating}
          movieGenre={item.genre}
          deleteMovieEventHandler={() => { this.deleteMovieFromFavorite(item.id) }}
        ></Movie>
      )
    })

    let movies = this.state.movies.map((item) => {
      return (
        <Movie
          key={item.id}
          movieName={item.name}
          movieRating={item.rating}
          movieGenre={item.genre}
          deleteMovieEventHandler={() => { this.deleteMovie(item.id) }}
          movieNameChangeEventHandler=
          {(event) => { this.movieNameChangeEventHandler(item.id, event) }}
        >
        </Movie>
      )
    })

    let updateComponent = (
      <UpdateMovie
        name={this.state.movieToBeUpdated.name}
        updateMovieNameChanged={(event) => { this.updateMovieNameChanged(event) }}
      />
    )


    return (

      <div>

        <Test name='umur'>
          Hi React
        </Test>


        <input
          type='button'
          value='Show / Hide'
          onClick={this.showHideMovieButtonEventHandler} />

        {
          this.state.showMovies ? movies : null
        }

        <div>Create Movie</div>
        <CreateMovie
          name={this.state.newMovie.name}
          rating={this.state.newMovie.rating}
          nameChanged={(e) => { this.newMovieNameChange(e) }}
          ratingChanged={(e) => { this.newMovieRatingChange(e) }}
          onSave={() => { this.onSaveMovie() }}
        >

        </CreateMovie>

        <div>==================</div>
        <input
          type='button'
          value='Show / Hide Favorite Movies'
          onClick={this.showHideButtonEventHandler}
        />
        <div>Favorite Movies</div>

        {
          this.state.showFavorite ? favorites : null
        }

        {this.state.showUpdateMovie ? updateComponent : null}

      </div>

    )
  }
}



export default App;
