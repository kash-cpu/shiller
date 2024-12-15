import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Point from './pages/Point';
import About from './pages/About';
import Footer from './components/Footer';
import CreateCampaign from './pages/Create';
import Campaign from './pages/Campaign';
import { CampaignProvider } from './pages/CreateCampaign';

const App = () => {
  return (
    <CampaignProvider>
      {/* Wrap the entire app within CampaignProvider */}
      <div className="overflow-x-hidden">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Point" element={<Point />} />
            <Route path="/Create" element={<CreateCampaign />} />
            <Route path="/About" element={<About />} />
            <Route path="/Campaign" element={<Campaign />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CampaignProvider>
  );
};

export default App;
