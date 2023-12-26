// LoginCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './style/LoginCard.css';
import CompanyImage from '../resources/CompanyLogo.jpeg';

const LoginCard = () => {
  return (
    <div className='LoginPage'>
      <img src={CompanyImage} className="comp-image" alt="" />
      <div className="login-card">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          {/* Use Link to navigate to the ViewListings page */}
          <Link to="/viewListings">
            <button className="submit-button" type="submit">Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
