import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DigitalMarketing from './digital-marketing/DigitalMarketing';
import AiTools from './ai-tools/AiTools';
import ContentCreator from './content-creator/ContentCreator';
import FullstackDevelopment from './fullstack-developer/FullstackDevelopment';
import DataAnalytics from './data-analytics/DataAnalytics';
import WordpressPro from './wordpress-pro/WordpressPro';
import AiMarketingAgency from './ai-marketing-agency/AiMarketingAgency';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/ai-tools" element={<AiTools />} />
        <Route path="/ai-tools-mastery" element={<AiTools />} />
        <Route path="/content-creator" element={<ContentCreator />} />
        <Route path="/fullstack-development" element={<FullstackDevelopment />} />
        <Route path="/fullstack-developer" element={<FullstackDevelopment />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/wordpress-pro" element={<WordpressPro />} />
        <Route path="/ai-marketing-agency" element={<AiMarketingAgency />} />
      </Routes>
    </Router>
  );
}

export default App;
