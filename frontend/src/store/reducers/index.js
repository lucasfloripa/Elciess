import { combineReducers } from "redux";
import alunoReducer from "./alunoReducer";

export default combineReducers({
  aluno: alunoReducer,
});
