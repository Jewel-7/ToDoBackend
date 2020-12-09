const fs = require("fs");
const path = require("path");
const sendErrorMessage = require("../helpers/sendResponse");
const router = require("../routes/todoRoutes");
// const AppError = require("../helpers/appErrorClass");
const Task = require("../models/Task");
const fileName = path.join(__dirname, "..", "data", "tasks.json");
const tasks = JSON.parse(fs.readFileSync(fileName, "utf-8"));

const verifyPostRequest = (req, res, next) => {
  const requiredProperties = ["taskName", "deadline", "userId"];

  let result = requiredProperties.every((key) => {
    return req.body[key];
  });

  if (!result) {
    // res.status(400).json({
    //   status: "unsucessful",
    //   message: "request body is not valid",
    // });
    sendErrorMessage(
      new AppError(400, "unsucessfull", "request body is not valid"),
      req,
      res
    );
  } else {
    next();
  }
};

const getAllTasks = (req, res, next) => {
  res.status(200).json({
    status: "sucesss",
    data: tasks,
  });
};

const createTask = (req, res, next) => {
  console.log(req.body);
  console.log(req);
  let newTask = new Task(req.body);
  console.log(newTask);
  tasks.push(newTask);
  fs.writeFile(fileName, JSON.stringify(tasks, null, 2), (err) => {
    if (err) {
      res.status(500).json({
        status: "Internal error",
      });
      return err;
    }
    res.status(201).json({
      status: "sucessful",
      data: [newTask],
    });
  });
};

module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
module.exports.verifyPostRequest = verifyPostRequest;
