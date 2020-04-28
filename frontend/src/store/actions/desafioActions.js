const axios = require("axios");
const {
  GET_DESAFIO,
  GET_DESAFIOS,
  CREATE_DESAFIO,
  DELETE_DESAFIO,
  UPDATE_DESAFIO,
} = require("./types");

export const getDesafios = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/api/v1/desafios");

  return dispatch({
    type: GET_DESAFIOS,
    payload: res.data,
  });
};

export const getDesafio = (id) => async (dispatch) => {
  const res = await axios.get(`http://localhost:5000/api/v1/desafios/${id}`);

  return dispatch({
    type: GET_DESAFIO,
    payload: res.data,
  });
};

export const createDesafio = (novoDesafio) => async (dispatch) => {
  const res = await axios.post(
    "http://localhost:5000/api/v1/desafios",
    novoDesafio
  );

  return dispatch({
    type: CREATE_DESAFIO,
    payload: res.data,
  });
};

export const updateDesafio = (updateDesafio) => async (dispatch) => {
  const res = axios.put(
    `http://localhost:5000/api/v1/desafios/${updateDesafio._id}`,
    updateDesafio
  );

  return dispatch({
    type: UPDATE_DESAFIO,
    payload: res.data,
  });
};

export const deleteDesafio = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/api/v1/desafios/${id}`);

  return dispatch({
    type: DELETE_DESAFIO,
  });
};
