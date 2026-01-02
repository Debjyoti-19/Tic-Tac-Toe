const mongoose = require('mongoose');

const gameCodeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  player1: {
    type: String,
    default: '',
  },
  player2: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 500,
  },
});

module.exports = mongoose.model('GameCode', gameCodeSchema);
