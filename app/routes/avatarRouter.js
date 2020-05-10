const express = require("express");
const multer = require("../middlewares/multer");
const {
  getAvatares,
  createAvatar,
} = require("../controllers/avatarController");

const router = express.Router();

router.route("/").get(getAvatares).post(multer, createAvatar);

module.exports = router;
