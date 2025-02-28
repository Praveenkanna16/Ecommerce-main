const express = require('express');
const cors = require('cors'); // Import CORS
require('dotenv').config();

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true })); // Allow requests from frontend
app.use(express.json());

const connectDB = require('./src/Database/db');
const cartRoutes = require('./src/Routes/cartRoutes');
const userRoutes = require('./src/Routes/userRoutes');

const port = process.env.PORT || 5000;
const dbURL = process.env.DB_URL;

const startServer = async () => {
    try {
        await connectDB(dbURL);
        console.log('✅ Database connected successfully.');

        app.get('/', (req, res) => {
            res.json({ status: 'Connected' });
        });

        // Use routes
        app.use('/api/cart', cartRoutes);
        app.use('/api/user', userRoutes);

        app.listen(port, () => {
            console.log(`🚀 Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
        process.exit(1);
    }
};

startServer();