const express = require("express");
const dotenv = require("dotenv");

const taskRouter = require("./routes/todoRoutes");
const app = express();
app.use(express.json());
app.use("/todoList", taskRouter);

app.listen(5000, console.log("server started 5000"));
