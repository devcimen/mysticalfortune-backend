// Reels
// Reels are the columns of symbols that are spun by the player. 
// Each reel is an array of four symbols. 
// The game has five reels in total.
const reels = [
    ['rune', 'radiant', 'scrolls', 'book', 'rune', 'radiant', 'scrolls', 'book', 'arcane', 'sorceress', 'ring', 'elvenwarrior', 'divinewings', 'sacredlight', 'rune', 'scrolls', 'radiant', 'book'],
    ['rune', 'radiant', 'scrolls', 'book', 'arcane', 'sorceress', 'ring', 'radiantelf', 'angelgirl', 'elvenwarrior', 'divinewings', 'sacredlight', 'rune', 'scrolls', 'radiant', 'book'],
    ['rune', 'radiant', 'scrolls', 'book', 'arcane', 'sorceress', 'ring', 'elvenwarrior', 'radiantelf', 'Angel girl', 'divinewings', 'sacredlight', 'rune', 'scrolls', 'radiant', 'book'],
    ['rune', 'radiant', 'scrolls', 'book', 'arcane', 'sorceress', 'ring', 'radiantelf', 'elvenwarrior', 'Angel girl', 'divinewings', 'sacredlight', 'rune', 'scrolls', 'radiant', 'book'],
    ['rune', 'radiant', 'scrolls', 'book', 'arcane', 'sorceress', 'ring', 'radiantelf', 'elvenwarrior', 'Angel girl', 'divinewings', 'sacredlight', 'rune', 'scrolls', 'radiant', 'book']
];

// Paylines
// Paylines are the lines that determine the outcome of the game.
// Each payline is an array of five objects.
// Each object contains the symbol and the multiplier.
const paylines = [
    [0, 0, 0, 0, 0], // Top horizontal
    [1, 1, 1, 1, 1], // Second row horizontal
    [2, 2, 2, 2, 2], // Third row horizontal
    [3, 3, 3, 3, 3], // Bottom horizontal
    [0, 1, 2, 1, 0], // Diagonal from top left to bottom right
    [3, 2, 1, 2, 3], // Diagonal from bottom left to top right
    [0, 0, 1, 0, 0], // Top left corner
    [3, 3, 2, 3, 3], // Bottom right corner
    [0, 1, 0, 1, 0], // Alternating between top and second row
    [3, 2, 3, 2, 3], // Alternating between bottom and third row
    [1, 0, 1, 0, 1], // Zigzag between second and top row
    [2, 3, 2, 3, 2], // Zigzag between third and bottom row
    [0, 3, 1, 3, 0], // V shape (top-bottom alternating)
    [3, 0, 2, 0, 3], // Inverted V shape (bottom-top alternating)
    [0, 1, 2, 3, 2], // Diagonal with a slope
    [3, 2, 1, 0, 1], // Inverse diagonal with a slope
    [1, 2, 3, 2, 1], // Central row zigzag
    [2, 1, 0, 1, 2], // Central row inverse zigzag
    [0, 1, 2, 2, 1], // Zigzag with two center matches
    [3, 2, 1, 1, 2], // Reverse zigzag with two center matches
    [1, 1, 2, 2, 3], // A diagonal plus step pattern
    [2, 2, 1, 1, 0], // Inverse diagonal plus step pattern
    [0, 2, 1, 0, 1], // Alternating between top and center rows
    [3, 1, 2, 3, 2], // Alternating between bottom and center rows
    [0, 3, 2, 3, 0], // V shape, skipping the center
    [3, 0, 1, 0, 3], // Inverted V shape, skipping the center
    [1, 2, 1, 0, 1], // Zigzag with an upward slope
    [2, 1, 2, 3, 2], // Zigzag with a downward slope
    [0, 2, 3, 1, 0], // Zigzag with two sharp turns
    [3, 1, 0, 2, 3], // Inverse zigzag with two sharp turns
    [1, 2, 3, 1, 0], // Central rise to top-left
    [2, 1, 0, 2, 3], // Central drop to bottom-right
    [0, 2, 1, 3, 2], // Diamond shape
    [3, 1, 2, 0, 1], // Inverted diamond shape
    [0, 1, 3, 2, 0], // Snake pattern moving downwards
    [3, 2, 0, 1, 3], // Snake pattern moving upwards
    [0, 2, 3, 2, 1], // Two Z-shaped zigs
    [3, 1, 0, 1, 3], // Two Z-shaped zags
    [1, 0, 2, 3, 1], // Reverse U pattern
    [2, 3, 1, 0, 2], // U pattern
    [0, 3, 0, 1, 2], // Stepped diagonal upwards
    [3, 0, 3, 2, 1], // Stepped diagonal downwards
    [0, 1, 0, 2, 1], // Alternating second and first row
    [2, 3, 2, 1, 3], // Alternating third and fourth row
    [0, 2, 0, 2, 0], // Skipping two rows in between
    [3, 1, 3, 1, 3], // Skipping bottom rows
];

// Symbols Multipliers
// The symbols multipliers determine the payout of the game.
// Each symbol has a corresponding multiplier.
const symbolMultipliers = {
    'sacredlight': 100, // Legendary
    'angelgirl': 80,   // Legendary
    'divinewings': 50, // Epic
    'elvenwarrior': 40, // Epic
    'radiantelf': 40,  // Epic
    'arcane': 10, // Uncommon
    'sorceress': 10,    // Uncommon
    'ring': 5,         // Uncommon
    'rune': 2,   // Common
    'radiant': 2,       // Common
    'ancientscrolls': 2, // Common
    'book': 2           // Common
};

// Jackpot
// The jackpot is the highest payout in the game.
// The jackpot is triggered when the player gets five 'Sacred Light' symbols on any payline.
let jackpot = 1000000;

// Getter & Setter
const getJackpot = () => jackpot;
const setJackpot = (increment) => {
    jackpot += increment;
};

// Export the game model
export {
    reels,
    paylines,
    getJackpot,
    setJackpot,
    symbolMultipliers
};