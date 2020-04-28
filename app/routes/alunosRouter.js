const express = require("express");
const Aluno = require("../models/Aluno");
const advancedResults = require("../middlewares/advancedResults");
const { protect } = require("../middlewares/auth");
const {
  getAlunos,
  getAluno,
  updateAluno,
  createAluno,
  deleteAluno,
} = require("../controllers/alunosCrontroller");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(
    protect,
    advancedResults(Aluno, { path: "turma", select: "codigo" }),
    getAlunos
  )
  .post(createAluno);

router
  .route("/:id")
  .get(protect, getAluno)
  .put(protect, updateAluno)
  .delete(protect, deleteAluno);

module.exports = router;
