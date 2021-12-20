// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import CustomerSignUp from './CustomerSignUp';
import CustomerCart from './CustomerCart';
import CustomerLogin from './CustomerLogin';
import CustomerUpdate from './CustomerUpdate';
import Farmers from './customer/Farmers'
import Product from './customer/Product'
import Cart from './cart/Cart'
import CheckOut from './cart/CheckOut';
import OrderStatus from './customer/OrderStatus';
import Payment from './cart/Payment';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {



  render() {
    return (
      <div>
       Brilliance Farmers Online Shopping
        <Home></Home>
        
      </div>


      // <BrowserRouter>
      //   <div>
      //   <Link to='/farmers'> Farmers </Link>
      //   {/* <Farmers></Farmers> */}
      //   {/* <Product></Product> */}

      //   <Route path='/farmers' component={Farmers} />
      //   <Route path='/farmer-products/:id' component={Product} />
      //   <Route path='/display-cart' component ={Cart}/>
      //   <Route path='/checkout-page' component ={CheckOut}/>
      //   <Route path='/payment-page/:id' component ={Payment}/>


      //     <ul>
      //     {this.state.isUserLoggedIn?null:
      //       <li>
      //         <Link to='/login'> Sign In </Link>
      //       </li>}


      //     {this.state.isUserLoggedIn?null:
      //       <li>
      //         <Link to='/signup'> Sign Up </Link>
      //       </li>}

      //       {/* <li>
      //         <Link to='/shoppingCart'> Add To cart </Link>
      //       </li> */}



      //     </ul>


      //   </div>

      //   <Switch>
      //   <Route exact path='/login' component={CustomerLogin}></Route>
      //   <Route exact path='/signup' component={CustomerSignUp}></Route>
      //   <Route exact path='/customer-update/:username' component={CustomerUpdate}></Route>
      //   <Route exact path='/shoppingCart/:username' component={CustomerCart}></Route>
      //   </Switch>
      // </BrowserRouter>
    )
  }

}

export default App;
