import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Project from './pages/Projects/Project';
import Footer from './Components/Footer';
import Donation from './pages/Donation';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
   
   
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/projects" exact element={<Project />} />
          <Route path="/Donate" exact element={<Donation/>} />
          <Route path="/Login" exact element={<Donation/>} />
          <Route path="/Donate Now" exact element={<Donation/>} />
          <Route path="/Sign Up" exact element={<Donation/>} />

        </Routes>
        <Footer/>
     </Router>
  
    </div>
   );
}

export default App;
