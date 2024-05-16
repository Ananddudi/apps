const taskModel = require("../models/task.js");

const addtask = async (req, res) => {
  try {
    const { message } = req.body;
    const { user } = req.info;
    if (!message) {
      throw new Error("Message empty!");
    }
    const task = new taskModel({
      username: user._id,
      message,
    });
    await task.save();
    res.status(200).json({ status: "success", task });
  } catch (error) {
    res.send(error);
  }
};

const removeTask = async (req, res) => {
  try {
    const { user } = req.info;
    await taskModel.findOneAndUpdate({ username: req.id }, { delete: true });
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.send(error);
  }
};

const editTask = async (req, res) => {
  try {
    const { user } = req.info;
    const task = await taskModel.findOneAndUpdate(
      { username: req.id },
      { message },
      { new: true }
    );
    res.status(200).json({ status: "success", task });
  } catch (error) {
    res.send(error);
  }
};

const getTask = async (req, res) => {
  try {
    const { user } = req.info;
    const tasks = await taskModel.find({ username: user._id });
    res.status(200).json({ status: "success", tasks });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { addtask, getTask, removeTask, editTask };
