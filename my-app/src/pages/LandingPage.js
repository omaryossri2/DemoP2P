import React from 'react';
import './style/LandingPage.css';
import { Link } from 'react-router-dom';
import LoginCard from './loginCard'; 

function LandingPage() {
  return (
    <div className="landing-page">
      <LoginCard/>
      <p className='register-statment'>if you don't have an account </p>
      <Link className='register-link'to="/register">Create a new account</Link>
    </div>
  );
}

export default LandingPage;
