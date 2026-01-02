const GameCode = require('../models/code.model.js');

const getCodeHandler = async (req, res) => {
  const { playerName } = req.body;
  if (!playerName) return res.status(400).json({ message: 'Player name is required' });

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  try {
    const newCode = new GameCode({ code: result, player1: playerName });
    console.log(newCode);
    await newCode.save();
    res.status(201).json({ code: result });
  } catch (error) {
    console.log('Error in getCode : ', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const findCodeHandler = async (req, res) => {
  const { code, playerName } = req.body;

  if (code.length !== 6) return res.status(400).json({ message: 'Enter a valid code' });
  if (!playerName || !code) return res.status(400).json({ message: 'All fields are required' });

  try {
    const gameCode = await GameCode.findOne({ code });
    if (gameCode.player2 !== '') return res.status(400).json({ message: 'Players already joined' });
    if (!gameCode) return res.status(400).json({ message: 'Code not found' });

    // Update player2 name
    gameCode.player2 = playerName;
    await gameCode.save();

    return res.status(200).json({ gameCode });
  } catch (error) {
    console.log('Error in findCode : ', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getCodeHandler,
  findCodeHandler,
};
