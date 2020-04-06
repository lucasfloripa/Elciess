const mongoose = require("mongoose");

const AlunoSchema = new mongoose.Schema({
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
  idade: {
    type: Number,
    required: [true, "Por favor informe uma idade válida"],
    min: 12,
    max: 80,
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

module.exports = mongoose.model("Aluno", AlunoSchema);
