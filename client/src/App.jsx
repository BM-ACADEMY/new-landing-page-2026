import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DigitalMarketing from './digital-marketing/DigitalMarketing';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
      </Routes>
    </Router>
  );
}

export default App;
