import express from 'express';
import { playGame } from '../controllers/gameController.js';
import { protectRoute } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to play the game
router.post('/play', protectRoute, playGame);

export default router;
