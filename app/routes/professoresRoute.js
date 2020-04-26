const express = require("express");
const advancedResults = require("../middlewares/advancedResults");
const Professor = require("../models/Professor");

const {
  getProfessores,
  getProfessor,
  updateProfessor,
  createProfessor,
  deleteProfessor,
} = require("../controllers/professoresController");

const router = express.Router();

const { protect } = require("../middlewares/auth");

router
  .route("/")
  .get(protect, advancedResults(Professor, null), getProfessores)
  .post(createProfessor);

router
  .route("/:id")
  .get(protect, getProfessor)
  .put(protect, updateProfessor)
  .delete(protect, deleteProfessor);

module.exports = router;
