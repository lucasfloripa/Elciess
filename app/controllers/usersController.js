const User = require("../models/User"),
  asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/errorResponse");

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Public
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc      Get single user
// @route     GET /api/v1/users/:id
// @access    Public
exports.getUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return next(new ErrorResponse(`Usuário não encontrado com id ${id}`, 404));
  }

  res.status(200).json({ sucesso: true, data: user });
});

// @desc      Create user
// @route     POST /api/v1/users
// @access    Private
exports.createUser = asyncHandler(async (req, res, next) => {
  const newUser = await User.create(req.body);

  // Create token
  const token = newUser.getSignedJwtToken();

  res.status(201).json({ sucesso: true, token });
});

// @desc      Update user
// @route     PUT /api/v1/users/:id
// @access    Private
exports.updateUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params,
    { body } = req;

  let updatedUser = await User.findById(id);

  if (!updatedUser) {
    return next(new ErrorResponse(`Usuário de id ${id} não encontrado`, 404));
  }

  updatedUser = await User.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ sucesso: true, data: updatedUser });
});

// @desc      Delete user
// @route     PUT /api/v1/users/:id
// @access    Private
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const userToDelete = await User.findById(id);

  if (!userToDelete) {
    return next(new ErrorResponse(`Usuário de id ${id} não encontrado`, 404));
  }

  await userToDelete.remove();

  res.status(200).json({ sucesso: true, data: {} });
});
