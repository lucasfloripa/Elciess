import axios from "axios";
import {
  GET_DESAFIO,
  GET_DESAFIOS,
  GET_DESAFIOS_BY_TURMA,
  CREATE_DESAFIO,
  DELETE_DESAFIO,
  UPDATE_DESAFIO,
  UPLOAD_FILE_DESAFIO,
  DOWNLOAD_FILE_DESAFIO,
} from "./types";

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

export const getDesafioByTurma = () => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:5000/api/v1/desafios/professores/turma`
  );

  return dispatch({
    type: GET_DESAFIOS_BY_TURMA,
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

  const data = await res;

  return dispatch({
    type: UPDATE_DESAFIO,
    payload: data.data.data,
  });
};

export const deleteDesafio = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/api/v1/desafios/${id}`);

  return dispatch({
    type: DELETE_DESAFIO,
  });
};

export const uploadFileDesafio = (id) => async (dispatch) => {
  const formData = new FormData();
  const txtfile = document.querySelector("#file");
  formData.append("file", txtfile.files[0]);

  const res = await axios.post(
    `http://localhost:5000/api/v1/desafios/upload/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return dispatch({
    type: UPLOAD_FILE_DESAFIO,
    payload: res.data,
  });
};

export const downloadFileDesafio = (id) => async (dispatch) => {
  await axios.get(`http://localhost:5000/api/v1/desafios/download/${id}`);

  return dispatch({
    type: DOWNLOAD_FILE_DESAFIO,
  });
};
