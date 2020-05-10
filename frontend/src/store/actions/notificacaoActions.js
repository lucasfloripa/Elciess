import { NOTIFY_USER, CLEAN_NOTIFY_USER } from "./types";

export const notifyUser = (mensagem, mensagemTipo) => {
  return {
    type: NOTIFY_USER,
    mensagem,
    mensagemTipo,
  };
};

export const cleanNotifyUser = () => {
  return {
    type: CLEAN_NOTIFY_USER,
    mensagem: null,
    mensagemTipo: null,
  };
};
