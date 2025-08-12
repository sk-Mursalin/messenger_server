const express = require("express");
const { userAuth } = require("../middlewares/userAuth");
const chat = require("../controllers/chatController");
const chatRouter = express.Router();

chatRouter.get("/chat/:targetUserId", userAuth, chat);

module.exports = chatRouter