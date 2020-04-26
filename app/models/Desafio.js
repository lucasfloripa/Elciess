const mongoose = require("mongoose");

const DesafioSchema = new mongoose.Schema({
  nome: {
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
  pergunta: {
    type: String,
    required: [true, "Por favor informe a pergunta do desafio"],
    trim: true,
    maxlength: [200, "Pergunta não pode ter mais que 200 caractéres"],
  },
  resposta: {
    type: String,
    required: [true, "Por favor informe a resposta do desafio"],
    trim: true,
    maxlength: [200, "Resposta não pode ter mais que 200 caractéres"],
    select: false,
  },
  acerto: {
    type: Boolean,
  },
  criadoEm: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Desafio", DesafioSchema);
