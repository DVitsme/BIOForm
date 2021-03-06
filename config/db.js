const mongoose = require('mongoose');
const config = require('config');
db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err.messsage);
    // exit process
    process.exit(1);
  }
};

module.exports = connectDB;
