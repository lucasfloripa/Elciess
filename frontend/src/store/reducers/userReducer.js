import {
  GET_USER,
  GET_USERS,
  DELETE_USER,
  CREATE_USER,
  UPDATE_USER,
} from "../actions/types";

const INITIAL_STATE = {
  users: [],
  user: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user !== action.payload),
      };
    case CREATE_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? (user = action.payload) : user
        ),
      };
    default:
      return state;
  }
}
