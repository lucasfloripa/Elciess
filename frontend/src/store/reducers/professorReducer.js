import {
  GET_PROFESSOR,
  GET_PROFESSORES,
  GET_PROFESSORES_BY_TURMA,
  DELETE_PROFESSOR,
  UPDATE_PROFESSOR,
  CREATE_PROFESSOR,
} from "../actions/types";

const INITIAL_STATE = {
  professores: [],
  professor: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_PROFESSOR:
      return {
        ...state,
        professor: action.payload,
      };
    case GET_PROFESSORES:
      return {
        ...state,
        professores: action.payload,
      };
    case GET_PROFESSORES_BY_TURMA:
      return {
        ...state,
        professores: action.payload,
      };
    case CREATE_PROFESSOR:
      return {
        ...state,
        professores: [action.payload, ...state.professores],
      };
    case DELETE_PROFESSOR:
      return {
        ...state,
        professores: state.professores.filter(
          (professor) => professor !== action.payload
        ),
      };
    case UPDATE_PROFESSOR:
      return {
        ...state,
        professores: state.professores.map((professor) =>
          professor.id === action.payload.id
            ? (professor = action.payload)
            : professor
        ),
      };
    default:
      return state;
  }
}
