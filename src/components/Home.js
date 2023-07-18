import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <body>
      <div id="home">
        <a className="welcomeText">
          <h1>Welcome to ARK: Survival Evolved</h1>

          <p>Website description goes here...</p>
        </a>
        <br />
        <br />
        <a>
          <li className="loginbutton">
            <Link to="/Login">Log In With Steam</Link>
          </li>
        </a>
      </div>
    </body>
  );
}

export default Home;
