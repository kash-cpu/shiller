import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import CreateCampaign from "./CreateCampaign";
import Campaign from "./Campaign";
import Point from "./Point";

const App = () => {
  const [campaigns, setCampaigns] = useState([]); 
  const [userPoints, setUserPoints] = useState(0); 
  
  const addCampaign = (newCampaign) => {
    setCampaigns([...campaigns, newCampaign]);
    
    setUserPoints(userPoints + 10); 

  const claimRewards = async () => {
    try {
      alert("Claiming your rewards...");
      
      const response = await apiClaimPoints();
      if (response.success) {
        alert("Rewards claimed successfully!");
        
        setUserPoints(0);
      } else {
        alert("Error claiming rewards: " + response.error);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          
          <Route
            path="/create"
            element={<CreateCampaign addCampaign={addCampaign} />}
          />

          <Route
            path="/campaign"
            element={<Campaign campaigns={campaigns} />}
          />

          <Route
            path="/points"
            element={<Point userPoints={userPoints} claimRewards={claimRewards} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

// Simulation for API/Blockchain Call for Claiming Points
const apiClaimPoints = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true }), 2000)
  );
};
}

export default App;
