import axios from "axios";
import {
  GET_USER,
  GET_USERS,
  DELETE_USER,
  CREATE_USER,
  UPDATE_USER,
} from "./types";

export const getUser = (id) => async (dispatch) => {
  const res = await axios.get(`http://localhost:5000/api/v1/users/${id}`);

  return dispatch({
    type: GET_USER,
    payload: res.data,
  });
};

export const getUsers = () => async (dispatch) => {
  const res = await axios.get("http://localhost:5000/api/v1/users");

  return dispatch({
    type: GET_USERS,
    payload: res.data,
  });
};

export const createUser = (newUser) => async (dispatch) => {
  const res = await axios.post("http://localhost:5000/api/v1/users", newUser);

  return dispatch({
    type: CREATE_USER,
    payload: res.data,
  });
};

export const updateUser = (updatedUser) => async (dispatch) => {
  const res = await axios.put(
    `http://localhost:5000/api/v1/users/${updatedUser._id}`,
    updatedUser
  );

  return dispatch({
    type: UPDATE_USER,
    payload: res.data,
  });
};

export const deleteUser = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/api/v1/users/${id}`);

  return dispatch({
    type: DELETE_USER,
    payload: id,
  });
};
