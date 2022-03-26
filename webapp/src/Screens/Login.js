import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { signin } from '../Actions/userActions';
import ReactDOM from "react-dom";
import database from "../tmpUserInfo";
import LoginService from '../Services/LoginService';

class Signin extends React.Component{

  constructor(props){
    // React States
    super(props)
    this.state = {
        users:[],
        errorMessages: { 
          name: "", 
          message: ""
        },
        isSubmitted: false
    }
  }

  render(){

    const handleSubmit = (event) => {
      //Prevent page reload
      // event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info
      LoginService.getEmail(uname.value).then((response) => {
        console.log(response.data);
        this.setState({ users: response.data})
      });
      //const userData = database.find((user) => user.username === uname.value);
  
      // Compare user info
      if (this.state.users != null) {
        if (this.state.users.password !== pass.value) {
          // Invalid password
          this.setState({errorMessages:{ name: "pass", message: "invalid password" }});
        } else {
          this.setState({isSubmitted: true}); 
        }
      } else {
        // Username not found
        this.setState({errorMessages:{ name: "uname", message: "invalid email" }});
      }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === this.state.errorMessages.name && (
        <div className="error">{this.state.errorMessages.message}</div>
      );

    // JSX code for login form
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Email </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );

    return (
      <div className="signin">
        <div className="login-form">
          <div className="title">Sign In</div>
          {this.state.isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </div>

      
        </div>
        
    );
  }
}
export default SigninScreen;