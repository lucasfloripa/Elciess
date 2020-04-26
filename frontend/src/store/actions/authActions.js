import { LOGIN, LOGOUT, SET_USUARIO_ATUAL } from "./types";
import axios from "axios";
import setAuthorizationToken from "../../utils/setAuthorizationToken";

export const login = (email, senha) => async (dispatch) => {
  const res = await axios.post("http://localhost:5000/api/v1/auth/login", {
    email,
    senha,
  });

  const { token } = res.data;

  setAuthorizationToken(token);

  localStorage.setItem("token", JSON.stringify(token));

  return dispatch({
    type: LOGIN,
  });
};

export const logout = () => async (dispatch) => {
  await axios.get("http://localhost:5000/api/v1/auth/logout");

  setAuthorizationToken(false);

  localStorage.removeItem("token");

  return dispatch({
    type: LOGOUT,
  });
};

export const setUsuarioAtual = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/api/v1/auth/me");

  return dispatch({
    type: SET_USUARIO_ATUAL,
    payload: res.data,
  });
};
