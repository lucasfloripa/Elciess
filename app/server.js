const express = require("express"),
  dotenv = require("dotenv"),
  morgan = require("morgan");
connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });
const { PORT, NODE_ENV } = process.env;

// Connect to database
connectDB();

// Create Express app
const app = express();

// Morgan
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const server = app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV}, mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
