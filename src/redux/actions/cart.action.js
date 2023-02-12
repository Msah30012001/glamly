import { CartConstant } from "../constants";

const {
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILURE,
  POST_CART_REQUEST,
  POST_CART_SUCCESS,
  POST_CART_FAILURE,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILURE,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILURE,
  SEARCH_CART_REQUEST,
  SEARCH_CART_SUCCESS,
  SEARCH_CART_FAILURE,
} = CartConstant;

export const fetchCartRequest = () => {
  return {
    type: FETCH_CART_REQUEST,
  };
};

export const fetchCartSuccess = (data) => {
  return {
    type: FETCH_CART_SUCCESS,
    payload: data,
  };
};

export const fetchCartFailure = (data) => {
  return {
    type: FETCH_CART_FAILURE,
    payload: data,
  };
};

export const postCartRequest = () => {
  return {
    type: POST_CART_REQUEST,
  };
};

export const postCartSuccess = (data) => {
  return {
    type: POST_CART_SUCCESS,
    payload: data,
  };
};

export const postCartFailure = (data) => {
  return {
    type: POST_CART_FAILURE,
    payload: data,
  };
};

export const updateCartRequest = () => {
  return {
    type: UPDATE_CART_REQUEST,
  };
};

export const updateCartSuccess = (data) => {
  return {
    type: UPDATE_CART_SUCCESS,
    payload: data,
  };
};

export const updateCartFailure = (data) => {
  return {
    type: UPDATE_CART_FAILURE,
    payload: data,
  };
};

export const deleteCartRequest = () => {
  return {
    type: DELETE_CART_REQUEST,
  };
};

export const deleteCartSuccess = (data) => {
  return {
    type: DELETE_CART_SUCCESS,
    payload: data,
  };
};

export const deleteCartFailure = (data) => {
  return {
    type: DELETE_CART_FAILURE,
    payload: data,
  };
};

export const searchCartRequest = () => {
  return {
    type: SEARCH_CART_REQUEST,
  };
};

export const searchCartSuccess = (data) => {
  return {
    type: SEARCH_CART_SUCCESS,
    payload: data,
  };
};

export const searchCartFailure = (data) => {
  return {
    type: SEARCH_CART_FAILURE,
    payload: data,
  };
};
