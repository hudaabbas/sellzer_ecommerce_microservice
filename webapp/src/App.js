import logo from './logo.svg';
import React from 'react';
import './App.css';
import data from './data';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import RegisterScreen from './Screens/RegisterScreen';
import SigninScreen from './Screens/SigninScreen';
import CartScreen from './Screens/CartScreen';
import ServicesScreen from "./Screens/ServicesScreen";
import ServiceJobScreen from "./Screens/ServiceJobScreen";
import AddProductScreen from "./Screens/AddProductScreen";
import AddServiceScreen from "./Screens/AddServiceScreen";
import PaymentScreen from './Screens/PaymentScreen';
import OrderConfirmationScreen from './Screens/OrderConfirmationScreen'
import LogoutScreen from './Screens/LogoutScreen'
import ProductHomeScreen from "./Screens/ProductHomeScreen";

function App() {
  const openMenu=() =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu=() =>{
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
            <header className="header"> 
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to="/">Sellzers</Link>
                    {/* <a href="index.html"> Sellzers</a> */}
                </div>

                <div className="header-links">
                    {/* <a href="signin">Sign In</a> */}
                    <Link to={"/cart/"+ window.localStorage.getItem('u_code')}>Cart</Link>
                    <Link to="/register">Register</Link>
                    {
                      window.localStorage.getItem('u_code') === null ? 
                        <Link to="/signin">Login</Link>
                        : 
                        <Link to="/logout">Logout</Link>             
                      }
                </div>
            </header> 

            

            <aside className="sidebar">
                <h2 className="menu-title">Categories</h2>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul className="menu">
                    <li className="sidebar-category">
                        <Link to="/product-home/" className="menu-category">Products</Link>
                        {/* <a href="index.html">Products</a> */}
                    </li>

                    <li className="sidebar-category">
                        <Link to="/service-home/" className="menu-category">Services</Link>
                        {/*<a href="index.html">Services</a>*/}
                    </li>
                </ul>
            </aside>


            {/* Note: Currently assume main product page (/product) is same as home screen (/) */}
            <main className="main">
                <div className="content">
                  <Route path="/service-home/" exact= {true} component={ServicesScreen} />
                  <Route path="/service-home/:id" exact= {true} component={ServiceJobScreen} />
                  <Route path="/product-home/" exact= {true} component={ProductHomeScreen} />
                  <Route path="/product-home/:id" exact= {true} component={ProductScreen} />
                  <Route path="/" exact= {true} component={HomeScreen}/>
                  <Route path="/cart/:id" component={CartScreen}/>
                  <Route path="/signin" component={SigninScreen}/>
                  <Route path="/register" component={RegisterScreen} />
                  <Route path="/add-product/" exact= {true} component={AddProductScreen} />
                  <Route path="/add-service" exact= {true} component={AddServiceScreen} />
                  <Route path="/payment/:id" component={PaymentScreen} />
                  <Route path="/confirmation/:id" component={OrderConfirmationScreen} />
                  <Route path="/logout" exact={true} component={LogoutScreen} />
                </div>
            </main>

            <footer className="footer"> All rights reserved.</footer>
        </div>
     </BrowserRouter>
  );
}

export default App;
