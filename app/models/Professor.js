const mongoose = require("mongoose");
const Usuarios = require("./Usuarios");

const Professor = Usuarios.discriminator(
  "Professor",
  new mongoose.Schema({
    disciplina: { type: String },
  })
);

module.exports = mongoose.model("Professor");
