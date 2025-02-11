const express = require('express');
const app = express();
const connectDB = require('./src/Database/db'); // Import DB connection function

require('dotenv').config({
    path: './src/Config/.env'  // Ensure this path is correct
});

// Use PORT and DB_URL from .env
const port = process.env.PORT || 3000;  // Ensure variable name matches .env
const url = process.env.DB_URL;  // Ensure variable name matches .env

// Connect to MongoDB before starting the server
const startServer = async () => {
    try {
        await connectDB(url);
        console.log('✅ Database connected successfully.');

        app.get('/', (req, res) => {
            res.json({ status: 'Connected' });
        });

        app.listen(port, () => {
            console.log(` Server is running on port ${port}`);
        });
    } catch (error) {
        console.error(' Database connection failed:', error);
        process.exit(1); // Exit process if DB connection fails
    }
};

startServer();