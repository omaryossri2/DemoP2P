// SignUpCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./style/SignUpCard.css";
import CompanyImage from "../resources/CompanyLogo.jpeg";

const SignUpCard = () => {
  return (
    <div className="SignUpPage">
      <img src={CompanyImage} className="comp-image2" alt="" />
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          {/* Use Link to navigate to the ViewListings page */}
          <Link to="/viewListings">
            <button className="submit-button" type="submit">Sign Up</button>
          </Link>
        </form>
      </div>
      <div>
        <p className="login-statment">If you have an account </p>
        <Link className="login-link" to="/">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUpCard;
