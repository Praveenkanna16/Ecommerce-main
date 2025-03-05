const mongoose = require('mongoose');
// require('dotenv').config({
//     path:"../Config/.env"
// }); // Load .env from the root directory

// const url = process.env.MONGODB;


// if (!url) {
//     console.error("❌ ERROR: MongoDB URL is undefined! Check your .env file.");
//     process.exit(1);
// }

const connectDB = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ MongoDB connected successfully');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;