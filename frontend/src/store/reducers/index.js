import { combineReducers } from "redux";
import usuarioReducer from "./usuarioReducer";
import authReducer from "./authReducer";
import alunoReducer from "./alunoReducer";
import professorReducer from "./professorReducer";

export default combineReducers({
  usuario: usuarioReducer,
  auth: authReducer,
  aluno: alunoReducer,
  professor: professorReducer,
});
