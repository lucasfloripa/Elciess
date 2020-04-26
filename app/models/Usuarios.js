const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const usuarioOptions = {
  discriminatorKey: "tipoUsuario",
  collection: "usuario",
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
    criadoEm: {
      type: Date,
      default: Date.now,
    },
  },
  usuarioOptions
);

// Encrypt password
UsuarioSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
});

// Match user entered password to hashed password in database
UsuarioSchema.methods.matchPassoword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.senha);
};

// JWT sign and return
UsuarioSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = mongoose.model("Usuario");
