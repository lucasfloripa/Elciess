import axios from "axios";
import setAuthorizationToken from "../../utils/setAuthorizationToken";
import {
  GET_PROFESSOR,
  GET_PROFESSORES,
  GET_PROFESSORES_BY_TURMA,
  DELETE_PROFESSOR,
  UPDATE_PROFESSOR,
  CREATE_PROFESSOR,
  LOGIN,
  LOGOUT,
} from "./types";

export const getProfessores = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/api/v1/professores");

  return dispatch({
    type: GET_PROFESSORES,
    payload: res.data,
  });
};

export const getProfessor = (id) => async (dispatch) => {
  const res = await axios.get(`http://localhost:5000/api/v1/professores/${id}`);

  return dispatch({
    type: GET_PROFESSOR,
    payload: res.data,
  });
};

export const getProfessoresByTurma = (id) => async (dispatch) => {
  const res = axios.get(
    `http://localhost:5000/api/v1/turmas/${id}/professores`
  );

  return dispatch({
    type: GET_PROFESSORES_BY_TURMA,
    payload: res.data,
  });
};

export const createProfessor = (novoProfessor) => async (dispatch) => {
  const res = await axios.post(
    "http://localhost:5000/api/v1/professores",
    novoProfessor
  );

  const { token } = res.data;

  setAuthorizationToken(token);

  localStorage.setItem("token", JSON.stringify(token));

  return (
    dispatch({
      type: CREATE_PROFESSOR,
      payload: res.data,
    }),
    dispatch({
      type: LOGIN,
    })
  );
};

export const updateProfessor = (updateProfessor) => async (dispatch) => {
  const res = await axios.put(
    `http://localhost:5000/api/v1/professores/${updateProfessor._id}`,
    updateProfessor
  );

  return dispatch({
    type: UPDATE_PROFESSOR,
    payload: res.data,
  });
};

export const deleteProfessor = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/api/v1/professor/${id}`);

  setAuthorizationToken(false);

  localStorage.removeItem("token");

  return (
    dispatch({
      type: DELETE_PROFESSOR,
      payload: id,
    }),
    dispatch({
      type: LOGOUT,
    })
  );
};
