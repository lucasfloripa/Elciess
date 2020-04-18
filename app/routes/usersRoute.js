const express = require("express");
const advancedResults = require("../middlewares/advancedResults");
const User = require("../models/User");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

const router = express.Router();

const { protect } = require("../middlewares/auth");

router.route("/").get(advancedResults(User, null), getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
