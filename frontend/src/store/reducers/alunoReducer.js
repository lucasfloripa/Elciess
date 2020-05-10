import {
  GET_ALUNO,
  GET_ALUNOS,
  DELETE_ALUNO,
  UPDATE_ALUNO,
  CREATE_ALUNO,
  BOUND_ALUNO_DESAFIO,
  UNBOUND_ALUNO_DESAFIO,
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
          aluno.id === action.payload.data._id
            ? (aluno = action.payload)
            : aluno
        ),
      };
    case BOUND_ALUNO_DESAFIO:
      return {
        ...state,
        aluno: action.payload,
      };
    case UNBOUND_ALUNO_DESAFIO:
      return {
        ...state,
        aluno: action.payload,
      };
    default:
      return state;
  }
}
