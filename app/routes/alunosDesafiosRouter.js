const express = require("express");
const { protect } = require("../middlewares/auth");
const {
  addAlunoDesafioBound,
  deleteAlunoDesafioBound,
} = require("../controllers/alunosDesafiosController");

const router = express.Router();

router
  .route("/add/:desafioId")
  .post(protect, addAlunoDesafioBound);
router
  .route("/delete/:desafioId")
  .delete(protect, deleteAlunoDesafioBound);

module.exports = router;
