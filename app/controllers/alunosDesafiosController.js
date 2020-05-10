const Aluno = require("../models/Aluno"),
  Desafio = require("../models/Desafio"),
  asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/errorResponse");

// @desc      Add bound aluno desafio
// @route     POST /api/v1/alunosDesafios/add/:desafioId
// @access    Private
exports.addAlunoDesafioBound = asyncHandler(async (req, res, next) => {
  const { desafioId } = req.params;

  const alunoId = req.usuario._id;

  let aluno = await Aluno.findById(alunoId);

  if (!aluno) {
    return next(
      new ErrorResponse(`Aluno com id ${alunoId} não encontrado`, 404)
    );
  }

  let desafio = await Desafio.findById(desafioId);

  if (!desafio) {
    return next(
      new ErrorResponse(`Desafio com id ${desafioId} não encontrado`, 404)
    );
  }

  aluno = await Aluno.findByIdAndUpdate(
    alunoId,
    {
      $push: { desafios: desafioId },
    },
    { new: true, runValidators: true }
  );

  desafio = await Desafio.findByIdAndUpdate(
    desafioId,
    {
      $push: { alunos: alunoId },
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({ sucesso: true, data: aluno });
});

// @desc      Delete bound aluno desafio
// @route     Delete /api/v1/alunosDesafios/delete/:desafioId
// @access    Private
exports.deleteAlunoDesafioBound = asyncHandler(async (req, res, next) => {
  const { desafioId } = req.params;

  const alunoId = req.usuario._id;

  let aluno = await Aluno.findById(alunoId);

  if (!aluno) {
    return next(
      new ErrorResponse(`Aluno com id ${alunoId} não encontrado`, 404)
    );
  }

  let desafio = await Desafio.findById(desafioId);

  if (!desafio) {
    return next(
      new ErrorResponse(`Desafio com id ${desafioId} não encontrado`, 404)
    );
  }

  aluno = await Aluno.findByIdAndUpdate(
    alunoId,
    {
      desafios: aluno.desafios.filter(
        (desafio) => desafio.toString() !== desafioId
      ),
    },
    { new: true, runValidators: true }
  );

  desafio = await Desafio.findByIdAndUpdate(
    desafioId,
    {
      alunos: desafio.alunos.filter((aluno) => aluno.toString() !== alunoId),
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({ sucesso: true, data: aluno });
});
