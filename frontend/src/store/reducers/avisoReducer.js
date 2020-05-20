import {
  GET_AVISOS,
  GET_AVISOS_BY_TURMA_ALUNO,
  CREATE_AVISO,
  UPDATE_AVISO,
  DELETE_AVISO,
} from "../actions/types";

const INITIAL_STATE = {
  avisos: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_AVISOS:
      return {
        ...state,
        avisos: action.payload,
      };
    case GET_AVISOS_BY_TURMA_ALUNO:
      return {
        ...state,
        avisos: action.payload,
      };
    case CREATE_AVISO:
      return {
        ...state,
        avisos: [action.payload, ...state.avisos],
      };
    case UPDATE_AVISO:
      return {
        ...state,
        avisos: state.avisos.map((aviso) =>
          aviso.id === action.payload.data_id ? (aviso = action.payload) : aviso
        ),
      };
    case DELETE_AVISO:
      return {
        ...state,
        avisos: [state.avisos.filter((aviso) => aviso !== action.payload)],
      };
    default:
      return state;
  }
}
