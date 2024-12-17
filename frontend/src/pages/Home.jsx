import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchCampaigns } from "../utils/api";

const Home = ({ onPointsUpdate }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [tweetLink, setTweetLink] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  // Fetch campaigns on load
  useEffect(() => {
    const loadCampaigns = async () => {
      try {
        const data = await fetchCampaigns();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        setStatusMessage("Failed to load live campaigns. Please try again.");
      }
    };

    loadCampaigns();
  }, []);

  // Verify the tweet using the backend
  const verifyTweet = async () => {
    try {
      if (!tweetLink.includes("twitter.com")) {
        setStatusMessage("Invalid tweet link. Please provide a valid link.");
        return;
      }

      // Fetch campaign details for verification
      const campaign = campaigns[0]; // Example: Use the first campaign
      if (!campaign) {
        setStatusMessage("No active campaigns available for verification.");
        return;
      }

      const response = await fetch("/api/verify-tweet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tweetLink,
          campaignHashtag: campaign.hashtag,
          campaignTwitterHandle: campaign.twitterHandle,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage(result.message);
        onPointsUpdate(10); // Update user points
      } else {
        setStatusMessage(result.message);
      }
    } catch (error) {
      console.error("Error verifying tweet:", error);
      setStatusMessage("Failed to verify tweet. Please try again.");
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* Live Campaigns Section */}
      <div className="p-2 relative z-0 mb-10">
        <h1 className="text-2xl font-bold mb-4">Live Campaigns</h1>
        {campaigns.length > 0 ? (
          <Slider {...settings} className="relative z-10">
            {campaigns.map((campaign, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-20 bg-blue-400 shadow-md p-4"
              >
                <div className="text-center">
                  <h2 className="text-xl font-semibold">{campaign.tokenName}</h2>
                  <p className="text-xl">{campaign.totalTokens}</p>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-gray-400 text-center mt-4">
            No live campaigns at the moment.
          </p>
        )}
      </div>

      {/* Tweet Verification Section */}
      <h2 className="flex justify-center text-2xl font-bold mb-2 mt-6">
        Shill and Earn
      </h2>
      <p className="flex justify-center m-2 items-center text-center">
        Make a positive tweet about this token or leave a supportive comment on
        crypto-related tweets.
      </p>
      <p className="flex justify-center mt-2 mb-4">
        Don’t forget to follow and tag the Twitter handle on your tweets.
      </p>
      <div className="shadow-lg p-10 bg-blue-400 mb-20 mx-4 md:mx-20 rounded-lg">
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Copy and paste your tweet or comment link here"
            value={tweetLink}
            onChange={(e) => setTweetLink(e.target.value)}
            className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={verifyTweet}
            className="px-6 py-2 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition duration-200 focus:outline-none"
          >
            Verify
          </button>
          {statusMessage && <p className="text-white font-medium">{statusMessage}</p>}
        </div>
      </div>
    </>
  );
};

// PropTypes validation
Home.propTypes = {
  onPointsUpdate: PropTypes.func.isRequired,
};

export default Home;
