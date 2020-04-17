const User = require("../models/User"),
  asyncHandler = require("../middlewares/asyncHandler");

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

  console.log("123");

  res.status(200).json({ sucesso: true, token });
});
