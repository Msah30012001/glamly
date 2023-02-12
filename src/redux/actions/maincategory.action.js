import { MainCategoryConstant } from "../constants";

const {
  FETCH_MAIN_CATEGORY_REQUEST,
  FETCH_MAIN_CATEGORY_SUCCESS,
  FETCH_MAIN_CATEGORY_FAILURE,
  POST_MAIN_CATEGORY_REQUEST,
  POST_MAIN_CATEGORY_SUCCESS,
  POST_MAIN_CATEGORY_FAILURE,
  UPDATE_MAIN_CATEGORY_REQUEST,
  UPDATE_MAIN_CATEGORY_SUCCESS,
  UPDATE_MAIN_CATEGORY_FAILURE,
  DELETE_MAIN_CATEGORY_REQUEST,
  DELETE_MAIN_CATEGORY_SUCCESS,
  DELETE_MAIN_CATEGORY_FAILURE,
  SEARCH_MAIN_CATEGORY_REQUEST,
  SEARCH_MAIN_CATEGORY_SUCCESS,
  SEARCH_MAIN_CATEGORY_FAILURE,
} = MainCategoryConstant

export const fetchMainCategoryRequest = () => {
  return {
    type: FETCH_MAIN_CATEGORY_REQUEST,
  };
};

export const fetchMainCategorySuccess = (data) => {
  return {
    type: FETCH_MAIN_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const fetchMainCategoryFailure = (data) => {
  return {
    type: FETCH_MAIN_CATEGORY_FAILURE,
    payload: data,
  };
};

export const postMainCategoryRequest = () => {
  return {
    type: POST_MAIN_CATEGORY_REQUEST,
  };
};

export const postMainCategorySuccess = (data) => {
  return {
    type: POST_MAIN_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const postMainCategoryFailure = (data) => {
  return {
    type: POST_MAIN_CATEGORY_FAILURE,
    payload: data,
  };
};

export const updateMainCategoryRequest = () => {
  return {
    type: UPDATE_MAIN_CATEGORY_REQUEST,
  };
};

export const updateMainCategorySuccess = (data) => {
  return {
    type: UPDATE_MAIN_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const updateMainCategoryFailure = (data) => {
  return {
    type: UPDATE_MAIN_CATEGORY_FAILURE,
    payload: data,
  };
};

export const deleteMainCategoryRequest = () => {
  return {
    type: DELETE_MAIN_CATEGORY_REQUEST,
  };
};

export const deleteMainCategorySuccess = (data) => {
  return {
    type: DELETE_MAIN_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const deleteMainCategoryFailure = (data) => {
  return {
    type: DELETE_MAIN_CATEGORY_FAILURE,
    payload: data,
  };
};

export const searchMainCategoryRequest = () => {
  return {
    type: SEARCH_MAIN_CATEGORY_REQUEST,
  };
};

export const searchMainCategorySuccess = (data) => {
  return {
    type: SEARCH_MAIN_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const searchMainCategoryFailure = (data) => {
  return {
    type: SEARCH_MAIN_CATEGORY_FAILURE,
    payload: data,
  };
};
