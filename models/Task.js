const uniqid = require("uniqid");
class Task {
  constructor(taskName) {
    this.taskame = taskName;
    this.status = "pending";
    this.taskId = uniqid();
  }
}
module.exports = Task;
