// App.js or Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignUpCard from './SignUpCard';
import LoginCard from './loginCard';

function App() {
  return (
    <LoginCard/>
    );
}

export default App;
