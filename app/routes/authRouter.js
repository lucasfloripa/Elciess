const express = require("express");
const { login, getMe, logout } = require("../controllers/authController");

const router = express.Router();

const { protect } = require("../middlewares/auth");

router.route("/login").post(login);
router.route("/me").get(protect, getMe);
router.route("/logout").get(protect, logout);

module.exports = router;
