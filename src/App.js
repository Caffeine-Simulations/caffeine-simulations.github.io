import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageSlideshow from './components/ImageSlideshow';
import Home from './pages/Home';
import Mods from './pages/Mods';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import './App.css';
import T38C from './pages/T38C';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <ImageSlideshow /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mods" element={<Mods />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/mods/t-38c-talon" element={<T38C />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
