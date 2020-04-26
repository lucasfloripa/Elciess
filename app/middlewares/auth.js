const jwt = require("jsonwebtoken"),
  asyncHandler = require("./asyncHandler"),
  ErrorResponse = require("../utils/errorResponse"),
  Usuarios = require("../models/Usuarios");

exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Acesso não autorizado nesta rota", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.usuario = await Usuarios.findById(decoded.id);

    next();
  } catch (error) {
    return next(new ErrorResponse("Acesso não autorizado nesta rota", 401));
  }
});
