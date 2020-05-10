const Admin = require("../models/Admin"),
  asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/errorResponse");

// @desc      Get todos admins
// @route     GET /api/v1/admins
// @access    Private
exports.getAdmins = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc      Get único admin
// @route     GET /api/v1/admins/:id
// @access    Private
exports.getAdmin = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const admin = await Admin.findById(id).populate({
    path: "turma",
    select: "codigo",
  });

  if (!admin) {
    return next(new ErrorResponse(`Admin com id ${id} não encontrado`, 404));
  }

  res.status(200).json({ sucesso: true, data: admin });
});

// @desc      Create admin
// @route     POST /api/v1/admins
// @access    Public
exports.createAdmin = asyncHandler(async (req, res, next) => {
  const novoAdmin = await Admin.create(req.body);

  // Create token
  const token = novoAdmin.getSignedJwtToken();

  res.status(201).json({ sucesso: true, data: novoAdmin, token });
});

// @desc      Update admin
// @route     PUT /api/v1/admins/:id
// @access    Private
exports.updateAdmin = asyncHandler(async (req, res, next) => {
  const { id } = req.usuario,
    { body } = req;

  let updatedAdmin = await Admin.findById(id);

  if (!updatedAdmin) {
    return next(new ErrorResponse(`Admin com id ${id} não encontrado`, 404));
  }

  updatedAdmin = await Admin.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ sucesso: true, data: updatedAdmin });
});

// @desc      Delete admin
// @route     PUT /api/v1/admins/:id
// @access    Private
exports.deleteAdmin = asyncHandler(async (req, res, next) => {
  const { id } = req.usuario;

  const adminToDelete = await Admin.findById(id);

  if (!adminToDelete) {
    return next(new ErrorResponse(`Admin com id ${id} não encontrado`, 404));
  }

  await adminToDelete.remove();

  res.status(200).json({ sucesso: true, data: {} });
});
