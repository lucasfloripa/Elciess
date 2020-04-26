import { GET_USUARIO, GET_USUARIOS, DELETE_USUARIO } from "../actions/types";

const INITIAL_STATE = {
  usuarios: [],
  usuario: {},
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
        usuarios: state.usuarios.filter((usuario) => usuario !== action.payload),
      };
    default:
      return state;
  }
}
