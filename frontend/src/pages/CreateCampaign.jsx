import React, { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";

// Campaign Context
const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);

  const addCampaign = (campaign) => {
    setCampaigns((prevCampaigns) => [...prevCampaigns, campaign]);
  };

  return (
    <CampaignContext.Provider value={{ campaigns, addCampaign }}>
      {children}
    </CampaignContext.Provider>
  );
};

export const useCampaigns = () => useContext(CampaignContext);

// Create Campaign Component
const CreateCampaign = () => {
  const { addCampaign } = useCampaigns();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tokenName: "",
    twitterHandle: "",
    totalTokens: "",
    rewardPerShill: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      alert("Please connect your wallet to continue.");
      // Simulate Wallet Connection
      const transactionResult = await connectWalletAndPay();
      if (transactionResult.success) {
        addCampaign(formData); // Add the new campaign to the global state
        alert("Campaign created successfully!");
        navigate("/campaign"); // Redirect to Campaign Page
      }
    } catch (error) {
      alert("Error creating campaign: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="w-full max-w-lg bg-blue-400 rounded-lg shadow-md p-6 mx-4 md:mx-20">
        <h1 className="text-2xl font-bold mb-4 text-center">Create a Shill Campaign</h1>
        <div className="space-y-4">
          <input
            type="text"
            name="tokenName"
            placeholder="Token Name"
            value={formData.tokenName}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="url"
            name="twitterHandle"
            placeholder="Twitter Handle Link"
            value={formData.twitterHandle}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="number"
            name="totalTokens"
            placeholder="Total Tokens"
            value={formData.totalTokens}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="number"
            name="rewardPerShill"
            placeholder="Reward Per Shill"
            value={formData.rewardPerShill}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

// Campaign List Page
export const CampaignPage = () => {
  const { campaigns } = useCampaigns();

  return (
    <div className="min-h-screen p-6 text-white bg-gray-800">
      <h1 className="text-2xl font-bold mb-4">Campaigns</h1>
      {campaigns.length === 0 ? (
        <p>No campaigns available.</p>
      ) : (
        <ul className="space-y-4">
          {campaigns.map((campaign, index) => (
            <li
              key={index}
              className="bg-gray-700 p-4 rounded-lg shadow-md border border-gray-600"
            >
              <p><strong>Token Name:</strong> {campaign.tokenName}</p>
              <p><strong>Twitter Handle:</strong> {campaign.twitterHandle}</p>
              <p><strong>Total Tokens:</strong> {campaign.totalTokens}</p>
              <p><strong>Reward Per Shill:</strong> {campaign.rewardPerShill}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Mock Wallet Connection and Payment Function
const connectWalletAndPay = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ success: true }), 2000)
  );
};

export default CreateCampaign;
