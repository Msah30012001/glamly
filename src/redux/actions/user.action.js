import { UserConstant } from "../constants";

const {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
 DESTROY_AUTH_USER_REQUEST,
 DESTROY_AUTH_USER_SUCCESS,
 DESTROY_AUTH_USER_FAILURE,
} = UserConstant;

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};

export const fetchUserFailure = (data) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: data,
  };
};

export const authUserRequest = () => {
  return {
    type: AUTH_USER_REQUEST,
  };
};

export const authUserSuccess = (data) => {
  return {
    type: AUTH_USER_SUCCESS,
    payload: data,
  };
};

export const authUserFailure = (data) => {
  return {
    type: AUTH_USER_FAILURE,
    payload: data,
  };
};

export const destroyAuthUserRequest = () => {
  return {
    type: DESTROY_AUTH_USER_REQUEST,
  };
};

export const destroyAuthUserSuccess = (data) => {
  return {
    type: DESTROY_AUTH_USER_SUCCESS,
    payload: data,
  };
};

export const destroyAuthUserFailure = (data) => {
  return {
    type: DESTROY_AUTH_USER_FAILURE,
    payload: data,
  };
};

export const postUserRequest = () => {
  return {
    type: POST_USER_REQUEST,
  };
};

export const postUserSuccess = (data) => {
  return {
    type: POST_USER_SUCCESS,
    payload: data,
  };
};

export const postUserFailure = (data) => {
  return {
    type: POST_USER_FAILURE,
    payload: data,
  };
};

export const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};

export const updateUserSuccess = (data) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: data,
  };
};

export const updateUserFailure = (data) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: data,
  };
};

export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

export const deleteUserSuccess = (data) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: data,
  };
};

export const deleteUserFailure = (data) => {
  return {
    type: DELETE_USER_FAILURE,
    payload: data,
  };
};

export const searchUserRequest = () => {
  return {
    type: SEARCH_USER_REQUEST,
  };
};

export const searchUserSuccess = (data) => {
  return {
    type: SEARCH_USER_SUCCESS,
    payload: data,
  };
};

export const searchUserFailure = (data) => {
  return {
    type: SEARCH_USER_FAILURE,
    payload: data,
  };
};
