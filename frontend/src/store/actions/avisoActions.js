import axios from "axios";
import {
  GET_AVISOS,
  GET_AVISOS_BY_TURMA_ALUNO,
  GET_AVISOS_BY_PROF_LOGADO,
  CREATE_AVISO,
  UPDATE_AVISO,
  DELETE_AVISO,
} from "./types";

export const getAvisos = () => async (dispatch) => {
  const res = await axios.get(`http://localhost:5000/api/v1/avisos`);

  return dispatch({
    type: GET_AVISOS,
    payload: res.data.data,
  });
};

export const getAvisosByTurmaAluno = () => async (dispatch) => {
  const res = await axios.get(`http://localhost:5000/api/v1/avisos/turmaAluno`);

  return dispatch({
    type: GET_AVISOS_BY_TURMA_ALUNO,
    payload: res.data.data,
  });
};

export const getAvisosByProfLogado = () => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:5000/api/v1/avisos/professorLogado`
  );

  return dispatch({
    type: GET_AVISOS_BY_PROF_LOGADO,
    payload: res.data.data,
  });
};

export const createAviso = (novoAviso) => async (dispatch) => {
  const res = await axios.post(
    `http://localhost:5000/api/v1/avisos`,
    novoAviso
  );

  return dispatch({
    type: CREATE_AVISO,
    payload: res.data,
  });
};

export const updateAviso = (id, novoAviso) => async (dispatch) => {
  const res = await axios.put(
    `http://localhost:5000/api/v1/avisos/${id}`,
    novoAviso
  );

  return dispatch({
    type: UPDATE_AVISO,
    payload: res.data,
  });
};

export const deleteAviso = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/api/v1/avisos/${id}`);

  return dispatch({
    type: DELETE_AVISO,
    payload: {},
  });
};
