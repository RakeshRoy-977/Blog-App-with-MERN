const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log(`Connected to DB`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDB;
