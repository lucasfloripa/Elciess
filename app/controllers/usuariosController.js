const Usuarios = require("../models/Usuarios"),
  asyncHandler = require("../middlewares/asyncHandler"),
  ErrorResponse = require("../utils/errorResponse"),
  mongoose = require("mongoose"),
  Grid = require("gridfs-stream");

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
// @route     DELETE /api/v1/usuarios/:id
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

// @desc      Update senha usuario
// @route     PUT /api/v1/usuarios/usuarioAtual
// @access    Private
exports.updateSenhaUsuario = asyncHandler(async (req, res, next) => {
  const { _id } = req.usuario;
  const { senhaAtual, novaSenha } = req.body;

  let usuario = await Usuarios.findById(_id).select("+senha");

  if (!usuario) {
    return next(new ErrorResponse(`Usuário com id ${_id} não encontrado`, 404));
  }

  const isMatch = await usuario.matchPassword(senhaAtual);

  if (!isMatch) {
    return next(new ErrorResponse("Senha atual inválida", 401));
  }

  const hashedNovoSenha = await usuario.updateSenha(novaSenha);

  usuario = await Usuarios.findByIdAndUpdate(
    _id,
    { senha: hashedNovoSenha },
    {
      new: true,
      runValidators: true,
    }
  );

  res
    .status(200)
    .json({ mensagem: "Senha alterada!", mensagemTipo: "sucesso" });
});

// @desc      GET avatar fotos
// @route     GET /api/v1/usuarios/avatar/fotos
// @access    Private
exports.getAvatarFotos = asyncHandler(async (req, res, next) => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  const gfs = Grid(conn.connection.db, mongoose.mongo);
  gfs.collection("uploads");
  let fotos;

  gfs.files.find().toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "Não existe fotos",
      });
    }

    fotosId = files
      .filter((file) => file.contentType.startsWith("image"))
      .map((file) => file._id);

    return res.json({ sucesso: true, data: fotosId });
  });
});

// @desc      Display avatar
// @route     GET /api/v1/usuarios/avatar/fotos/:id
// @access    Private
exports.displayAvatar = asyncHandler(async (req, res, next) => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  const gfs = Grid(conn.connection.db, mongoose.mongo);
  gfs.collection("uploads");

  const fotoId = new mongoose.mongo.ObjectId(req.params.id);

  gfs.files.findOne({ _id: fotoId }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({ err: "Não existe arquivo" });
    }

    const readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
  });
});

// @desc      SET perfil avatar
// @route     PUT /api/v1/usuarios/avatar/setFoto/:avatarId
// @access    Private
exports.setAvatar = asyncHandler(async (req, res, next) => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  const gfs = Grid(conn.connection.db, mongoose.mongo);
  gfs.collection("uploads");

  const { _id } = req.usuario;
  const { avatarId } = req.params;

  let usuario = await Usuarios.findById(_id);

  if (!usuario) {
    return next(new ErrorResponse(`Usuário com id ${_id} não encontrado`, 404));
  }

  const fileId = new mongoose.mongo.ObjectId(avatarId);

  gfs.files.findOne({ _id: fileId }, async (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "Não existe foto",
      });
    }

    usuario = await Usuarios.findByIdAndUpdate(
      _id,
      {
        avatar: file._id,
      },
      { new: true, runValidators: true }
    );
  });
  res.status(200).json({ sucesso: "Avatar alterado com sucesso" });
});
