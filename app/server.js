const express = require("express"),
  dotenv = require("dotenv"),
  morgan = require("morgan"),
  connectDB = require("./config/db"),
  alunosRoute = require("./routes/alunosRoute");

// Carregando variáveis de sistema
dotenv.config({ path: "./config/config.env" });
const { PORT, NODE_ENV } = process.env;

// Conectando com o database
connectDB();

// Criando App do express
const app = express();

// Middleware Body Parser
app.use(express.json());

// Morgan
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Montando as rotas
app.use("/api/v1/alunos", alunosRoute);

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
