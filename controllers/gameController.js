import { reels, paylines, getJackpot, setJackpot, symbolMultipliers } from '../models/gameModel.js';
import { getUserFromFirestore, updateUserBalanceInFirestore } from '../models/userModel.js';

// Helper function to get a random symbol from each reel
const spinReels = () => {
    const numVisibleSymbols = 4;

    return reels.map(reel => {
        const randomIndex = Math.floor(Math.random() * reel.length);
        const visibleSymbols = [];

        for (let i = 0; i < numVisibleSymbols; i++) {
            visibleSymbols.push(reel[(randomIndex + i) % reel.length]);
        }

        return visibleSymbols;
    });
};

// Function to calculate payout for mini wins
const calculateMiniWins = (betAmount, result) => {
    let miniPayout = 0;

    result.forEach(reelSymbols => {
        const symbolCounts = {};

        // Count occurrences of each symbol all reels
        result.flat().forEach(symbol => {
            symbolCounts[symbol] = (symbolCounts[symbol] || 0) + 1;
        });

        // Award mini payout if there are at least 2 matching symbols in the reel
        for (let symbol in symbolCounts) {
            if (symbolCounts[symbol] >= 5) {
                miniPayout += betAmount * symbolMultipliers[symbol] * 0.05;
            } else if (symbolCounts[symbol] >= 4) {
                miniPayout += betAmount * symbolMultipliers[symbol] * 0.01;
            }
        }
    });

    return miniPayout;
};

// Function to calculate payout based on the bet and the result
const calculatePayout = (betAmount, result) => {
    let payout = 0;

    // Check each payline
    paylines.forEach(payline => {
        const symbolsOnPayline = payline.map((row, reelIndex) => result[reelIndex][row]);

        const firstSymbol = symbolsOnPayline[0];
        const allSymbolsMatch = symbolsOnPayline.every(symbol => symbol === firstSymbol);

        if (allSymbolsMatch) {
            const multiplier = symbolMultipliers[firstSymbol] || 0;
            payout += betAmount * multiplier;
        }
    });

    return payout;
};

// Function to handle the game spin and return the result
const playGame = async (req, res) => {
    const { betAmount } = req.body;
    const uid = req.user.uid;

    // Get user balance
    const user = await getUserFromFirestore(uid);
    const userBalance = user ? user.balance : 0;

    // Check if the user has enough balance to play the game
    if (userBalance < betAmount) {
        return res.status(400).json({ message: "Insufficient balance" });
    }

    // Spin the reels
    const result = spinReels();

    // Check paylines and calculate payout
    const payout = calculatePayout(betAmount, result);

    // Calculate mini wins
    const miniPayout = calculateMiniWins(betAmount, result);

    // Update jackpot (optional)
    const jackpotIncrement = betAmount * 0.1;
    setJackpot(jackpotIncrement);

    // Round values to two decimal places
    let roundedPayout = Number(payout.toFixed(2));
    let roundedMiniPayout = Number(miniPayout.toFixed(2));
    let roundedJackpot = Number(getJackpot().toFixed(2));

    // Update user balance
    const newBalance = userBalance - betAmount + payout + miniPayout;
    await updateUserBalanceInFirestore(uid, newBalance);

    res.json({
        payout: roundedPayout,
        miniPayout: roundedMiniPayout,
        jackpot: roundedJackpot,
        result
    });
};

export {
    playGame
};
