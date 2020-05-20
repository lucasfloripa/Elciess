const Usuarios = require("../models/Usuarios"),
  asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/errorResponse");

// @desc      Login
// @route     POST /api/v1/auth/login
// @acess     Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, senha } = req.body;

  // Validate email e senha
  if (!email || !senha) {
    return next(new ErrorResponse("Credenciais inválidas", 401));
  }

  const usuario = await Usuarios.findOne({ email }).select("+senha");

  if (!usuario) {
    return next(new ErrorResponse("Usuário não encontrado", 404));
  }

  // Check if password matches
  const isMatch = await usuario.matchPassword(senha);

  if (!isMatch) {
    return next(new ErrorResponse("Senha inválida", 401));
  }

  // Create token
  const token = usuario.getSignedJwtToken();

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
  const { _id } = req.usuario;

  let usuario;

  if (req.usuario.tipoUsuario === "Aluno") {
    usuario = await Usuarios.findById(_id)
      .populate({
        path: "desafios",
        populate: {
          path: "professor",
        },
      })
      .select("+senha");
  } else {
    usuario = await Usuarios.findById(_id);
  }

  if (!usuario) {
    return next(new ErrorResponse(`Usuário com id ${_id} não encontrado`, 404));
  }

  res.status(200).json({ sucesso: true, data: usuario });
});
