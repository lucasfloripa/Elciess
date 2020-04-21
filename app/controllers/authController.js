const User = require("../models/User"),
  asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/errorResponse");

// @desc      Login
// @route     POST /api/v1/auth/login
// @acess     Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, senha } = req.body;

  // Validate email e senha
  if (!email || !senha) {
    return next();
  }

  const user = await User.findOne({ email }).select("+senha");

  if (!user) {
    return next();
  }

  // Check if password matches
  const isMatch = await user.matchPassoword(senha);

  if (!isMatch) {
    return next();
  }

  // Create token
  const token = user.getSignedJwtToken();

  res.status(200).json({ sucesso: true, token });
});

// @desc      Logout
// @route     GET /api/v1/auth/logout
// @acess     Private
exports.logout = asyncHandler(async (req, res, next) => {
  res.status(200).json({ sucesso: true });
});

// @desc      Get usuário logado
// @route     GET /api/v1/auth/me
// @acess     Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const { id } = req.user;

  const user = await User.findById(id);

  if (!user) {
    return next(new ErrorResponse(`Usuário com id ${id} não encontrado`, 404));
  }

  res.status(200).json({ sucesso: true, data: user });
});
