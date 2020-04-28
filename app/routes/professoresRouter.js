const express = require("express");
const advancedResults = require("../middlewares/advancedResults");
const Professor = require("../models/Professor");
const { protect } = require("../middlewares/auth");
const {
  getProfessores,
  getProfessor,
  updateProfessor,
  createProfessor,
  deleteProfessor,
} = require("../controllers/professoresController");
const desafiosRouter = require("./desafiosRouter");

const router = express.Router();

router.use("/:professorId/desafios", desafiosRouter);

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
