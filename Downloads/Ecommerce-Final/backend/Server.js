const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./src/database/db");
const userRouter = require("./src/controllers/user");

dotenv.config({
    path: "./src/config/.env", 
});

app.use(express.json());

const PORT = process.env.PORT || 3000;
//const PORT = 3000;
const DB_URL = process.env.DB_URL;


app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.use("/api/users", userRouter);


app.listen(PORT, async () => {
    try {
        await connectDB(DB_URL);
        console.log(`Server is running on port ${PORT}`);
    } catch (err) {
        console.error("Failed to connect to the database:", err);
    }
});