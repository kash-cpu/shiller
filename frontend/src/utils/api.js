const BACKEND_URL = "http://localhost:3000"; // Replace with your backend URL

export async function createCampaign({
  tokenName,
  twitterHandle,
  totalTokens,
  rewardPerShill,
}) {
  const response = await fetch(`${BACKEND_URL}/create-campaign`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: tokenName,
      twitterHandle,
      totalTokens: parseInt(totalTokens),
      rewardPerShill: parseInt(rewardPerShill),
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to create campaign");
  }

  return response.json();
}

export async function fetchCampaigns() {
  const response = await fetch(`${BACKEND_URL}/campaigns`);
  if (!response.ok) {
    throw new Error("Failed to fetch campaigns");
  }
  return response.json();
}
