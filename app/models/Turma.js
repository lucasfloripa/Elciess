const mongoose = require("mongoose");

const TurmaSchema = new mongoose.Schema({
  numero: {
    type: Number,
    unique: true,
    require: [true, "Informe o número da sala"],
  },
});

module.exports = mongoose.model("Turma", TurmaSchema);
