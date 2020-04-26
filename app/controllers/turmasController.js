const Turma = require("../models/Turma"),
  asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/errorResponse");

// @desc      Get todas turmas
// @route     GET /api/v1/turmas
// @access    Private
exports.getTurmas = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get única turma
// @route     GET /api/v1/turmas/:id
// @access    Private
exports.getTurma = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const turma = await Turma.findById(id);

  if (!turma) {
    return next(new ErrorResponse(`Turma com id ${id} não encontrado`, 404));
  }

  res.status(200).json({ sucesso: true, data: turma });
});

// @desc      Create turma
// @route     POST /api/v1/turmas
// @access    Public
exports.createTurma = asyncHandler(async (req, res, next) => {
  const novaTurma = await Turma.create(req.body);

  res.status(201).json({ sucesso: true, data: novaTurma });
});

// @desc      Update turma
// @route     PUT /api/v1/turmas/:id
// @access    Private
exports.updateTurmas = asyncHandler(async (req, res, next) => {
  const { id } = req.params,
    { body } = req;

  let updatedTurma = await Turma.findById(id);

  if (!updatedTurma) {
    return next(new ErrorResponse(`Turma com id ${id} não encontrado`, 404));
  }

  updatedTurma = await Turma.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ sucesso: true, data: updatedTurma });
});

// @desc      Delete turma
// @route     PUT /api/v1/turmas/:id
// @access    Private
exports.deleteTurma = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const turmaToDelete = await Turma.findById(id);

  if (!turmaToDelete) {
    return next(new ErrorResponse(`Turma com id ${id} não encontrado`, 404));
  }

  await turmaToDelete.remove();

  res.status(200).json({ sucesso: true, data: {} });
});
