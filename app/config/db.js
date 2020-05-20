const mongoose = require("mongoose"),
  Grid = require("gridfs-stream");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  // Open stream for upload
  conn.connection.once("open", () => {
    // Init Stream
    let gfs;
    gfs = Grid(conn.connection.db, mongoose.mongo);
    gfs.collection("uploads");
  });

  console.log(`Mongo Connect: ${conn.connection.host}`);
};

module.exports = connectDB;
