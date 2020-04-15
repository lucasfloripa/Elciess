const mongoose = require("mongoose");

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

module.exports = mongoose.model("User", UserSchema);
