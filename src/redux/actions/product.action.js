import { ProductConstant } from "../constants";

const {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  POST_PRODUCT_REQUEST,
  POST_PRODUCT_SUCCESS,
  POST_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
} = ProductConstant;

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const fetchProductFailure = (data) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: data,
  };
};

export const postProductRequest = () => {
  return {
    type: POST_PRODUCT_REQUEST,
  };
};

export const postProductSuccess = (data) => {
  return {
    type: POST_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const postProductFailure = (data) => {
  return {
    type: POST_PRODUCT_FAILURE,
    payload: data,
  };
};

export const updateProductRequest = () => {
  return {
    type: UPDATE_PRODUCT_REQUEST,
  };
};

export const updateProductSuccess = (data) => {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const updateProductFailure = (data) => {
  return {
    type: UPDATE_PRODUCT_FAILURE,
    payload: data,
  };
};

export const deleteProductRequest = () => {
  return {
    type: DELETE_PRODUCT_REQUEST,
  };
};

export const deleteProductSuccess = (data) => {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const deleteProductFailure = (data) => {
  return {
    type: DELETE_PRODUCT_FAILURE,
    payload: data,
  };
};

export const searchProductRequest = () => {
  return {
    type: SEARCH_PRODUCT_REQUEST,
  };
};

export const searchProductSuccess = (data) => {
  return {
    type: SEARCH_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const searchProductFailure = (data) => {
  return {
    type: SEARCH_PRODUCT_FAILURE,
    payload: data,
  };
};
