const express = require("express");
const advancedResults = require("../middlewares/advancedResults");
const Usuarios = require("../models/Usuarios");
const multer = require("../middlewares/multer");

const {
  getUsuario,
  getUsuarios,
  deleteUsuario,
  updateSenhaUsuario,
} = require("../controllers/usuariosController");

const router = express.Router();

const { protect } = require("../middlewares/auth");

router.route("/").get(protect, advancedResults(Usuarios, null), getUsuarios);

router.route("/:id").get(protect, getUsuario).delete(protect, deleteUsuario);

router.route("/usuarioAtual").put(protect, updateSenhaUsuario);

module.exports = router;
