import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import ProductDetail from './ProductDetail';
import Products from './Products';
import axios from 'axios';
import Product from './Product';
import UpdateProduct from './UpdateProduct';
import Home1 from './Home1';
import Home2 from './Home2';

class App extends React.Component {

  state = {
    isUserLoggedIn: true,

  }



  render() {
    return (
      <BrowserRouter>

        <div className='App'>
          <ol>
            {this.state.isUserLoggedIn ?
              <li>
                <Link to='/all-products'>All Products</Link>
              </li>
              : null}

            {this.state.isUserLoggedIn ?
              <li>
                <Link to='/create-product'>Create Product</Link>
              </li>
              : null}


            <li>
              <Link to='/login'>Login</Link>
            </li>

            <li>
              <Link to='/register'>Register</Link>
            </li>
          </ol>

          <Route path='/home' component={Home1} /> 
          <Route path='/home/test' component={Home2} /> 

          <Route path='/all-products' component={Products} />
          <Route path='/login' component={Login} />

          {/* <Route path='/products/detail/:id' component={ProductDetail} />
          <Route path='/products/review/' component={CreateReview} /> */}

          <Route path='/product-detail/:id' component={ProductDetail} />
          <Route path='/update-product/:id' component={UpdateProduct} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
