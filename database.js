const mongoose = require("mongoose");
//mongoose is my middle man between my database and my app...

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://dalaldyh:rilzcV0CMcL5xFSH@fullstack.vk4ux.mongodb.net/"
    );
    console.log("connect to mongoDB");
  } catch (error) {
    console.log("error");
  }
};

module.exports = connectDB;
