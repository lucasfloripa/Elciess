const express = require("express");
const advancedResults = require("../middlewares/advacedResults");
const Aluno = require("../models/Aluno");
const {
  getAlunos,
  getAluno,
  createAluno,
  updateAluno,
  deleteAluno,
} = require("../controllers/alunosController");

const router = express.Router();

router
  .route("/")
  .get(advancedResults(Aluno, null), getAlunos)
  .post(createAluno);
router.route("/:id").get(getAluno).put(updateAluno).delete(deleteAluno);

module.exports = router;
