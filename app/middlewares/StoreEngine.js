const crypto = require("crypto"),
  multer = require("multer"),
  GridFsStorage = require("multer-gridfs-storage");

const storage = new GridFsStorage({
  url:
    "mongodb+srv://ElciessProject:planeta05@elciessproject-0dmyp.mongodb.net/elciess?retryWrites=true&w=majority",
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(4, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = `${buf.toString("hex")}-${file.originalname}`;
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

module.exports = upload;
