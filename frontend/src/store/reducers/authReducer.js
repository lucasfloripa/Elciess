import { LOGIN } from "../actions/types";

const INITIAL_STATE = {
  auth: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
}