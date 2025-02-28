const { Router } = require("express");
const userModel = require("../Model/userModel");

const userRouter = Router();

userRouter.get("/profile/:email", async (req, res) => {
    try {
        const { email } = req.params;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            name: user.name,
            email: user.email,
            profilePhoto: user.profilePhoto || "default-avatar.png",
            addresses: user.addresses || [],
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = userRouter;