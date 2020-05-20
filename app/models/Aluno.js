const mongoose = require("mongoose");
const Usuarios = require("./Usuarios");

const Aluno = Usuarios.discriminator(
  "Aluno",
  new mongoose.Schema({
    turma: {
      type: mongoose.Schema.ObjectId,
      ref: "Turma",
      required: [true, "Por favor informe a turma"],
    },
    desafios: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Desafio",
      },
    ],
  })
);

module.exports = mongoose.model("Aluno");
