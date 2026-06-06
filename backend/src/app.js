import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import { errorHandler } from './middleware/globalErrorHandler.js';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.route.js'

const app = express();

app.use(cors());
app.use(express.json());
await connectDB();
app.use(errorHandler);

app.use('/api/auth',authRoutes);


export default app;