const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/user.js");

const authorization = async (req, res) => {
  try {
    const { user } = req.info;
    let newuser = await userModel.findOne({ email: user?.email });
    if (!user) {
      throw new Error("No user found");
    }

    res.status(200).json({ status: "success", user: newuser });
  } catch (error) {
    res.send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("fields is not matched!");
    }

    let user = await userModel.findOne({ email, password });
    if (!user) {
      throw new Error("please register first");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Password not matched!");
    }

    const token = jwt.sign(user.toObject(), process.env.KEY);
    let expireTime = new Date(Date.now() + 50 * 24 * 60 * 1000);
    res.cookie("token", token, {
      expires: expireTime,
      httpOnly: true,
    });

    res.status(200).json({ status: "success", user });
  } catch (error) {
    res.send(error.message);
  }
};

const register = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    if (!email || !password) {
      throw new Error("fields is not matched!");
    }
    let user = await userModel.findOne({ email, password });
    if (user) {
      throw new Error("Already registered!");
    }

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    user = new userModel({ name, email, password });
    await user.save();

    const token = jwt.sign(user.toObject(), process.env.KEY);

    let expireTime = new Date(Date.now() + 50 * 24 * 60 * 1000);

    res.cookie("token", token, {
      expires: expireTime,
      httpOnly: true,
    });

    let { password: pass, ...rest } = user.toObject();
    res.status(200).json({ status: "success", user: rest });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { login, register, authorization };
