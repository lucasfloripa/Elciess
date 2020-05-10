const Usuarios = require("../models/Usuarios"),
  asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/errorResponse");

// @desc      Get todos usuarios
// @route     GET /api/v1/usuarios
// @access    Private
exports.getUsuarios = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get único usuario
// @route     GET /api/v1/usuarios/:id
// @access    Private
exports.getUsuario = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const usuario = await Usuarios.findById(id);

  if (!usuario) {
    return next(new ErrorResponse(`Usuário com id ${id} não encontrado`, 404));
  }

  res.status(200).json({ sucesso: true, data: usuario });
});

// @desc      Delete usuario
// @route     PUT /api/v1/usuarios/:id
// @access    Private
exports.deleteUsuario = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const usuarioToDelete = await Usuarios.findById(id);

  if (!usuarioToDelete) {
    return next(new ErrorResponse(`Usuário com id ${id} não encontrado`, 404));
  }

  await usuarioToDelete.remove();

  res.status(200).json({ sucesso: true, data: {} });
});