const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const usuarioOptions = {
  discriminatorKey: "tipoUsuario",
  collection: "usuarios",
  id: false,
};

const UsuarioSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Por favor informe um email"],
      match: [
        /^\w+([\.-]?\w+)*@\w([\.-?\w+])*(\.\w{2,3})+$/,
        "Por favor informe um email válido",
      ],
    },
    senha: {
      type: String,
      required: [true, "Por favor informe uma senha"],
      minlength: 6,
      select: false,
    },
    nome: {
      type: String,
      required: [true, "Por favor informe um nome"],
      trim: true,
      maxlength: [70, "Nome não pode ter mais que 70 caractéres"],
    },
    avatar: {
      type: mongoose.Schema.ObjectId,
      ref: "GFS",
    },
    criadoEm: {
      type: Date,
      default: Date.now,
    },
  },
  usuarioOptions
);

// Encrypt password on create
UsuarioSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
});

// Encrypt password on update
UsuarioSchema.methods.updateSenha = async function (newPassword) {
  console.log("1");
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(newPassword, salt);
};

// Match user entered password to hashed password in database
UsuarioSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.senha);
};

// JWT sign and return
UsuarioSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Delete all desafios when the professor owner is deleted
UsuarioSchema.pre("remove", async function (next) {
  await this.model("Desafio").deleteMany({ professor: this._id });
  next();
});

const Usuarios = mongoose.model("Usuarios", UsuarioSchema);

module.exports = mongoose.model("Usuarios");
