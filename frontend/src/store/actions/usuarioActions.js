import axios from "axios";
import {
  GET_USUARIO,
  GET_USUARIOS,
  DELETE_USUARIO,
  UPDATE_SENHA_USUARIO,
  NOTIFY_USER,
} from "./types";

export const getUsuarios = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/api/v1/usuarios");

  return dispatch({
    type: GET_USUARIOS,
    payload: res.data,
  });
};

export const getUsuario = (id) => async (dispatch) => {
  const res = await axios.get(`http://localhost:5000/api/v1/usuarios/${id}`);

  return dispatch({
    type: GET_USUARIO,
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

export const updateSenhaUsuario = (senhaAtual, novaSenha) => async (
  dispatch
) => {
  let mensagem, mensagemTipo;

  await axios
    .put(`http://localhost:5000/api/v1/usuarios/usuarioAtual`, {
      senhaAtual,
      novaSenha,
    })
    .then(
      (res) => (
        (mensagem = res.data.mensagem), (mensagemTipo = res.data.mensagemTipo)
      )
    )
    .catch(
      (err) => (
        (mensagem = err.response.data.error),
        (mensagemTipo = err.response.data.errorType)
      )
    );

  return (
    dispatch({
      type: UPDATE_SENHA_USUARIO,
    }),
    dispatch({
      type: NOTIFY_USER,
      mensagem,
      mensagemTipo,
    })
  );
};
