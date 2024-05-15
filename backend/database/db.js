const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todolist");
    console.log("database connnected!");
  } catch (error) {
    console.log("Error while connecting to database");
  }
};

module.exports = connect;
