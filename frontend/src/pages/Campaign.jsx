import React, { useEffect, useState } from "react";
import { fetchCampaigns } from "../utils/api";

const Campaign = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const loadCampaigns = async () => {
      try {
        const data = await fetchCampaigns();
        setCampaigns(data);
      } catch (error) {
        console.error(error);
        alert("Error fetching campaigns: " + error.message);
      }
    };

    loadCampaigns();
  }, []);

  return (
    <div className="min-h-screen p-4 text-white">
      <h1 className="text-2xl font-bold text-center mb-6">Campaigns</h1>
      {campaigns.length === 0 ? (
        <p className="text-center">No campaigns created yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-lg font-bold mb-2">{campaign.tokenName}</h2>
              <p className="mb-1">Twitter Handle: {campaign.twitterHandle}</p>
              <p className="mb-1">Total Tokens: {campaign.totalTokens}</p>
              <p>Reward per Shill: {campaign.rewardPerShill}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Campaign;
