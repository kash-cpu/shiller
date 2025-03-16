const BACKEND_URL = "http://localhost:3000"; // Replace with your backend URL

export async function createCampaign(name, totalTokens, rewardPerShill) {
  const response = await fetch(`${BACKEND_URL}/create-campaign`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, totalTokens, rewardPerShill }),
  });
  return response.json();
}

export async function getCampaign(name) {
  const response = await fetch(`${BACKEND_URL}/get-campaign?name=${name}`);
  return response.json();
}

export async function claimReward(name, amount) {
  const response = await fetch(`${BACKEND_URL}/claim-reward`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, amount }),
  });
  return response.json();
}
