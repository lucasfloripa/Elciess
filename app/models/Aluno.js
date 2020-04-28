const mongoose = require("mongoose");
const Usuarios = require("./Usuarios");

const Aluno = Usuarios.discriminator(
  "Aluno",
  new mongoose.Schema({
    pontos: { type: Number },
    turma: { type: mongoose.Schema.ObjectId, ref: "Turma" },
  })
);

module.exports = mongoose.model("Aluno");
