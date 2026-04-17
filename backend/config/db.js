const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Trying to connect DB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB ERROR:", error);
    process.exit(1);
  }
};
console.log(mongoose.connection.readyState);

module.exports = connectDB;