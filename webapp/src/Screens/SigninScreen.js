import React, { Component } from 'react';
import {Redirect, Link, router } from 'react-router-dom';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './../Login.css';
import LoginService from '../Services/LoginService';
import axios from 'axios';

class SigninScreen extends React.Component {

constructor(props) {
  super(props);
  this.state={
    email: '',
    password:'',
    errors: {},
    users: []
  }
  this.handleChangeEmail = this.handleChangeEmail.bind(this);
  this.handleChangePassword = this.handleChangePassword.bind(this);
  this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
}

handleChangeEmail(e) {
  this.setState({email:e.target.value});
}

handleChangePassword(e) {
  this.setState({password:e.target.value});
}

submituserRegistrationForm(e) {
  e.preventDefault();
  if (this.validateForm()) {
    var data={
      "user_email":this.state.email,
      "password":this.state.password
    }
    console.log(data);
    LoginService.getEmail(this.state.email).then((response) => {
      console.log(response.data);
      this.setState({
        users: response.data
      });
      if(response.data.password == this.state.password){
        localStorage.setItem("u_code", response.data.loginId);
        localStorage.setItem('is_done', true);
        window.location.href = "/";
        console.log("Login successfull");
      }else{
        alert("Please try again!"); // response.data.message);
      }
    }).catch(function (error) {
      console.log(error);
    });

    console.log(this.state);
  }
}

validateForm() {
  let errors = {};
  let formIsValid = true;
  if (!this.state.email) {
    formIsValid = false;
    errors["email"] = "Please enter your email-ID.";
  }

  if (typeof this.state.email !== "undefined") {
    //regular expression for email validation
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(this.state.email)) {
    formIsValid = false;
    errors["email"] = "Please enter valid email-ID.";
    }

  }

  if (!this.state.password) {
    formIsValid = false;
    errors["password"] = "Please enter your password.";
  } 

  this.setState({
    errors: errors
  });

  return formIsValid;
}

render() {
  return (
    <div>
      <div className="heading">Sign In</div>
      <div className="form">
        <Form method="post" name="userRegistrationForm" onSubmit= {this.submituserRegistrationForm} >
          <FormGroup>
            <div className="input-container">
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Email" />
              <div className="errorMsg">{this.state.errors.email}</div>
            </div>
          </FormGroup>
          <FormGroup>
            <div className="input-container">
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.handleChangePassword} placeholder="Password" />
            <div className="errorMsg">{this.state.errors.password}</div>
            </div>
          </FormGroup>
          <FormGroup check>
            <div className="input-container">
            <Label check>
              <Input type="checkbox" />{' '}
              Remember Me
            </Label>
            </div>
          </FormGroup>
          <div className="d-flex justify-content-center mt-3 login_container">
            <Button type="submit" className="btn btn-login">Submit</Button>
          </div>
          <div className="input-container">
            <div className="d-flex justify-content-center links">
              Don't have an account? <Link href="/register" to="/register" className="linka">Sign Up</Link>
            </div>
            {/* <div className="d-flex justify-content-center links">
              <a className="linka">Forgot your password?</a>
            </div> */}
          </div>
        </Form>
      </div> 
    </div>
    ) 
  }
}
export default SigninScreen;