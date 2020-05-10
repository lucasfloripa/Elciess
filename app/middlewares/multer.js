const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
const ErrorReponse = require("../utils/errorResponse");

const multerConfig = {
  dest: path.resolve(__dirname, "..", "tmp", "uploads"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "tmp", "uploads"));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(8, (err, hash) => {
        if (err) cb(err);
        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new ErrorReponse("Arquivo com formato inválido", 400));
    }
  },
};

module.exports = multer(multerConfig).single("file");
