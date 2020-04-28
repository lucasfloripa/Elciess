import {
  GET_TURMA,
  GET_TURMAS,
  DELETE_TURMA,
  UPDATE_TURMA,
  CREATE_TURMA,
} from "../actions/types";

const INITIAL_STATE = {
  turmas: [],
  turma: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TURMA:
      return {
        ...state,
        turma: action.payload,
      };
    case GET_TURMAS:
      return {
        ...state,
        turmas: action.payload,
      };
    case CREATE_TURMA:
      return {
        ...state,
        turmas: [action.payload, ...state.turmas],
      };
    case DELETE_TURMA:
      return {
        ...state,
        turmas: state.turmas.filter((turma) => turma !== action.payload),
      };
    case UPDATE_TURMA:
      return {
        ...state,
        turmas: state.turmas.map((turma) =>
          turma.id === action.payload.id ? (turma = action.payload) : turma
        ),
      };
    default:
      return state;
  }
}
