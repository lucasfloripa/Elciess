const mongoose = require("mongoose");

const DesafioSchema = new mongoose.Schema({
  titulo: {
    type: String,
    trim: true,
    maxlength: [30, "Título não pode ter mais que 30 caractéres"],
    required: [true, "Por favor informe o nome do desafio"],
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
  alunos: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Aluno",
    },
  ],
  dataDeEntrega: {
    type: Date,
    required: [true, "Informe uma data de entrega do desafio"],
  },
  arquivoId: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "GFS",
    },
  ],
  entregue: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Aluno",
    },
  ],
  acerto: {
    type: Boolean,
  },
  criadoEm: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Desafio", DesafioSchema);
