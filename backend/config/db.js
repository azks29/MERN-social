const mongoose = require("mongoose");
// const config = require("config");
// const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connected....");
  } catch (err) {
    console.error(err.message);
    // Exit process with failiur
    process.exit(1);
  }
};

module.exports = connectDB;
