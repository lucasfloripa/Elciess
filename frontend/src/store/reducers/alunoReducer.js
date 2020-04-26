import {
  GET_ALUNO,
  GET_ALUNOS,
  DELETE_ALUNO,
  UPDATE_ALUNO,
  CREATE_ALUNO,
} from "../actions/types";

const INITIAL_STATE = {
  alunos: [],
  aluno: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALUNO:
      return {
        ...state,
        aluno: action.payload,
      };
    case GET_ALUNOS:
      return {
        ...state,
        alunos: action.payload,
      };
    case CREATE_ALUNO:
      return {
        ...state,
        alunos: [action.payload, ...state.alunos],
      };
    case DELETE_ALUNO:
      return {
        ...state,
        alunos: state.alunos.filter((aluno) => aluno !== action.payload),
      };
    case UPDATE_ALUNO:
      return {
        ...state,
        alunos: state.alunos.map((aluno) =>
          aluno.id === action.payload.id ? (aluno = action.payload) : aluno
        ),
      };
    default:
      return state;
  }
}
