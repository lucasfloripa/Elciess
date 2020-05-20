const mongoose = require("mongoose");

const AvisoSchema = new mongoose.Schema({
  assunto: {
    type: String,
    trim: true,
    maxlength: [30, "Assunto não pode ter mais que 30 caractéres"],
    required: [true, "Por favor informe o assunto"],
  },
  descricao: {
    type: String,
    trim: true,
    maxlength: [200, "Descrição não pode ter mais que 200 caractéres"],
    required: [true, "Por favor informe a descrição do desafio"],
  },
  professor: {
    type: mongoose.Schema.ObjectId,
    ref: "Professor",
    required: true,
  },
  turma: {
    type: mongoose.Schema.ObjectId,
    ref: "Turma",
    required: true,
  },
  criadoEm: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Aviso", AvisoSchema);
