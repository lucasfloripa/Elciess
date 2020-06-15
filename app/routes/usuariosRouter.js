const express = require("express");
const advancedResults = require("../middlewares/advancedResults");
const Usuarios = require("../models/Usuarios");
const multer = require("../middlewares/multer");

const {
  getUsuario,
  getUsuarios,
  deleteUsuario,
  updateSenhaUsuario,
  getAvatarFotos,
  displayAvatar,
  setAvatar,
} = require("../controllers/usuariosController");

const router = express.Router();

const { protect } = require("../middlewares/auth");

router.route("/").get(protect, advancedResults(Usuarios, null), getUsuarios);

router.route("/:id").get(protect, getUsuario).delete(protect, deleteUsuario);

router.route("/usuarioAtual").put(protect, updateSenhaUsuario);

router.route("/avatar/fotos").get(getAvatarFotos);

router.route("/avatar/fotos/:id").get(displayAvatar);

router.route("/avatar/setFoto/:avatarId").put(protect, setAvatar);

module.exports = router;
