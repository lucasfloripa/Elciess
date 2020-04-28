const express = require("express");
const { protect } = require("../middlewares/auth");
const {
  addProfessorTurmaBound,
  deleteProfessorTurmaBound,
} = require("../controllers/professoresTurmasController");

const router = express.Router();

router
  .route("/add/:professorId/:turmaId")
  .post(protect, addProfessorTurmaBound);
router
  .route("/delete/:professorId/:turmaId")
  .delete(protect, deleteProfessorTurmaBound);

module.exports = router;
