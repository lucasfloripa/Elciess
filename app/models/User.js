const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
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
  tipoUsuario: {
    type: String,
    required: [true, "Por favor informe o tipo do usuário"],
    enum: ["aluno", "professor", "responsavel", "admin"],
  },
  nome: {
    type: String,
    required: [true, "Por favor informe um nome"],
    trim: true,
    maxlength: [70, "Nome não pode ter mais que 70 caractéres"],
  },
  dataNasc: {
    type: Date,
    required: [true, "Por favor informe a data de nascimento"],
  },
  telefone: {
    type: Number,
    required: [true, "Por favor informe um telefone"],
  },
  endereço: {
    type: String,
    required: [true, "Por favor informe um endereço"],
  },
  criadoEm: {
    type: Date,
    default: Date.now,
  },
});

// Encrypt password
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
});

// Match user entered password to hashed password in database
UserSchema.methods.matchPassoword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.senha);
};

// JWT sign and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

module.exports = mongoose.model("User", UserSchema);
