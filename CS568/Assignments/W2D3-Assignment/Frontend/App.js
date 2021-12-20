import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Route, Switch} from 'react-router-dom';
// import axios from 'axios';


import Home from './Home';
import AllMovies from './AllMovies';
import OneMovie from './OneMovie';
import CreateMovie from './CreateMovie';
import MovieDetails from './MovieDetails';
import MovieUpdate from './MovieUpdate';
import MovieDelete from './MovieDelete';




export default class App extends React.Component {

  

propertyChange=(event)=>{
  let copy = {...this.state.movie}
  copy[event.target.name]=event.target.value;
  this.setState({movie:copy})

}



  render() {
    
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to = '/'> Home </Link>
            </li>
            <li>
              <Link to ='/movies'> All Movies</Link>
            </li>
            <li>
              <Link to ='/create-movie'> Create Movie</Link>
            </li>
          </ul>
        </div>

<Switch>
  <Route exact path = "/" component = {Home}></Route>
  <Route exact path = "/movies" component = {AllMovies}></Route>
  <Route exact path = "/create-movie" component = {CreateMovie}></Route>
  <Route exact path = "/movie-details/:id" component = {MovieDetails}></Route>
  <Route exact path = "/movie-update/:id" component = {MovieUpdate}></Route>
  <Route exact path = "/movie-delete/:id" component = {MovieDelete}></Route>
</Switch>

      </BrowserRouter>
    )
  }
}



