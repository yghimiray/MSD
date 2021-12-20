// import Login from "./Login"
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
// import Register from "./Register"
import './App.css';
import React from 'react';
import CustomerLogin from "./CustomerLogin";
import CustomerSignUp from "./CustomerSignUp";
import CustomerUpdate from "./CustomerUpdate";
import CustomerCart from "./CustomerCart";
import FarmerLogin from "./FarmerLogin";
import FarmerSignUp from "./FarmerSignUp";
import FarmerUpdate from "./FarmerUpdate";
import Market from './Market'
import Team from './Team'
import Careers from './Careers'
import AdminLogin from './AdminLogin';
// import AdminActivateAccount from './AdminActivateAccount';
// import AdminDeactivateAccount from './AdminDeactivateAccount';
import AdminAllTransactions from './AdminAllTransactions';
import ContactEmail from './ContactEmail';
import ContactPhone from './ContactPhone';
import FarmerHomePage from './FarmerHomePage';
import FarmerAddProduct from './FarmerAddProduct';
import FarmerAllProducts from './FarmerAllProducts';
import FarmerUpdateProduct from './FarmerUpdateProduct';

import AdminAllUsers from './AdminAllUsers';
import AdminHomePage from './AdminHomePage';
import CustomerHomepage from './CustomerHomePage'
import Farmers from './customer/Farmers';
import Product from './customer/Product';
import Cart from './cart/Cart';
import CheckOut from './cart/CheckOut';
import Payment from './cart/Payment';
import Billing from './cart/Billing';
import OrderStatus from './customer/OrderStatus';

import FedBack from './cart/FedBack';
import AdminResetCustomerPassword from './AdminResetCustomerPassword';
import AdminResetFarmerPassword from './AdminResetFarmerPassword';
import FarmerDeleteProduct from './FarmerDeleteProduct';
import AdminAllTransactionsDetails from './AdminAllTransactionsDetails';
// import farmerContext from './FarmerLogin'



export default class Home extends React.Component {

    state = {
        isAdminLoggedIn: false,
        isCustomerLoggedIn: false,
        isFarmerLoggedIn: false,
        message: ''
    }


    farmerLogin = () => {
        const accessToken = localStorage.getItem('accessToken')
        console.log(accessToken)
        this.setState({ isAdminLoggedIn: false })
        this.setState({ isCustomerLoggedIn: false })
        this.setState({ isFarmerLoggedIn: false })
        this.setState({ message: "Logged In Successfully !" })
    }



    logout = () => {
        this.setState({ isAdminLoggedIn: false })
        this.setState({ isCustomerLoggedIn: false })
        this.setState({ isFarmerLoggedIn: false })
        localStorage.removeItem('accessToken')
        this.setState({ message: "Logged Out Successfully !" })
    }

    render() {
        return (
            <BrowserRouter>
                <button onClick={this.farmerLogin}>Click </button>
                <ul className="navbar">
                    <Link className="navbar-brand" >CS568 PROJECT®  </Link>

                    <ul className="dropdown">
                        <button className="dropbtn">About Us
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link to='/market'>Market</Link>
                            <Link to='/team'>Team</Link>
                            <Link to='/careers'>Careers</Link>
                        </div>
                    </ul>

                    {this.state.isAdminLoggedIn ? null :
                        <ul className="dropdown">
                            <button className="dropbtn">Administrator
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                {this.state.isAdminLoggedIn ? null :
                                    <div>
                                        <Link to='/admin-login'>Login</Link>
                                    </div>
                                }

                            </div>
                        </ul>}

                    {this.state.isFarmerLoggedIn ? null :
                        <ul className="dropdown">
                            <button className="dropbtn">Farmers
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <Link to='/farmer-login'>Login</Link>
                                <Link to='/farmer-signup'>Sign Up</Link>
                                {/* <Link >Update Product</Link> */}
                                {/* <Link >Delete Product</Link> */}
                            </div>
                        </ul>
                    }


                    {this.state.isCustomerLoggedIn ? null :
                        <ul className="dropdown">
                            <button className="dropbtn">Customers
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <Link to='/customer-login' >Login</Link>
                                <Link to='/customer-signup'>Sign Up</Link>
                                {/* <Link to='/customer-update'>Account Settings</Link> */}
                            </div>
                        </ul>
                    }

                    <ul className="dropdown">
                        <button className="dropbtn">Contact
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <Link to='/contact-email'>Email</Link>
                            <Link to='/contact-phone'>Phone</Link>
                        </div>
                    </ul>

                    <ul className="dropdown">
                        <button className="dropbtn" onClick={this.logout}>Log Out
                            <i className="fa fa-caret-down"></i>
                        </button>
                    </ul>
                </ul>

                    {/* <farmerContext.Consumer>
                        {value=>(
                            <div>
                                {this.farmerLogin(value)}
                            </div>
                        )}
                    </farmerContext.Consumer> */}

                <h2>{this.state.message}</h2>
                <Switch>
                    <Route exact path='/market' component={Market}></Route>
                    <Route exact path='/team' component={Team}></Route>
                    <Route exact path='/careers' component={Careers}></Route>

                    <Route exact path='/admin-login' component={AdminLogin}></Route>
                    <Route exact path='/reset-customer-password/:username' component={AdminResetCustomerPassword}></Route>
                    <Route exact path='/reset-farmer-password/:username' component={AdminResetFarmerPassword}></Route>
                    <Route exact path='/admin-all-transactions' component={AdminAllTransactions}></Route>
                    <Route exact path='/admin-all-transactions-detail/:billNo' component={AdminAllTransactionsDetails}></Route>
                    <Route exact path='/admin-all-users' component={AdminAllUsers}></Route>
                    <Route exact path='/admin-homepage' component={AdminHomePage}></Route>



                    <Route exact path='/customer-login' component={CustomerLogin}></Route>
                    <Route exact path='/customer-signup' component={CustomerSignUp}></Route>
                    <Route exact path='/customer-homepage/:username' component={CustomerHomepage}></Route>
                    <Route exact path='/farmer-products/:id' component={Product} />
                    <Route exact path='/display-cart' component={Cart} />
                    <Route exact path='/show-orders/:username' component={OrderStatus} />
                    <Route exact path='/checkout-page' component={CheckOut} />
                    <Route exact path='/farmers/:username' component={Farmers}></Route>

                    <Route exact path='/payment-page/:username' component={Payment} />
                    <Route exact path='/billing-page/:username' component={Billing} />
                    <Route exact path='/fedback-page/:username' component={FedBack} />

                    <Route exact path='/payment-page/:username' component={Payment} />
                    <Route exact path='/billing-page/:username' component={Billing} />

                    <Route exact path='/customer-update/:username' component={CustomerUpdate}></Route>
                    <Route exact path='/shoppingCart/:username' component={CustomerCart}></Route>




                    <Route exact path='/farmer-login' component={FarmerLogin}></Route>
                    <Route exact path='/farmer-signup' component={FarmerSignUp}></Route>
                    
                    
                    <Route path='/farmer-update/:username' component={FarmerUpdate}></Route>
                    <Route exact path='/farmer-add-product/:username' component={FarmerAddProduct}></Route>
                    <Route exact path='/farmer-homepage/:username' component={FarmerHomePage}></Route>
                    <Route exact path='/farmer-all-product/:username' component={FarmerAllProducts}></Route>
                    <Route exact path='/farmers-delete-product/:username/product/:id' component={FarmerDeleteProduct}></Route>
                    <Route exact path='/farmers-update-product/:username/product/:id' component={FarmerUpdateProduct}></Route>

                    <Route exact path='/contact-email' component={ContactEmail}></Route>
                    <Route exact path='/contact-phone' component={ContactPhone}></Route>



                </Switch>


            </BrowserRouter>
        )
    }
}