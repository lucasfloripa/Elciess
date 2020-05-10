const Desafio = require("../models/Desafio"),
  Professor = require("../models/Professor"),
  asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/errorResponse");

// @desc      Get all desafios
// @route     GET /api/v1/desafios
// @route     GET /api/v1/professores/:professorId/desafios
// @acess     Private
exports.getDesafios = asyncHandler(async (req, res, next) => {
  const { professorId } = req.params;

  if (professorId) {
    const desafios = await Desafio.find({ professor: professorId }).populate({
      path: "professor",
      select: "nome disciplina",
    });
    res
      .status(200)
      .json({ sucesso: true, contagem: desafios.length, data: desafios });
  }

  res.status(200).json(res.advancedResults);
});

// @desc      Get single desafios
// @route     GET /api/v1/desafios/:id
// @acess     Private
exports.getDesafio = asyncHandler(async (req, res, next) => {
  const { id } = req.body;

  const desafio = await Desafio.findById(id).populate({
    path: "professor",
    select: "nome disciplina",
  });

  if (!desafio) {
    return next(new ErrorResponse(`Desafio com id ${id} não encontrado`, 404));
  }

  res.status(200).json({ sucesso: true, data: desafio });
});

// @desc      Get desafios by turma
// @route     GET /api/v1/desafios/professores/turma
// @acess     Private
exports.getDesafiosByTurma = asyncHandler(async (req, res, next) => {
  const idTurma = req.usuario.turma;

  const professores = await Professor.find({ turmas: idTurma });

  if (!professores) {
    return next(new ErrorResponse("Professores não encontrados", 404));
  }

  const professoresIds = professores.map((professor) => professor._id);

  const desafios = await Desafio.find()
    .where("professor")
    .in(professoresIds)
    .populate({
      path: "professor",
      select: "nome disciplina",
    })
    .exec();

  res
    .status(200)
    .json({ sucesso: true, contagem: desafios.length, data: desafios });
});

// @desc      Create desafios
// @route     POST /api/v1/desafios
// @acess     Private
exports.createDesafio = asyncHandler(async (req, res, next) => {
  const { professor } = req.body;

  const findProfessor = await Professor.findById(professor);

  if (!findProfessor) {
    return next(
      new ErrorResponse(`Professor com id ${professor} não encontrado`, 404)
    );
  }

  const newDesafio = await Desafio.create(req.body);

  res.status(200).json({ sucesso: true, data: newDesafio });
});

// @desc      Update desafios
// @route     PUT /api/v1/desafios/:id
// @acess     Private
exports.updateDesafio = asyncHandler(async (req, res, next) => {
  const { body } = req;

  let updatedDesafio = await Desafio.findById(body.id);

  if (!updatedDesafio) {
    return next(
      new ErrorResponse(`Desafio de id ${body.id} não encontrado`, 404)
    );
  }

  updatedDesafio = await Desafio.findByIdAndUpdate(body.id, body, {
    new: true,
    runValidators: true,
  });


  res.status(200).json({ sucesso: true, data: updatedDesafio });
});

// @desc      Delete desafio
// @route     PUT /api/v1/desafios/:id
// @access    Private
exports.deleteDesafio = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const desafioToDelete = await Desafio.findById(id);

  if (!desafioToDelete) {
    return next(new ErrorResponse(`Desafio de id ${id} não encontrado`, 404));
  }

  await desafioToDelete.remove();

  res.status(200).json({ sucesso: true, data: {} });
});
