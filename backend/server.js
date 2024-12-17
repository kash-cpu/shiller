const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const verifyTweetRouter = require("./routes/verifyTweet"); // Import the verifyTweet router

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/shill-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// MongoDB Schemas
const campaignSchema = new mongoose.Schema({
  tokenName: { type: String, required: true },
  twitterHandle: { type: String, required: true },
  totalTokens: { type: Number, required: true },
  rewardPerShill: { type: Number, required: true },
});

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  points: { type: Number, default: 0 },
});

// MongoDB Models
const Campaign = mongoose.model("Campaign", campaignSchema);
const User = mongoose.model("User", userSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Shill backend is running");
});

// Campaign Routes
app.post("/api/campaigns", async (req, res) => {
  try {
    const { tokenName, twitterHandle, totalTokens, rewardPerShill } = req.body;

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
    console.error("Error creating campaign:", err);
    res.status(500).json({ error: "Failed to create campaign" });
  }
});

app.get("/api/campaigns", async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (err) {
    console.error("Error fetching campaigns:", err);
    res.status(500).json({ error: "Failed to fetch campaigns" });
  }
});

// User Routes
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
    console.error("Error fetching or creating user:", err);
    res.status(500).json({ error: "Failed to fetch or create user" });
  }
});

app.post("/api/user/points", async (req, res) => {
  try {
    const { userId, pointsToAdd } = req.body;

    if (!userId || typeof pointsToAdd !== "number") {
      return res.status(400).json({ error: "Invalid user ID or points to add" });
    }

    const user = await User.findOneAndUpdate(
      { userId },
      { $inc: { points: pointsToAdd } },
      { new: true, upsert: true }
    );

    res.status(200).json({ points: user.points });
  } catch (err) {
    console.error("Error updating user points:", err);
    res.status(500).json({ error: "Failed to update points" });
  }
});

app.post("/api/user/claim", async (req, res) => {
  try {
    const { userId, pointsToDeduct } = req.body;

    if (!userId || typeof pointsToDeduct !== "number") {
      return res.status(400).json({ error: "Invalid user ID or points to deduct" });
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
    console.error("Error claiming rewards:", err);
    res.status(500).json({ error: "Failed to claim rewards" });
  }
});

// Twitter Verify Routes
app.use("/api", verifyTweetRouter); // Use the verifyTweet router for /api/verify-tweet

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
