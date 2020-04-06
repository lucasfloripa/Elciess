import axios from "axios";
import {
  GET_ALUNO,
  GET_ALUNOS,
  DELETE_ALUNO,
  CREATE_ALUNO,
  UPDATE_ALUNO,
} from "../actions/types";

export const getAluno = (id) => async (dispatch) => {
  const res = await axios.get(`http://localhost:5000/api/v1/alunos/${id}`);

  return dispatch({
    type: GET_ALUNO,
    payload: res.data,
  });
};

export const getAlunos = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/api/v1/alunos");

  return dispatch({
    type: GET_ALUNOS,
    payload: res.data,
  });
};
export const createAluno = (newAluno) => async (dispatch) => {
  const res = await axios.post("http://localhost:5000/api/v1/alunos", newAluno);

  return dispatch({
    type: CREATE_ALUNO,
    payload: res.data,
  });
};

export const updateAluno = (updatedAluno) => async (dispatch) => {
  const res = await axios.put(
    `http://localhost:5000/api/v1/alunos/${updatedAluno._id}`,
    updatedAluno
  );

  return dispatch({
    type: UPDATE_ALUNO,
    payload: res.data,
  });
};

export const deleteAluno = (id) => async (dispatch) => {
  const res = await axios.delete(`http://localhost:5000/api/v1/alunos/${id}`);

  return dispatch({
    type: DELETE_ALUNO,
    payload: id,
  });
};
