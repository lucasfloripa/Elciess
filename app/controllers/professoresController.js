const Professor = require("../models/Professor"),
  Turma = require("../models/Turma"),
  asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/errorResponse");

// @desc      Get todos professores
// @route     GET /api/v1/professores
// @route     GET /api/v1/turmas/:turmaId/professores
// @access    Private
exports.getProfessores = asyncHandler(async (req, res, next) => {
  // const { turmaId } = req.usuario.turma;

  // if (turmaId) {
  //   const professores = await Professor.find({ turmas: turmaId }).populate({
  //     path: "turma",
  //     select: "codigo",
  //   });
  //   res
  //     .status(200)
  //     .json({ sucesso: true, contagem: professores.length, data: professores });
  // } else {
    res.status(200).json(res.advancedResults);
  // }
});

// @desc      Get único professor
// @route     GET /api/v1/professores/:id
// @access    Private
exports.getProfessor = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const professor = await Professor.findById(id);

  if (!professor) {
    return next(
      new ErrorResponse(`Professor com id ${id} não encontrado`, 404)
    );
  }

  res.status(200).json({ sucesso: true, data: professor });
});

// @desc      Create professor
// @route     POST /api/v1/professores
// @access    Public
exports.createProfessor = asyncHandler(async (req, res, next) => {
  const novoProfessor = await Professor.create(req.body);

  // Create token
  const token = novoProfessor.getSignedJwtToken();

  res.status(201).json({ sucesso: true, data: novoProfessor, token });
});

// @desc      Update professor
// @route     PUT /api/v1/professores/:id
// @access    Private
exports.updateProfessor = asyncHandler(async (req, res, next) => {
  const { id } = req.usuario,
    { body } = req;

  let updatedProfessor = await Professor.findById(id);

  if (!updatedProfessor) {
    return next(
      new ErrorResponse(`Professor com id ${id} não encontrado`, 404)
    );
  }

  updatedProfessor = await Professor.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ sucesso: true, data: updatedProfessor });
});

// @desc      Delete professor
// @route     PUT /api/v1/professores/:id
// @access    Private
exports.deleteProfessor = asyncHandler(async (req, res, next) => {
  const { id } = req.usuario;

  const professorToDelete = await Professor.findById(id);

  if (!professorToDelete) {
    return next(
      new ErrorResponse(`Professor com id ${id} não encontrado`, 404)
    );
  }

  await professorToDelete.remove();

  res.status(200).json({ sucesso: true, data: {} });
});
