import {
  GET_DESAFIO,
  GET_DESAFIOS,
  GET_DESAFIOS_BY_TURMA,
  DELETE_DESAFIO,
  UPDATE_DESAFIO,
  CREATE_DESAFIO,
} from "../actions/types";

const INITIAL_STATE = {
  desafios: [],
  desafio: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_DESAFIO:
      return {
        ...state,
        desafio: action.payload,
      };
    case GET_DESAFIOS:
      return {
        ...state,
        desafios: action.payload,
      };
    case GET_DESAFIOS_BY_TURMA:
      return {
        ...state,
        desafios: action.payload,
      };
    case CREATE_DESAFIO:
      return {
        ...state,
        desafios: [action.payload, ...state.desafios],
      };
    case DELETE_DESAFIO:
      return {
        ...state,
        desafios: state.desafios.filter(
          (desafio) => desafio !== action.payload
        ),
      };
    case UPDATE_DESAFIO:
      return {
        ...state,
        desafios: state.desafios.data.map((desafio) =>
          desafio._id === action.payload.id
            ? (desafio = action.payload)
            : desafio
        ),
      };
    default:
      return state;
  }
}
