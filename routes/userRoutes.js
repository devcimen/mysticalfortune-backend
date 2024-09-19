import express from 'express';
import { getUserBalance, updateUserBalance } from '../controllers/userController.js';

const router = express.Router();

// Get user balance
router.get('/:uid/balance', getUserBalance);

// Update user balance
router.put('/:uid/balance', updateUserBalance);

export default router;