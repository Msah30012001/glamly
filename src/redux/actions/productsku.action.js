import { ProductSkuConstant } from "../constants";

const {
  FETCH_PRODUCT_SKU_REQUEST,
  FETCH_PRODUCT_SKU_SUCCESS,
  FETCH_PRODUCT_SKU_FAILURE,
  POST_PRODUCT_SKU_REQUEST,
  POST_PRODUCT_SKU_SUCCESS,
  POST_PRODUCT_SKU_FAILURE,
  UPDATE_PRODUCT_SKU_REQUEST,
  UPDATE_PRODUCT_SKU_SUCCESS,
  UPDATE_PRODUCT_SKU_FAILURE,
  DELETE_PRODUCT_SKU_REQUEST,
  DELETE_PRODUCT_SKU_SUCCESS,
  DELETE_PRODUCT_SKU_FAILURE,
  SEARCH_PRODUCT_SKU_REQUEST,
  SEARCH_PRODUCT_SKU_SUCCESS,
  SEARCH_PRODUCT_SKU_FAILURE,
} = ProductSkuConstant;

export const fetchProductSkuRequest = () => {
  return {
    type: FETCH_PRODUCT_SKU_REQUEST,
  };
};

export const fetchProductSkuSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_SKU_SUCCESS,
    payload: data,
  };
};

export const fetchProductSkuFailure = (data) => {
  return {
    type: FETCH_PRODUCT_SKU_FAILURE,
    payload: data,
  };
};

export const postProductSkuRequest = () => {
  return {
    type: POST_PRODUCT_SKU_REQUEST,
  };
};

export const postProductSkuSuccess = (data) => {
  return {
    type: POST_PRODUCT_SKU_SUCCESS,
    payload: data,
  };
};

export const postProductSkuFailure = (data) => {
  return {
    type: POST_PRODUCT_SKU_FAILURE,
    payload: data,
  };
};

export const updateProductSkuRequest = () => {
  return {
    type: UPDATE_PRODUCT_SKU_REQUEST,
  };
};

export const updateProductSkuSuccess = (data) => {
  return {
    type: UPDATE_PRODUCT_SKU_SUCCESS,
    payload: data,
  };
};

export const updateProductSkuFailure = (data) => {
  return {
    type: UPDATE_PRODUCT_SKU_FAILURE,
    payload: data,
  };
};

export const deleteProductSkuRequest = () => {
  return {
    type: DELETE_PRODUCT_SKU_REQUEST,
  };
};

export const deleteProductSkuSuccess = (data) => {
  return {
    type: DELETE_PRODUCT_SKU_SUCCESS,
    payload: data,
  };
};

export const deleteProductSkuFailure = (data) => {
  return {
    type: DELETE_PRODUCT_SKU_FAILURE,
    payload: data,
  };
};

export const searchProductSkuRequest = () => {
  return {
    type: SEARCH_PRODUCT_SKU_REQUEST,
  };
};

export const searchProductSkuSuccess = (data) => {
  return {
    type: SEARCH_PRODUCT_SKU_SUCCESS,
    payload: data,
  };
};

export const searchProductSkuFailure = (data) => {
  return {
    type: SEARCH_PRODUCT_SKU_FAILURE,
    payload: data,
  };
};
