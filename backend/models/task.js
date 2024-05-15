const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  delete: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("task", taskSchema);
