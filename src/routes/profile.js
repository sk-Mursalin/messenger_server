const express = require("express");
const { userAuth } = require("../middlewares/userAuth");
const { viewProfile } = require("../controllers/profileController");
const profileRouter = express.Router();

profileRouter.get("/profile/view", userAuth, viewProfile)


module.exports = profileRouter