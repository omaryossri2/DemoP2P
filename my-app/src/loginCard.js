import React from 'react';
import './LoginCard.css';
import CompanyImage from './CompanyLogo.png';
const LoginCard = () => {
  return (
    <div className='LoginPage'>
      <img src= {CompanyImage} className="comp-image" alt=""/>
      <div className="login-card">
        <h2>Login</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
