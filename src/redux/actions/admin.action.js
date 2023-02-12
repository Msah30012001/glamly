import { AdminConstant } from "../constants";

const {
  FETCH_ADMIN_REQUEST,
  FETCH_ADMIN_SUCCESS,
  FETCH_ADMIN_FAILURE,
  POST_ADMIN_REQUEST,
  POST_ADMIN_SUCCESS,
  POST_ADMIN_FAILURE,
  UPDATE_ADMIN_REQUEST,
  UPDATE_ADMIN_SUCCESS,
  UPDATE_ADMIN_FAILURE,
  DELETE_ADMIN_REQUEST,
  DELETE_ADMIN_SUCCESS,
  DELETE_ADMIN_FAILURE,
  SEARCH_ADMIN_REQUEST,
  SEARCH_ADMIN_SUCCESS,
  SEARCH_ADMIN_FAILURE,
  AUTH_ADMIN_REQUEST,
  AUTH_ADMIN_SUCCESS,
  AUTH_ADMIN_FAILURE,
  DESTROY_AUTH_ADMIN_REQUEST,
  DESTROY_AUTH_ADMIN_SUCCESS,
  DESTROY_AUTH_ADMIN_FAILURE,
} = AdminConstant;

export const fetchAdminRequest = () => {
  return {
    type: FETCH_ADMIN_REQUEST,
  };
};

export const fetchAdminSuccess = (data) => {
  return {
    type: FETCH_ADMIN_SUCCESS,
    payload: data,
  };
};

export const fetchAdminFailure = (data) => {
  return {
    type: FETCH_ADMIN_FAILURE,
    payload: data,
  };
};

export const authAdminRequest = () => {
  return {
    type: AUTH_ADMIN_REQUEST,
  };
};

export const authAdminSuccess = (data) => {
  return {
    type: AUTH_ADMIN_SUCCESS,
    payload: data,
  };
};

export const authAdminFailure = (data) => {
  return {
    type: AUTH_ADMIN_FAILURE,
    payload: data,
  };
};

export const destroyAuthAdminRequest = () => {
  return {
    type: DESTROY_AUTH_ADMIN_REQUEST,
  };
};

export const destroyAuthAdminSuccess = (data) => {
  return {
    type: DESTROY_AUTH_ADMIN_SUCCESS,
    payload: data,
  };
};

export const destroyAuthAdminFailure = (data) => {
  return {
    type: DESTROY_AUTH_ADMIN_FAILURE,
    payload: data,
  };
};

export const postAdminRequest = () => {
  return {
    type: POST_ADMIN_REQUEST,
  };
};

export const postAdminSuccess = (data) => {
  return {
    type: POST_ADMIN_SUCCESS,
    payload: data,
  };
};

export const postAdminFailure = (data) => {
  return {
    type: POST_ADMIN_FAILURE,
    payload: data,
  };
};

export const updateAdminRequest = () => {
  return {
    type: UPDATE_ADMIN_REQUEST,
  };
};

export const updateAdminSuccess = (data) => {
  return {
    type: UPDATE_ADMIN_SUCCESS,
    payload: data,
  };
};

export const updateAdminFailure = (data) => {
  return {
    type: UPDATE_ADMIN_FAILURE,
    payload: data,
  };
};

export const deleteAdminRequest = () => {
  return {
    type: DELETE_ADMIN_REQUEST,
  };
};

export const deleteAdminSuccess = (data) => {
  return {
    type: DELETE_ADMIN_SUCCESS,
    payload: data,
  };
};

export const deleteAdminFailure = (data) => {
  return {
    type: DELETE_ADMIN_FAILURE,
    payload: data,
  };
};

export const searchAdminRequest = () => {
  return {
    type: SEARCH_ADMIN_REQUEST,
  };
};

export const searchAdminSuccess = (data) => {
  return {
    type: SEARCH_ADMIN_SUCCESS,
    payload: data,
  };
};

export const searchAdminFailure = (data) => {
  return {
    type: SEARCH_ADMIN_FAILURE,
    payload: data,
  };
};
