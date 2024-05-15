const { jwt } = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    const user = jwt.verify(token, process.env.KEY);
    if (!data) {
      throw new Error("User not found");
    }
    req.info = { user };
    next();
  } catch (error) {
    res.send(error);
  }
};

module.exports = { auth };
