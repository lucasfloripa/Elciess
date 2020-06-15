import {
  GET_USUARIO,
  GET_USUARIOS,
  DELETE_USUARIO,
  GET_AVATAR_FOTOS,
  DISPLAY_AVATAR,
  SET_USUARIO_AVATAR,
} from "../actions/types";

const INITIAL_STATE = {
  usuarios: [],
  usuario: {},
  avataresId: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USUARIOS:
      return {
        ...state,
        usuarios: action.payload,
      };
    case GET_USUARIO:
      return {
        ...state,
        usuario: action.payload,
      };
    case DELETE_USUARIO:
      return {
        ...state,
        usuarios: state.usuarios.filter(
          (usuario) => usuario !== action.payload
        ),
      };
    case GET_AVATAR_FOTOS:
      return {
        ...state,
        avataresId: action.payload,
      };
    case SET_USUARIO_AVATAR:
      return {
        ...state,
        usuario: action.payload,
      };
    default:
      return state;
  }
}
