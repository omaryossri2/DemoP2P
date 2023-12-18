import React from 'react';
import './SignUpCard.css';
import CompanyImage from './CompanyLogo.jpeg';
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
    </div>
  );
};

export default SignUpCard;
