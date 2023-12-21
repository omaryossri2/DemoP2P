import React from 'react';
import './style/SignUpCard.css';
import { Link } from 'react-router-dom';
import CompanyImage from '../resources/CompanyLogo.jpeg';
const SignUpCard = () => {
  return (
    <div className="SignUpPage">
      <img src= {CompanyImage} className="comp-image" alt=""/>
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

          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div>
        <p className='login-statment'>if you have an account </p>
        <Link className="login-link" to="/">Login</Link>
    </div>
    </div>
  );
};

export default SignUpCard;
