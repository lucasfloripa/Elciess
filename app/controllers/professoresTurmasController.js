const Professor = require("../models/Professor"),
  Turma = require("../models/Turma"),
  asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/errorResponse");

// @desc      Add bound professor turma
// @route     POST /api/v1/professoresTurma/add/:professorId/:turmaId
// @access    Private
exports.addProfessorTurmaBound = asyncHandler(async (req, res, next) => {
  const { professorId, turmaId } = req.params;

  let professor = await Professor.findById(professorId);

  if (!professor) {
    return next(
      new ErrorResponse(`Professor com id ${professorId} não encontrado`, 404)
    );
  }

  let turma = await Turma.findById(turmaId);

  if (!turma) {
    return next(
      new ErrorResponse(`Turma com id ${turmaId} não encontrado`, 404)
    );
  }

  professor = await Professor.findByIdAndUpdate(
    professorId,
    {
      $push: { turmas: turmaId },
    },
    { new: true, runValidators: true }
  );

  turma = await Turma.findByIdAndUpdate(
    turmaId,
    {
      $push: { professores: professorId },
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({ sucesso: true, professor, turma });
});

// @desc      Delete bound professor turma
// @route     Delete /api/v1/professoresTurma/delete/:professorId/:turmaId
// @access    Private
exports.deleteProfessorTurmaBound = asyncHandler(async (req, res, next) => {
  const { professorId, turmaId } = req.params;

  let professor = await Professor.findById(professorId);

  if (!professor) {
    return next(
      new ErrorResponse(`Professor com id ${professorId} não encontrado`, 404)
    );
  }

  let turma = await Turma.findById(turmaId);

  if (!turma) {
    return next(
      new ErrorResponse(`Turma com id ${turmaId} não encontrado`, 404)
    );
  }

  professor = await Professor.findByIdAndUpdate(
    professorId,
    {
      turmas: professor.turmas.filter((turma) => turma.toString() !== turmaId),
    },
    { new: true, runValidators: true }
  );

  turma = await Turma.findByIdAndUpdate(
    turmaId,
    {
      professores: turma.professores.filter(
        (professor) => professor.toString() !== professorId
      ),
    },
    { new: true, runValidators: true }
  );

  res.status(200).json({ sucesso: true, professor, turma });
});
