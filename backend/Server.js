import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import connectDB from './src/Database/db';
import cartRoutes from './src/Routes/cartRoutes';
import userRoutes from './src/Routes/userRoutes';
import addressRoutes from './src/Routes/addressRoutes';
import orderRoutes from './src/Routes/orderRoutes';

dotenv.config({ path: './src/Config/.env' });

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());

const port = process.env.port || 3000;
const dbURL = process.env.MONGODB_URI;
const secret = process.env.SECRET;

const startServer = async () => {
    try {
        await connectDB(dbURL);
        console.log('Database connected successfully.');

        app.get('/', (req, res) => {
            res.json({ status: 'Connected' });
        });

        app.post('/api/token', (req, res) => {
            const { email } = req.body;
            const user = { email };
            const accessToken = jwt.sign(user, secret, { expiresIn: '1h' });
            res.cookie('token', accessToken, { httpOnly: true, sameSite: 'strict' });
            res.json({ accessToken });
        });

        app.use('/api/cart', cartRoutes);
        app.use('/api/user', userRoutes);
        app.use('/api/address', addressRoutes);
        app.use('/api/order', orderRoutes);

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

startServer();

