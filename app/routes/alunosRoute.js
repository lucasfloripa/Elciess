const express = require("express");
const advancedResults = require("../middlewares/advancedResults");
const Aluno = require("../models/Aluno");

const {
  getAlunos,
  getAluno,
  updateAluno,
  createAluno,
  deleteAluno,
} = require("../controllers/alunosCrontroller");

const router = express.Router();

const { protect } = require("../middlewares/auth");

router
  .route("/")
  .get(protect, advancedResults(Aluno, null), getAlunos)
  .post(createAluno);

router.route("/:id").get(protect, getAluno).put(protect, updateAluno).delete(protect, deleteAluno);

module.exports = router;
