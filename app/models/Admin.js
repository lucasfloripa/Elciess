const mongoose = require("mongoose");
const Usuarios = require("./Usuarios");

const Admin = Usuarios.discriminator(
  "Admin",
  new mongoose.Schema({
    setor: { type: String, required: [true, "Informe um setor"] },
  })
);

module.exports = mongoose.model("Admin");
