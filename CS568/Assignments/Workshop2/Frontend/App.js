// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Link, Route, Switch,Redirect} from 'react-router-dom'
import Login from './Login'
import productCreate from './productCreate'
import ProductDelete from './ProductDelete'
import ProductDetails from './ProductDetails'
import ProductReview from './ProductReview'

import ProductsAll from './ProductsAll'
import ProductUpdate from './ProductUpdate'
import Register from './Register'


class App extends React.Component {

  state = {
    isUserLoggedIn: true
  }



  render() {
    return (
      <BrowserRouter>
        <div>
          <ol>
            {this.state.isUserLoggedIn ? <li>
              <Link to='/all-products'> All Products </Link>
            </li> : null}

            {this.state.isUserLoggedIn ? <li>
              <Link to='/create-product'> Create Products </Link>
            </li> : null}

              {this.state.isUserLoggedIn?null:
            <li>
              <Link to='/login'> Login </Link>
            </li>}

            {this.state.isUserLoggedIn?null:
            <li>
              <Link to='/register'> Register </Link>
            </li>}
          </ol>
        </div>
              <Switch>
            {/* {this.state.isUserLoggedIn ? <Route exact path='/all-products' component={ProductsAll}></Route> :<Redirect to= '/login'/>}    
            {this.state.isUserLoggedIn ? <Route exact path='/create-product' component={productCreate}></Route> :<Redirect to= '/login'/>}    
            {this.state.isUserLoggedIn ? <Route exact path='/product-details' component={ProductDetails}></Route> :<Redirect to= '/login'/>}     */}

            {this.state.isUserLoggedIn ? <Route exact path='/all-products' component={ProductsAll}></Route> :null}    
            {this.state.isUserLoggedIn ? <Route exact path='/create-product' component={productCreate}></Route> :null}    
            {this.state.isUserLoggedIn ? <Route exact path='/product-details/:PID' component={ProductDetails}></Route> :null}    
            {this.state.isUserLoggedIn ? <Route exact path='/product-update/:PID' component={ProductUpdate}></Route> :null}    
            {this.state.isUserLoggedIn ? <Route exact path='/product-delete/:PID' component={ProductDelete}></Route> :null}    
            {this.state.isUserLoggedIn ? <Route exact path='/product-review/:PID' component={ProductReview}></Route> :null}    
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/register' component={Register}></Route>
              </Switch>
              

      </BrowserRouter>
    );
  }
}

export default App;