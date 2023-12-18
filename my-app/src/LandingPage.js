import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import LoginCard from './loginCard'; 
import SignUpCard from './SignUpCard'; 
import CompanyImage from './CompanyLogo.jpeg';

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Welcome Message */}
      <div className="welcome-message">
        <h1>Welcome to IG Books</h1>
        <p>A student-to-student / parent-to-parent marketplace to sell and buy books.</p>
      </div>
    <LoginCard/>
    <div className='register-statment'>
        <p>if you don't have an account </p>
        <p className="register-link">create a new account</p>
        <p className="register-link">
          <Link to="/sign-up">Create a new account</Link>
        </p>    
    </div>
    </div>
  );
}

export default LandingPage;
