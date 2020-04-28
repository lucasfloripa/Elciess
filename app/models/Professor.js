const mongoose = require("mongoose");
const Usuarios = require("./Usuarios");

const Professor = Usuarios.discriminator(
  "Professor",
  new mongoose.Schema({
    disciplina: { type: String, required: true },
    turmas: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Turma",
      },
    ],
  })
);

module.exports = mongoose.model("Professor");
