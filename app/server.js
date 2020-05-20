const express = require("express"),
  dotenv = require("dotenv"),
  morgan = require("morgan"),
  cors = require("cors"),
  errorHandler = require("./middlewares/error"),
  connectDB = require("./config/db");

const routes = ({
  adminRouter,
  alunosDesafiosRouter,
  alunosRouter,
  authRouter,
  desafiosRouter,
  professoresTurmasRouter,
  professoresRouter,
  turmasRouter,
  usuariosRouter,
  avisosRouter,
} = require("./routes"));

// Carregando variáveis de sistema
dotenv.config({ path: "./config/config.env" });
const { PORT, NODE_ENV } = process.env;

// Conectando com o database
connectDB();

// Criando App do express
const app = express();

// Middleware Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Morgan
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Cors
app.use(cors());

// Montando as rotas
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/alunos", alunosRouter);
app.use("/api/v1/professores", professoresRouter);
app.use("/api/v1/turmas", turmasRouter);
app.use("/api/v1/professoresTurmas", professoresTurmasRouter);
app.use("/api/v1/alunosDesafios", alunosDesafiosRouter);
app.use("/api/v1/desafios", desafiosRouter);
app.use("/api/v1/usuarios", usuariosRouter);
app.use("/api/v1/avisos", avisosRouter);
app.use("/api/v1/admin", adminRouter);

app.use(errorHandler);

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
