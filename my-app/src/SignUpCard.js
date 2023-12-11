import React from 'react';
import './SignUpCard.css';

const SignUpCard = () => {
  return (
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
  );
};

export default SignUpCard;
