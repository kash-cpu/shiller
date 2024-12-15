import React from "react";
import PropTypes from "prop-types";

const Campaign = ({ campaigns }) => {
  return (
    <div className="min-h-screen p-4 text-white">
      <h1 className="text-2xl font-bold text-center mb-6">Campaigns</h1>
      {campaigns.length === 0 ? (
        <p className="text-center">No campaigns created yet.</p>
      ) : (
        <div className="space-y-4">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <h2 className="text-lg font-bold">{campaign.tokenName}</h2>
              <p>
                Twitter Handle:{" "}
                <a
                  href={campaign.twitterHandle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400"
                >
                  {campaign.twitterHandle}
                </a>
              </p>
              <p>Total Tokens: {campaign.totalTokens}</p>
              <p>Reward per Shill: {campaign.rewardPerShill}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// PropTypes validation
Campaign.propTypes = {
  campaigns: PropTypes.arrayOf(
    PropTypes.shape({
      tokenName: PropTypes.string.isRequired,
      twitterHandle: PropTypes.string.isRequired,
      totalTokens: PropTypes.number.isRequired,
      rewardPerShill: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Campaign;