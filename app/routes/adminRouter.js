const express = require("express");
const Admin = require("../models/Admin");
const advancedResults = require("../middlewares/advancedResults");
const { protect } = require("../middlewares/auth");
const {
  getAdmins,
  getAdmin,
  updateAdmin,
  createAdmin,
  deleteAdmin,
} = require("../controllers/adminController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(protect, advancedResults(Admin, null), getAdmins)
  .post(createAdmin);

router
  .route("/:id")
  .get(protect, getAdmin)
  .put(protect, updateAdmin)
  .delete(protect, deleteAdmin);

module.exports = router;
