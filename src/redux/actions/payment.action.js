import { PaymentConstant } from "../constants";

const {
  FETCH_PAYMENT_REQUEST,
  FETCH_PAYMENT_SUCCESS,
  FETCH_PAYMENT_FAILURE,
  POST_PAYMENT_REQUEST,
  POST_PAYMENT_SUCCESS,
  POST_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
  DELETE_PAYMENT_REQUEST,
  DELETE_PAYMENT_SUCCESS,
  DELETE_PAYMENT_FAILURE,
  SEARCH_PAYMENT_REQUEST,
  SEARCH_PAYMENT_SUCCESS,
  SEARCH_PAYMENT_FAILURE,
} = PaymentConstant;

export const fetchPaymentRequest = () => {
  return {
    type: FETCH_PAYMENT_REQUEST,
  };
};

export const fetchPaymentSuccess = (data) => {
  return {
    type: FETCH_PAYMENT_SUCCESS,
    payload: data,
  };
};

export const fetchPaymentFailure = (data) => {
  return {
    type: FETCH_PAYMENT_FAILURE,
    payload: data,
  };
};

export const postPaymentRequest = () => {
  return {
    type: POST_PAYMENT_REQUEST,
  };
};

export const postPaymentSuccess = (data) => {
  return {
    type: POST_PAYMENT_SUCCESS,
    payload: data,
  };
};

export const postPaymentFailure = (data) => {
  return {
    type: POST_PAYMENT_FAILURE,
    payload: data,
  };
};

export const updatePaymentRequest = () => {
  return {
    type: UPDATE_PAYMENT_REQUEST,
  };
};

export const updatePaymentSuccess = (data) => {
  return {
    type: UPDATE_PAYMENT_SUCCESS,
    payload: data,
  };
};

export const updatePaymentFailure = (data) => {
  return {
    type: UPDATE_PAYMENT_FAILURE,
    payload: data,
  };
};

export const deletePaymentRequest = () => {
  return {
    type: DELETE_PAYMENT_REQUEST,
  };
};

export const deletePaymentSuccess = (data) => {
  return {
    type: DELETE_PAYMENT_SUCCESS,
    payload: data,
  };
};

export const deletePaymentFailure = (data) => {
  return {
    type: DELETE_PAYMENT_FAILURE,
    payload: data,
  };
};

export const searchPaymentRequest = () => {
  return {
    type: SEARCH_PAYMENT_REQUEST,
  };
};

export const searchPaymentSuccess = (data) => {
  return {
    type: SEARCH_PAYMENT_SUCCESS,
    payload: data,
  };
};

export const searchPaymentFailure = (data) => {
  return {
    type: SEARCH_PAYMENT_FAILURE,
    payload: data,
  };
};
