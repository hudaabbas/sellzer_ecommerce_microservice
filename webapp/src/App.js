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

function App() {
  const openMenu=() =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu=() =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  /*

  */
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
                    <Link to="/sigin">Sign In</Link>
                    <Link to="/cart">Cart</Link>
                    {/* <a href="cart.html">Cart</a> */}
                </div>
            </header> 

            <aside className="sidebar">
                <h3>Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                <ul>
                    <li>
                
                        {/* <a href="index.html">Products</a> */}
                    </li>

                    <li>
                        <a href="index.html">Services</a>
                    </li>
                </ul>
            </aside>

            <main className="main">
                <div className="content">
                  <Route path="/product/:id" component={ProductScreen} />
                  <Route path="/" exact= {true} component={HomeScreen}/>
                  <Route path="/cart" component={CartScreen}/>
                  {/* <Route path="/signin" component={SigninScreen} />
                  <Route path="/register" component={RegisterScreen} /> */}
                   {/* Can put products from HomeScreen here */}
                </div>
            </main>

            <footer className="footer"> All rights reserved.</footer>
        </div>
     </BrowserRouter>
  );
}

export default App;
