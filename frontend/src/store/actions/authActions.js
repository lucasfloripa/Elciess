import { LOGIN } from "./types";
import axios from "axios";

export const login = (email, senha) => async (dispatch) => {
  const res = await axios.post("http://localhost:5000/api/v1/auth/login", {
    email,
    senha,
  });

  return dispatch({
    type: LOGIN,
    payload: res.data,
  });
};
