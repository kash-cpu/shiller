const express = require("express");
const { TwitterApi } = require("twitter-api-v2");
const router = express.Router();

// Set up Twitter client with your credentials
const twitterClient = new TwitterApi({
  appKey: "YOUR_APP_KEY",
  appSecret: "YOUR_APP_SECRET",
  accessToken: "YOUR_ACCESS_TOKEN",
  accessSecret: "YOUR_ACCESS_SECRET",
});

// Verify Tweet Endpoint
router.post("/verify-tweet", async (req, res) => {
  const { tweetLink, campaignHashtag, campaignTwitterHandle } = req.body;

  try {
    // Extract the Tweet ID from the link
    const tweetId = new URL(tweetLink).pathname.split("/").pop();

    // Fetch the Tweet details
    const tweet = await twitterClient.v2.singleTweet(tweetId);

    // Check if the Tweet contains the required hashtag or handle
    const text = tweet.data.text.toLowerCase();
    const hasHashtag = text.includes(campaignHashtag.toLowerCase());
    const hasHandle = text.includes(campaignTwitterHandle.toLowerCase());

    if (hasHashtag || hasHandle) {
      return res.status(200).json({ success: true, message: "Tweet verified successfully!" });
    }

    res.status(400).json({ success: false, message: "Tweet does not meet campaign requirements." });
  } catch (error) {
    console.error("Error verifying tweet:", error);
    res.status(500).json({ success: false, message: "Failed to verify tweet." });
  }
});

module.exports = router;
