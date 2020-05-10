const mongoose = require("mongoose");

const DesafioSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, "Por favor informe o nome do desafio"],
    trim: true,
    maxlength: [70, "Nome não pode ter mais que 70 caractéres"],
  },
  descricao: {
    type: String,
    required: [true, "Por favor informe a descrição do desafio"],
    trim: true,
    maxlength: [200, "Descrição não pode ter mais que 200 caractéres"],
  },
  resposta: {
    type: String,
    trim: true,
    maxlength: [500, "Resposta não pode ter mais que 500 caractéres"],
    select: false,
  },
  professor: {
    type: mongoose.Schema.ObjectId,
    ref: "Professor",
    required: true,
  },
  experiencia: {
    type: Number,
    required: [true, "Informe quanto de experiência o desafio provê"],
  },
  recompensa: {
    type: String,
  },
  alunos: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Aluno",
    },
  ],
  entregue: {
    type: Boolean,
  },
  acerto: {
    type: Boolean,
  },
  dataDeEntrega: {
    type: Date,
    required: [true, "Informe uma data de entrega do desafio"],
  },
  criadoEm: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Desafio", DesafioSchema);
