const express = require("express"),
  dotenv = require("dotenv"),
  morgan = require("morgan"),
  cors = require("cors"),
  connectDB = require("./config/db"),
  alunosRoute = require("./routes/alunosRoute"),
  professoresRoute = require("./routes/professoresRoute"),
  desafiosRoute = require("./routes/desafiosRoute"),
  turmasRoute = require("./routes/turmasRoute"),
  authRoute = require("./routes/authRoute"),
  usuariosRoute = require("./routes/usuariosRoute");

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

// Cors
app.use(cors());

// Montando as rotas
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/alunos", alunosRoute);
app.use("/api/v1/professores", professoresRoute);
app.use("/api/v1/turmas", turmasRoute);
app.use("/api/v1/desafios", desafiosRoute);
app.use("/api/v1/usuarios", usuariosRoute);

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
