const {
  getTask,
  addtask,
  removeTask,
  editTask,
} = require("../controllers/task");

const router = require("express").Router();

router.route("/getall").get(getTask);
router.route("/add").post(addtask);
router.route("/remove/:id").delete(removeTask);
router.route("/edit/:id").post(editTask);

module.exports = router;
