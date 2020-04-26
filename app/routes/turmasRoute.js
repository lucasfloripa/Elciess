const Turma = require("../models/Turma");
const express = require("express");
const advancedResults = require("../middlewares/advancedResults");
const { protect } = require("../middlewares/auth");
const {
  getTurma,
  getTurmas,
  updateTurmas,
  createTurma,
  deleteTurma,
} = require("../controllers/turmasController");

const router = express.Router();

router
  .route("/")
  .get(protect, advancedResults(Turma, null), getTurmas)
  .post(protect, createTurma);
router
  .route("/:id")
  .get(protect, getTurma)
  .put(protect, updateTurmas)
  .delete(protect, deleteTurma);

module.exports = router;
