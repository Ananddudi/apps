const { login, register, authorization } = require("../controllers/user");
const { auth } = require("../middleware/authurization");

const router = require("express").Router();

router.route("/auth").get(auth, authorization);
router.route("/login").post(login);
router.route("/register").post(register);

module.exports = router;
