import { LOGIN, LOGOUT, SET_CURRENT_USER } from "../actions/types";

const INITIAL_STATE = { isAuthenticated: false, user: {} };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    default:
      return {
        ...state,
      };
  }
}
