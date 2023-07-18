import React from "react";
import { Component } from "react";
import "./Login.css";


class Login extends Component {
  render() {
    return (
      <body className="Login">
        <a>
          <h1>Sign In With Steam</h1>
        </a>
        <form>
          <label for="fname">First name:</label><br/>
          <input type="text" id="fname" name="fname"/><br/>
          <label for="lname">Last name:</label><br/>
          <input type="text" id="lname" name="lname"/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </body>
    );
  }
}
  
  export default Login;