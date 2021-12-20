// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'


import Home from './Home';
import PostAll from './PostAll';
// import PostOne from './PostOne';
import PostCreate from './PostCreate';
import PostSearch from './PostSearch';

class App extends React.PureComponent {
  

  

  render() {
    return (
      <BrowserRouter>

        <div>
          <ol>
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
              <Link to='/posts'>All Posts</Link>
            </li>
            <li>
              <Link to='/add-posts'>Add Posts</Link>
            </li>
            </ol>

        </div>

        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/posts' component={PostAll}></Route>
          <Route exact path='/add-posts' component={PostCreate}></Route>
          <Route exact path='/search-post/:PID' component={PostSearch}></Route>
        </Switch>
        

      </BrowserRouter>
    )
  }
}

export default App;
