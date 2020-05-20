const ErrorResponse = require("../utils/errorResponse");
const errorHandler = (err, req, res, next) => {
  let message,
    error = { ...err };
  error.message = err.message;

  console.log(err);

  // Bad ObjectId
  if (err.name === "CastError") {
    message = `Recurso com id ${err.value} não encontrado`;
    error = new ErrorResponse(message, 404);
  }

  // Duplicate key
  if (err.code === 11000) {
    message = `Valor de campo duplicado`;
    error = new ErrorResponse(message, 400);
  }

  // Validation error
  if (err.name === "ValidationError") {
    message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    error: error.message || "Server Error",
    errorType: "erro",
  });
};

module.exports = errorHandler;
