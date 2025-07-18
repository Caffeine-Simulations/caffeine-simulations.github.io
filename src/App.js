// src/App.js
import React from 'react';
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';

import Navbar    from './components/Navbar';
import Home      from './pages/Home';
import Mods      from './pages/Mods';
import T38C      from './pages/T38C';
import CT4E      from './pages/CT4E';
import News      from './pages/News';
import NewsPage  from './pages/NewsPage';
import AboutUs   from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/"                 element={<Home />} />
          <Route path="/mods"             element={<Mods />} />
          <Route path="/mods/T-38C" element={<T38C />} />
          <Route path="/mods/CT-4E"        element={<CT4E />} />
          <Route path="/news"             element={<News />} />
          <Route path="/news/:slug"       element={<NewsPage />} />
          <Route path="/about-us"         element={<AboutUs />} />
          <Route path="/contact-us"       element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
