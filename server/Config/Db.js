const mongoose = require('mongoose');

const DB_URL = process.env.DATABASE_URL;

mongoose.connect(DB_URL)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Database connection error: ", err);
  });
