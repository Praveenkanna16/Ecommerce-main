require('dotenv').config(); // Load environment variables first

const express = require('express');
const app = express();
const connectDB = require('./src/Database/db'); // Import DB connection function

// Import Routes
const cartRoutes = require('./src/Routes/cartRoutes');  

// Middleware to parse JSON requests
app.use(express.json());

const port = process.env.PORT || 3000;  
const dbURL = process.env.DB_URL;  

const startServer = async () => {
    try {
        await connectDB(dbURL);
        console.log('✅ Database connected successfully.');

        app.get('/', (req, res) => {
            res.json({ status: 'Connected' });
        });

        // Use the cart routes
        app.use('/api/cart', cartRoutes);

        app.listen(port, () => {
            console.log(`🚀 Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        process.exit(1); // Exit process if DB connection fails
    }
};

startServer();