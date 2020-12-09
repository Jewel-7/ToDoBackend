const express = require("express");
const {
  getAllTasks,
  createTask,
  verifyPostRequest,
} = require("../controllers/taskControllers");
const router = express.Router();

router.route("/tasks").get(getAllTasks).post(createTask, verifyPostRequest);

module.exports = router;
