import axios from "axios";
import {
  GET_USUARIO,
  GET_USUARIOS,
  DELETE_USUARIO,
} from "./types";

export const getUsuario = (id) => async (dispatch) => {
  const res = await axios.get(`http://localhost:5000/api/v1/usuarios/${id}`);

  return dispatch({
    type: GET_USUARIO,
    payload: res.data,
  });
};

export const getUsuarios = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/api/v1/usuarios");

  return dispatch({
    type: GET_USUARIOS,
    payload: res.data,
  });
};

export const deleteUsuario = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/api/v1/usuario/${id}`);

  return dispatch({
    type: DELETE_USUARIO,
    payload: id,
  });
};
