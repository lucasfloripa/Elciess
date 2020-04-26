import { LOGIN, LOGOUT, SET_USUARIO_ATUAL } from "../actions/types";

const INITIAL_STATE = { autenticado: false, usuario: {} };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        autenticado: true,
      };
    case LOGOUT:
      return {
        ...state,
        autenticado: false,
      };
    case SET_USUARIO_ATUAL:
      return {
        ...state,
        usuario: action.payload,
        autenticado: true,
      };
    default:
      return {
        ...state,
      };
  }
}
