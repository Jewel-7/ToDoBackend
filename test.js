// const dotenv = require("dotenv");

// console.log(process.env);

// dotenv.config({ path: "./config.env" });
// console.log(process.env);
const AppError = require("./helpers/appErrorClass");
const err = new AppError(400, "unsecussfull", "error in creating");

console.log(err);
