import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { API_BASE_URL } from "../config";

// Create Context
const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [userPoints, setUserPoints] = useState(0);
  const userId = "user123"; // Replace with real user ID from auth

  // Fetch campaigns
  const fetchCampaigns = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/campaigns`);
      if (!response.ok) throw new Error("Failed to fetch campaigns");
      const data = await response.json();
      setCampaigns(data);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
  };

  // Add a new campaign
  const addCampaign = async (newCampaign) => {
    try {
      const response = await fetch(`${API_BASE_URL}/campaigns`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCampaign),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to create campaign");
      }

      alert("Campaign created successfully!");
      fetchCampaigns(); // Refresh campaigns
    } catch (error) {
      console.error("Error creating campaign:", error);
      alert("Error creating campaign: " + error.message);
    }
  };

  // Fetch user points
  const fetchUserPoints = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      if (!response.ok) throw new Error("Failed to fetch user points");
      const data = await response.json();
      setUserPoints(data.points);
    } catch (error) {
      console.error("Error fetching user points:", error);
    }
  };

  // Claim rewards
  const claimRewards = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/claim`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, pointsToDeduct: 100 }),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to claim rewards");
      }

      const data = await response.json();
      alert("Rewards claimed successfully!");
      setUserPoints(data.points);
    } catch (error) {
      console.error("Error claiming rewards:", error);
      alert("Error claiming rewards: " + error.message);
    }
  };

  // Fetch campaigns and user points on load
  useEffect(() => {
    fetchCampaigns();
    fetchUserPoints();
  }, []);

  return (
    <CampaignContext.Provider
      value={{ campaigns, addCampaign, userPoints, claimRewards }}
    >
      {children}
    </CampaignContext.Provider>
  );
};

// PropTypes for CampaignProvider
CampaignProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom Hook to use Campaign Context
export const useCampaigns = () => {
  return useContext(CampaignContext);
};
