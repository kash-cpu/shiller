import { API_BASE_URL } from "../config";

// Fetch all campaigns
export const fetchCampaigns = async () => {
  const response = await fetch(`${API_BASE_URL}/campaigns`);
  if (!response.ok) {
    throw new Error("Failed to fetch campaigns");
  }
  return response.json();
};

// Create a new campaign
export const createCampaign = async (campaignData) => {
  const response = await fetch(`${API_BASE_URL}/campaigns`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(campaignData),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to create campaign");
  }
  return response.json();
};

// Fetch or create user points
export const fetchUserPoints = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch user points");
  }
  return response.json();
};

// Update user points
export const updateUserPoints = async (userId, pointsToAdd) => {
  const response = await fetch(`${API_BASE_URL}/user/points`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, pointsToAdd }),
  });
  if (!response.ok) {
    throw new Error("Failed to update points");
  }
  return response.json();
};

// Claim rewards
export const claimRewards = async (userId, pointsToDeduct) => {
  const response = await fetch(`${API_BASE_URL}/user/claim`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, pointsToDeduct }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Failed to claim rewards");
  }
  return data;
};
