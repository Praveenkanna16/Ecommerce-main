const express = require("express");
const router = express.Router();
const User = require("../Model/userModel");
router.get("/addresses/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({ addresses: user.addresses });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;