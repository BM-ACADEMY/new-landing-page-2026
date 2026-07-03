import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DigitalMarketing from './digital-marketing/DigitalMarketing';
import AiTools from './ai-tools/AiTools';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/ai-tools" element={<AiTools />} />
        <Route path="/ai-tools-mastery" element={<AiTools />} />
      </Routes>
    </Router>
  );
}

export default App;
