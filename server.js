import express from 'express';
import dotenv from 'dotenv';
import firebaseApp from './config/firebase.js';

// Load config
dotenv.config();

// Initialize express
const app = express();
const PORT = process.env.PORT || 5000;

// Routes
app.get('/test', (req, res) => {
    res.send('API is running and Firebase is connected...');
});

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});