import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { signin } from '../Actions/userActions';
import ReactDOM from "react-dom";
import database from "../tmpUserInfo";

function SigninScreen(){
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    // event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>

        <div className="input-container">
          <label>Email</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
         {/* <div className="input-container">
          <label>Payment Information (Optional- Can get rid of it) </label>
          <input type="number" name="pass" required />
          /* {renderErrorMessage("pass")} 
        </div>  */}

        <div className="input-container">
          <label>Subsidized? </label>
          <input type="checkbox" name="subsidized" required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        {/* <div className='back-2-result'>
        <Link to="/">New to Sellzers?</Link>
        </div> */}
       {/* <Link to="/">Back to results</Link> <Link to="/"/> */}
       
      </form>
      
    </div>
  );

  return (
    <div className="signin">
      <div className="login-form">
        <div className="title">Sign Up</div>
        {isSubmitted ? <div>User is successfully registered</div> : renderForm}
      </div>

     
      </div>
      
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SigninScreen />, rootElement);
export default SigninScreen;