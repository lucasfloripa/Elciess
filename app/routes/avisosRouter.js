const express = require("express"),
  Aviso = require("../models/Aviso"),
  advancedResults = require("../middlewares/advancedResults"),
  { protect } = require("../middlewares/auth"),
  {
    getAvisos,
    getAvisosByTurmaAluno,
    getAvisosByProfLogged,
    createAviso,
    updateAviso,
    deleteAviso,
  } = require("../controllers/avisosController");

const router = express.Router();

router
  .route("/")
  .get(
    protect,
    advancedResults(Aviso, { path: "professor", select: "nome" }),
    getAvisos
  )
  .post(protect, createAviso);

router.route("/turmaAluno").get(protect, getAvisosByTurmaAluno);

router.route("/professorLogado").get(protect, getAvisosByProfLogged);

router.route("/:id").put(protect, updateAviso).delete(protect, deleteAviso);

module.exports = router;
