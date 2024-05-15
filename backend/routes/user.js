const { login, register } = require("../controllers/user");

const router = require("express").Router();

router.route("/login").post(login);
router.route("/register").post(register);

module.exports = router;
