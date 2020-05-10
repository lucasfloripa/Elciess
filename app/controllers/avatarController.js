const Avatar = require("../models/Avatar"),
  ErrorResponse = require("../utils/errorResponse"),
  asyncHandler = require("../middlewares/asyncHandler");

// @desc      Create Avatar
// @route     POST /api/v1/avatares
// @access    Private
exports.getAvatares = asyncHandler(async (req, res, next) => {
  const avatares = await Avatar.find();

  if (!avatares) {
    return next(new ErrorResponse("Avatares não encontrados", 404));
  }

  res.status(200).json({ sucesso: true, data: avatares });
});

// @desc      Create Avatar
// @route     POST /api/v1/avatares
// @access    Private
exports.createAvatar = asyncHandler(async (req, res, next) => {
  const { originalname: name, size, filename: key } = req.file;

  const avatar = await Avatar.create({
    name,
    size,
    key,
    url: " ",
  });

  res.status(200).json({ sucesso: true });
});
