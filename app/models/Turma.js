const mongoose = require("mongoose");

const turmaOptions = {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  id: false,
};

const TurmaSchema = new mongoose.Schema(
  {
    codigo: {
      type: Number,
      unique: true,
      required: [true, "Informe o código da sala"],
    },
    professores: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Professor",
      },
    ],
    criadoEm: {
      type: Date,
      default: Date.now,
    },
  },
  turmaOptions
);

TurmaSchema.virtual("alunos", {
  ref: "Aluno",
  localField: "_id",
  foreignField: "turma",
  justOne: false,
});

module.exports = mongoose.model("Turma", TurmaSchema);
