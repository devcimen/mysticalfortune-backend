import express from 'express';
import dotenv from 'dotenv';
import firebaseApp from './config/firebase.js';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';

// Load config
dotenv.config();

// Initialize express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/test', (req, res) => {
    res.send('API is running and Firebase is connected...');
});
// Auth routes
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});