const express = require("express");
const { userAuth } = require("../middlewares/userAuth");
const { allUsers } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/users", userAuth, allUsers)

module.exports = userRouter