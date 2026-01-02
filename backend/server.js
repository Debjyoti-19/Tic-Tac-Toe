const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const cors = require('cors');
const codeRouter = require('./routes/code.route.js');

const port = process.env.PORT || 3000;
const mongodb_url = process.env.MONGODB_URL || 'mongodb://mongodb:27017/game';

app.use(
  cors({
    origin: 'localhost:5173',
    credentials: true,
  }),
);
app.use(express.json());

app.use('/code', codeRouter);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
  if (mongodb_url) {
    mongoose
      .connect(mongodb_url)
      .then(console.log('Mongodb connected'))
      .catch((err) => console.log(err));
  } else {
    console.log('Mongodb url needed');
  }
});
