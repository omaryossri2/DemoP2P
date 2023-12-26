// App.js or Routes.js
import ReactDOM from "react-dom/client";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import SignUpCard from './pages/SignUpCard';
import NewListingPage from "./pages/NewListingPage";
import ViewListings from "./pages/ViewListings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/register" element={<SignUpCard/>}/>
          <Route path="/viewListings" element={<ViewListings/>}/>
          <Route path="/newListing" element={<NewListingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
