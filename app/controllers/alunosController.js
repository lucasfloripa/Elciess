const Aluno = require("../models/Aluno"),
  asyncHandler = require("../middlewares/asyncHandler");

// @desc      Get todos alunos
// @route     GET /api/v1/alunos
// @access    Public
exports.getAlunos = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get único aluno
// @route     GET /api/v1/alunos/:id
// @access    Public
exports.getAluno = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const aluno = await Aluno.findById(id);

  res.status(200).json({ sucesso: true, data: aluno });
});

// @desc      Create aluno
// @route     POST /api/v1/alunos
// @access    Private
exports.createAluno = asyncHandler(async (req, res, next) => {
  const novoAluno = await Aluno.create(req.body);

  res.status(201).json({ sucesso: true, data: novoAluno });
});

// @desc      Update aluno
// @route     PUT /api/v1/alunos/:id
// @access    Private
exports.updateAluno = asyncHandler(async (req, res, next) => {
  const { id } = req.params,
    { body } = req;

  const updatedAluno = await Aluno.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ sucesso: true, data: updatedAluno });
});

// @desc      Delete aluno
// @route     PUT /api/v1/alunos/:id
// @access    Private
exports.deleteAluno = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  await Aluno.findByIdAndDelete(id);

  res.status(200).json({ sucesso: true, data: {} });
});
