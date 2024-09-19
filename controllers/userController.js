import { getUserFromFirestore, updateUserBalanceInFirestore } from '../models/userModel.js';

// Get user balance
export const getUserBalance = async (req, res) => {
    const { uid } = req.params;
    try {
        const user = await getUserFromFirestore(uid);
        if (user) {
            res.status(200).json({ balance: user.balance });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update user balance after a game
export const updateUserBalance = async (req, res) => {
    const { uid } = req.params;
    const { newBalance } = req.body;

    try {
        await updateUserBalanceInFirestore(uid, newBalance);
        res.status(200).json({ message: "Balance updated successfully", newBalance });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
