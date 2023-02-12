import { OrderConstant } from "../constants";

const {
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILURE,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  SEARCH_ORDER_REQUEST,
  SEARCH_ORDER_SUCCESS,
  SEARCH_ORDER_FAILURE,
} = OrderConstant;

export const fetchOrderRequest = () => {
  return {
    type: FETCH_ORDER_REQUEST,
  };
};

export const fetchOrderSuccess = (data) => {
  return {
    type: FETCH_ORDER_SUCCESS,
    payload: data,
  };
};

export const fetchOrderFailure = (data) => {
  return {
    type: FETCH_ORDER_FAILURE,
    payload: data,
  };
};

export const postOrderRequest = () => {
  return {
    type: POST_ORDER_REQUEST,
  };
};

export const postOrderSuccess = (data) => {
  return {
    type: POST_ORDER_SUCCESS,
    payload: data,
  };
};

export const postOrderFailure = (data) => {
  return {
    type: POST_ORDER_FAILURE,
    payload: data,
  };
};

export const updateOrderRequest = () => {
  return {
    type: UPDATE_ORDER_REQUEST,
  };
};

export const updateOrderSuccess = (data) => {
  return {
    type: UPDATE_ORDER_SUCCESS,
    payload: data,
  };
};

export const updateOrderFailure = (data) => {
  return {
    type: UPDATE_ORDER_FAILURE,
    payload: data,
  };
};

export const deleteOrderRequest = () => {
  return {
    type: DELETE_ORDER_REQUEST,
  };
};

export const deleteOrderSuccess = (data) => {
  return {
    type: DELETE_ORDER_SUCCESS,
    payload: data,
  };
};

export const deleteOrderFailure = (data) => {
  return {
    type: DELETE_ORDER_FAILURE,
    payload: data,
  };
};

export const searchOrderRequest = () => {
  return {
    type: SEARCH_ORDER_REQUEST,
  };
};

export const searchOrderSuccess = (data) => {
  return {
    type: SEARCH_ORDER_SUCCESS,
    payload: data,
  };
};

export const searchOrderFailure = (data) => {
  return {
    type: SEARCH_ORDER_FAILURE,
    payload: data,
  };
};
