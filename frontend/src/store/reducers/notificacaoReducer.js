import { NOTIFY_USER, CLEAN_NOTIFY_USER } from "../actions/types";

const INITIAL_STATE = {
  mensagem: null,
  mensagemTipo: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case NOTIFY_USER:
      return {
        ...state,
        mensagem: action.mensagem,
        mensagemTipo: action.mensagemTipo,
      };
    case CLEAN_NOTIFY_USER:
      return {
        ...state,
        mensagem: action.mensagem,
        mensagemTipo: action.mensagemTipo,
      };
    default:
      return state;
  }
}
