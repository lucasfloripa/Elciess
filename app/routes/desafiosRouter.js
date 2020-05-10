const express = require("express");
const advancedResults = require("../middlewares/advancedResults");
const Desafio = require("../models/Desafio");

const {
  getDesafio,
  getDesafios,
  getDesafiosByTurma,
  createDesafio,
  updateDesafio,
  deleteDesafio,
} = require("../controllers/desafiosController");

const router = express.Router({ mergeParams: true });

const { protect } = require("../middlewares/auth");

router
  .route("/")
  .get(
    protect,
    advancedResults(Desafio, { path: "professor", select: "nome disciplina" }),
    getDesafios
  )
  .post(protect, createDesafio);

router
  .route("/:id")
  .get(protect, getDesafio)
  .put(protect, updateDesafio)
  .delete(protect, deleteDesafio);

router.route("/professores/turma").get(protect, getDesafiosByTurma);

module.exports = router;
