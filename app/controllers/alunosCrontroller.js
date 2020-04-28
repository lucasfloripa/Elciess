const Aluno = require("../models/Aluno"),
  asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/errorResponse");

// @desc      Get todos alunos
// @route     GET /api/v1/alunos
// @route     GET /api/v1/turmas/:turmaId/alunos
// @access    Private
exports.getAlunos = asyncHandler(async (req, res, next) => {
  const { turmaId } = req.params;

  if (turmaId) {
    const alunos = await Aluno.find({ turma: turmaId }).populate({
      path: "turma",
      select: "codigo",
    });
    res
      .status(200)
      .json({ sucesso: true, contagem: alunos.length, data: alunos });
  } else {
    res.status(200).json(res.advancedResults);
  }
});

// @desc      Get único aluno
// @route     GET /api/v1/alunos/:id
// @access    Private
exports.getAluno = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const aluno = await Aluno.findById(id).populate({
    path: "turma",
    select: "codigo",
  });

  if (!aluno) {
    return next(new ErrorResponse(`Aluno com id ${id} não encontrado`, 404));
  }

  res.status(200).json({ sucesso: true, data: aluno });
});

// @desc      Create aluno
// @route     POST /api/v1/alunos
// @access    Public
exports.createAluno = asyncHandler(async (req, res, next) => {
  const novoAluno = await Aluno.create(req.body);

  // Create token
  const token = novoAluno.getSignedJwtToken();

  res.status(201).json({ sucesso: true, data: novoAluno, token });
});

// @desc      Update aluno
// @route     PUT /api/v1/alunos/:id
// @access    Private
exports.updateAluno = asyncHandler(async (req, res, next) => {
  const { id } = req.usuario,
    { body } = req;

  let updatedAluno = await Aluno.findById(id);

  if (!updatedAluno) {
    return next(new ErrorResponse(`Aluno com id ${id} não encontrado`, 404));
  }

  updatedAluno = await Aluno.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ sucesso: true, data: updatedAluno });
});

// @desc      Delete aluno
// @route     PUT /api/v1/alunos/:id
// @access    Private
exports.deleteAluno = asyncHandler(async (req, res, next) => {
  const { id } = req.usuario;

  const alunoToDelete = await Aluno.findById(id);

  if (!alunoToDelete) {
    return next(new ErrorResponse(`Aluno com id ${id} não encontrado`, 404));
  }

  await alunoToDelete.remove();

  res.status(200).json({ sucesso: true, data: {} });
});
