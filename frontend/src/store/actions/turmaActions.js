const axios = require("axios");
const {
  GET_TURMA,
  GET_TURMAS,
  CREATE_TURMA,
  DELETE_TURMA,
  UPDATE_TURMA,
} = require("./types");

export const getTurmas = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/api/v1/turmas");

  return dispatch({
    type: GET_TURMAS,
    payload: res.data,
  });
};

export const getTurma = (id) => async (dispatch) => {
  const res = await axios.get(`http://localhost:5000/api/v1/turmas/${id}`);

  return dispatch({
    type: GET_TURMA,
    payload: res.data,
  });
};

export const createTurma = (novaTurma) => async (dispatch) => {
  const res = await axios.post(
    "http://localhost:5000/api/v1/turmas",
    novaTurma
  );

  return dispatch({
    type: CREATE_TURMA,
    payload: res.data,
  });
};

export const updateTurma = (updateTurma) => async (dispatch) => {
  const res = axios.put(
    `http://localhost:5000/api/v1/turmas/${updateTurma._id}`,
    updateTurma
  );

  return dispatch({
    type: UPDATE_TURMA,
    payload: res.data,
  });
};

export const deleteTurma = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/api/v1/turmas/${id}`);

  return dispatch({
    type: DELETE_TURMA,
  });
};
