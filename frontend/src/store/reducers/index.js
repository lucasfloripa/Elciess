import { combineReducers } from "redux";
import usuarioReducer from "./usuarioReducer";
import authReducer from "./authReducer";
import alunoReducer from "./alunoReducer";
import professorReducer from "./professorReducer";
import turmaReducer from "./turmaReducer";
import desafioReducer from "./desafioReducer";
import notificacaoReducer from "./notificacaoReducer";

export default combineReducers({
  usuario: usuarioReducer,
  auth: authReducer,
  aluno: alunoReducer,
  professor: professorReducer,
  turma: turmaReducer,
  desafios: desafioReducer,
  notificacao: notificacaoReducer,
});
