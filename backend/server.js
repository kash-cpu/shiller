const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/shill-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// MongoDB Schemas
const campaignSchema = new mongoose.Schema({
  tokenName: String,
  twitterHandle: String,
  totalTokens: Number,
  rewardPerShill: Number,
});

const userSchema = new mongoose.Schema({
  userId: String, 
  points: { type: Number, default: 0 }, 
});

// MongoDB Models
const Campaign = mongoose.model("Campaign", campaignSchema);
const User = mongoose.model("User", userSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Shill backend is running");
});

// Create a new campaign
app.post("/api/campaigns", async (req, res) => {
  try {
    const { tokenName, twitterHandle, totalTokens, rewardPerShill } = req.body;

    // Validate input
    if (!tokenName || !twitterHandle || !totalTokens || !rewardPerShill) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newCampaign = new Campaign({
      tokenName,
      twitterHandle,
      totalTokens,
      rewardPerShill,
    });

    await newCampaign.save();
    res.status(201).json({ message: "Campaign created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create campaign" });
  }
});

// Get all campaigns
app.get("/api/campaigns", async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch campaigns" });
  }
});

// Get or create user points
app.post("/api/user", async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    let user = await User.findOne({ userId });

    if (!user) {
      user = new User({ userId });
      await user.save();
    }

    res.status(200).json({ points: user.points });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch or create user" });
  }
});

// Update user points (e.g., after completing a shilling task)
app.post("/api/user/points", async (req, res) => {
  try {
    const { userId, pointsToAdd } = req.body;

    if (!userId || !pointsToAdd) {
      return res.status(400).json({ error: "User ID and points to add are required" });
    }

    const user = await User.findOneAndUpdate(
      { userId },
      { $inc: { points: pointsToAdd } },
      { new: true, upsert: true }
    );

    res.status(200).json({ points: user.points });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update points" });
  }
});

// Claim rewards
app.post("/api/user/claim", async (req, res) => {
  try {
    const { userId, pointsToDeduct } = req.body;

    if (!userId || !pointsToDeduct) {
      return res.status(400).json({ error: "User ID and points to deduct are required" });
    }

    const user = await User.findOne({ userId });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.points < pointsToDeduct) {
      return res.status(400).json({ error: "Not enough points to claim rewards" });
    }

    user.points -= pointsToDeduct;
    await user.save();

    res.status(200).json({ message: "Rewards claimed successfully", points: user.points });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to claim rewards" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Backend server running on port 3000");
});
