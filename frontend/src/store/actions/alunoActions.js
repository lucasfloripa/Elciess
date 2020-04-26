import axios from "axios";
import setAuthorizationToken from "../../utils/setAuthorizationToken";
import {
  GET_ALUNO,
  GET_ALUNOS,
  DELETE_ALUNO,
  UPDATE_ALUNO,
  CREATE_ALUNO,
  LOGIN,
  LOGOUT,
} from "./types";

export const getAlunos = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/api/v1/alunos");

  return dispatch({
    type: GET_ALUNOS,
    payload: res.data,
  });
};

export const getAluno = (id) => async (dispatch) => {
  const res = await axios.get(`http://localhost:5000/api/v1/alunos/${id}`);

  return dispatch({
    type: GET_ALUNO,
    payload: res.data,
  });
};

export const updateAluno = (updateAluno) => async (dispatch) => {
  const res = await axios.put(
    `http://localhost:5000/api/v1/alunos/${updateAluno._id}`,
    updateAluno
  );

  return dispatch({
    type: UPDATE_ALUNO,
    payload: res.data,
  });
};

export const deleteAluno = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/api/v1/alunos/${id}`);

  setAuthorizationToken(false);

  localStorage.removeItem("token");

  return (
    dispatch({
      type: DELETE_ALUNO,
      payload: id,
    }),
    dispatch({
      type: LOGOUT,
    })
  );
};

export const createAluno = (novoAluno) => async (dispatch) => {
  const res = await axios.post(
    "http://localhost:5000/api/v1/alunos",
    novoAluno
  );

  const { token } = res.data;

  setAuthorizationToken(token);

  localStorage.setItem("token", JSON.stringify(token));

  return (
    dispatch({
      type: CREATE_ALUNO,
      payload: res.data,
    }),
    dispatch({
      type: LOGIN,
    })
  );
};
