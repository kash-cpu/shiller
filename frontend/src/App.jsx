import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Point from "./pages/Point";
import About from "./pages/About";
import Footer from "./components/Footer";
import CreateCampaign from "./pages/CreateCampaign"; 
import Campaign from "./pages/Campaign"; 
import { CampaignProvider, useCampaigns } from "./context/CampaignContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const App = () => {
  return (
    <CampaignProvider>
      <div className="overflow-x-hidden">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/points" element={<Point />} />
            <Route path="/create" element={<CreateCampaign />} />
            <Route path="/about" element={<About />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </CampaignProvider>
  );
};

export default App;
