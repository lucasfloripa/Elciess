const mongoose = require("mongoose");
const Usuarios = require("./Usuarios");

const Aluno = Usuarios.discriminator(
  "Aluno",
  new mongoose.Schema({
    nivel: { type: Number },
    experiencia: { type: Number },
    titulos: [{ type: String }],
    turma: { type: mongoose.Schema.ObjectId, ref: "Turma" },
    desafios: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Desafio",
      },
    ],
  })
);

module.exports = mongoose.model("Aluno");
