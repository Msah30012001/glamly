import { BrandConstant } from "../constants";

const {
  FETCH_BRAND_REQUEST,
  FETCH_BRAND_SUCCESS,
  FETCH_BRAND_FAILURE,
  POST_BRAND_REQUEST,
  POST_BRAND_SUCCESS,
  POST_BRAND_FAILURE,
  UPDATE_BRAND_REQUEST,
  UPDATE_BRAND_SUCCESS,
  UPDATE_BRAND_FAILURE,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_BRAND_FAILURE,
  SEARCH_BRAND_REQUEST,
  SEARCH_BRAND_SUCCESS,
  SEARCH_BRAND_FAILURE,
} = BrandConstant;

export const fetchBrandRequest = () => {
  return {
    type: FETCH_BRAND_REQUEST,
  };
};

export const fetchBrandSuccess = (data) => {
  return {
    type: FETCH_BRAND_SUCCESS,
    payload: data,
  };
};

export const fetchBrandFailure = (data) => {
  return {
    type: FETCH_BRAND_FAILURE,
    payload: data,
  };
};

export const postBrandRequest = () => {
  return {
    type: POST_BRAND_REQUEST,
  };
};

export const postBrandSuccess = (data) => {
  return {
    type: POST_BRAND_SUCCESS,
    payload: data,
  };
};

export const postBrandFailure = (data) => {
  return {
    type: POST_BRAND_FAILURE,
    payload: data,
  };
};

export const updateBrandRequest = () => {
  return {
    type: UPDATE_BRAND_REQUEST,
  };
};

export const updateBrandSuccess = (data) => {
  return {
    type: UPDATE_BRAND_SUCCESS,
    payload: data,
  };
};

export const updateBrandFailure = (data) => {
  return {
    type: UPDATE_BRAND_FAILURE,
    payload: data,
  };
};

export const deleteBrandRequest = () => {
  return {
    type: DELETE_BRAND_REQUEST,
  };
};

export const deleteBrandSuccess = (data) => {
  return {
    type: DELETE_BRAND_SUCCESS,
    payload: data,
  };
};

export const deleteBrandFailure = (data) => {
  return {
    type: DELETE_BRAND_FAILURE,
    payload: data,
  };
};

export const searchBrandRequest = () => {
  return {
    type: SEARCH_BRAND_REQUEST,
  };
};

export const searchBrandSuccess = (data) => {
  return {
    type: SEARCH_BRAND_SUCCESS,
    payload: data,
  };
};

export const searchBrandFailure = (data) => {
  return {
    type: SEARCH_BRAND_FAILURE,
    payload: data,
  };
};
