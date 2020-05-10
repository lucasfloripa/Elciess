const mongoose = require("mongoose");

const AvatarSchema = new mongoose.Schema({
  img: { data: Buffer, contentType: String },
  // name: String,
  // size: Number,
  // key: String,
  // url: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Avatar", AvatarSchema);
