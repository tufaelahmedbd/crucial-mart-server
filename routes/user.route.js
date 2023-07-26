const express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
} = require("../controllers/user.controller");
const { isAuthenticated } = require("../middlewares/auth.middleware");
const { isAdmin } = require("../middlewares/admin.middleware");

const router = express.Router();

//register
router.post("/auth/register", createUser);

//login
router.post("/auth/login", loginUser);

//get all users
router.get("/", isAuthenticated, isAdmin, getAllUsers);

module.exports = router;
