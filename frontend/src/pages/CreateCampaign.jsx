import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCampaign } from "../utils/api";

const CreateCampaign = () => {
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
      await createCampaign(formData);
      alert("Campaign created successfully!");
      navigate("/campaign");
    } catch (error) {
      console.error(error);
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

export default CreateCampaign;
