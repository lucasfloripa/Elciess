const Aviso = require("../models/Aviso"),
  asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/errorResponse");

// @desc      Get avisos
// @route     GET /api/v1/avisos
// @access    Private
exports.getAvisos = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get avisos by turma do aluno atual
// @route     GET /api/v1/avisos/turmaAluno
// @acess     Private
exports.getAvisosByTurmaAluno = asyncHandler(async (req, res, next) => {
  const idTurma = req.usuario.turma;

  const avisos = await Aviso.find({ turma: idTurma }).populate({
    path: "professor",
    select: "nome",
  });

  if (!avisos) {
    return next(new ErrorResponse("Avisos não encontrados", 404));
  }

  res
    .status(200)
    .json({ sucesso: true, contagem: avisos.length, data: avisos });
});

// @desc      Get avisos by professor logado
// @route     GET /api/v1/avisos/professorLogado
// @acess     Private
exports.getAvisosByProfLogged = asyncHandler(async (req, res, next) => {
  const { _id } = req.usuario;

  const avisos = await Aviso.find({ professor: _id }).populate({
    path: "turma",
    select: "codigo",
  });

  if (!avisos) {
    return next(new ErrorResponse("Avisos não encontrados", 404));
  }

  res
    .status(200)
    .json({ sucesso: true, contagem: avisos.length, data: avisos });
});

// @desc      Create aviso
// @route     POST /api/v1/avisos
// @access    Private
exports.createAviso = asyncHandler(async (req, res, next) => {
  const { body } = req;
  const { _id } = req.usuario;

  const aviso = await Aviso.create({ ...body, professor: _id });

  res.status(200).json({ sucesso: true, aviso });
});

// @desc      Update aviso
// @route     PUT /api/v1/avisos/:id
// @access    Private
exports.updateAviso = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  let aviso = await Aviso.findById(id);

  if (!aviso) {
    return next(new ErrorResponse(`Aviso com id ${id} não encontrado`, 404));
  }

  aviso = await findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ sucesso: true, aviso });
});

// @desc      Delete aviso
// @route     DELETE /api/v1/avisos/:id
// @access    Private
exports.deleteAviso = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  let aviso = await Aviso.findById(id);

  if (!aviso) {
    return next(new ErrorResponse(`Aviso com id ${id} não encontrado`, 404));
  }

  await aviso.remove();

  res.status(200).json({ sucesso: true, aviso: {} });
});
