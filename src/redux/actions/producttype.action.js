import { ProductTypeConstant } from "../constants";

const {
  FETCH_PRODUCT_TYPE_REQUEST,
  FETCH_PRODUCT_TYPE_SUCCESS,
  FETCH_PRODUCT_TYPE_FAILURE,
  POST_PRODUCT_TYPE_REQUEST,
  POST_PRODUCT_TYPE_SUCCESS,
  POST_PRODUCT_TYPE_FAILURE,
  UPDATE_PRODUCT_TYPE_REQUEST,
  UPDATE_PRODUCT_TYPE_SUCCESS,
  UPDATE_PRODUCT_TYPE_FAILURE,
  DELETE_PRODUCT_TYPE_REQUEST,
  DELETE_PRODUCT_TYPE_SUCCESS,
  DELETE_PRODUCT_TYPE_FAILURE,
  SEARCH_PRODUCT_TYPE_REQUEST,
  SEARCH_PRODUCT_TYPE_SUCCESS,
  SEARCH_PRODUCT_TYPE_FAILURE,
} = ProductTypeConstant;

export const fetchProductTypeRequest = () => {
  return {
    type: FETCH_PRODUCT_TYPE_REQUEST,
  };
};

export const fetchProductTypeSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_TYPE_SUCCESS,
    payload: data,
  };
};

export const fetchProductTypeFailure = (data) => {
  return {
    type: FETCH_PRODUCT_TYPE_FAILURE,
    payload: data,
  };
};

export const postProductTypeRequest = () => {
  return {
    type: POST_PRODUCT_TYPE_REQUEST,
  };
};

export const postProductTypeSuccess = (data) => {
  return {
    type: POST_PRODUCT_TYPE_SUCCESS,
    payload: data,
  };
};

export const postProductTypeFailure = (data) => {
  return {
    type: POST_PRODUCT_TYPE_FAILURE,
    payload: data,
  };
};

export const updateProductTypeRequest = () => {
  return {
    type: UPDATE_PRODUCT_TYPE_REQUEST,
  };
};

export const updateProductTypeSuccess = (data) => {
  return {
    type: UPDATE_PRODUCT_TYPE_SUCCESS,
    payload: data,
  };
};

export const updateProductTypeFailure = (data) => {
  return {
    type: UPDATE_PRODUCT_TYPE_FAILURE,
    payload: data,
  };
};

export const deleteProductTypeRequest = () => {
  return {
    type: DELETE_PRODUCT_TYPE_REQUEST,
  };
};

export const deleteProductTypeSuccess = (data) => {
  return {
    type: DELETE_PRODUCT_TYPE_SUCCESS,
    payload: data,
  };
};

export const deleteProductTypeFailure = (data) => {
  return {
    type: DELETE_PRODUCT_TYPE_FAILURE,
    payload: data,
  };
};

export const searchProductTypeRequest = () => {
  return {
    type: SEARCH_PRODUCT_TYPE_REQUEST,
  };
};

export const searchProductTypeSuccess = (data) => {
  return {
    type: SEARCH_PRODUCT_TYPE_SUCCESS,
    payload: data,
  };
};

export const searchProductTypeFailure = (data) => {
  return {
    type: SEARCH_PRODUCT_TYPE_FAILURE,
    payload: data,
  };
};
