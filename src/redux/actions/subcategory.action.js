import { SubCategoryConstant } from "../constants";

const {
  FETCH_SUB_CATEGORY_REQUEST,
  FETCH_SUB_CATEGORY_SUCCESS,
  FETCH_SUB_CATEGORY_FAILURE,
  POST_SUB_CATEGORY_REQUEST,
  POST_SUB_CATEGORY_SUCCESS,
  POST_SUB_CATEGORY_FAILURE,
  UPDATE_SUB_CATEGORY_REQUEST,
  UPDATE_SUB_CATEGORY_SUCCESS,
  UPDATE_SUB_CATEGORY_FAILURE,
  DELETE_SUB_CATEGORY_REQUEST,
  DELETE_SUB_CATEGORY_SUCCESS,
  DELETE_SUB_CATEGORY_FAILURE,
  SEARCH_SUB_CATEGORY_REQUEST,
  SEARCH_SUB_CATEGORY_SUCCESS,
  SEARCH_SUB_CATEGORY_FAILURE,
} = SubCategoryConstant;

export const fetchSubCategoryRequest = () => {
  return {
    type: FETCH_SUB_CATEGORY_REQUEST,
  };
};

export const fetchSubCategorySuccess = (data) => {
  return {
    type: FETCH_SUB_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const fetchSubCategoryFailure = (data) => {
  return {
    type: FETCH_SUB_CATEGORY_FAILURE,
    payload: data,
  };
};

export const postSubCategoryRequest = () => {
  return {
    type: POST_SUB_CATEGORY_REQUEST,
  };
};

export const postSubCategorySuccess = (data) => {
  return {
    type: POST_SUB_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const postSubCategoryFailure = (data) => {
  return {
    type: POST_SUB_CATEGORY_FAILURE,
    payload: data,
  };
};

export const updateSubCategoryRequest = () => {
  return {
    type: UPDATE_SUB_CATEGORY_REQUEST,
  };
};

export const updateSubCategorySuccess = (data) => {
  return {
    type: UPDATE_SUB_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const updateSubCategoryFailure = (data) => {
  return {
    type: UPDATE_SUB_CATEGORY_FAILURE,
    payload: data,
  };
};

export const deleteSubCategoryRequest = () => {
  return {
    type: DELETE_SUB_CATEGORY_REQUEST,
  };
};

export const deleteSubCategorySuccess = (data) => {
  return {
    type: DELETE_SUB_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const deleteSubCategoryFailure = (data) => {
  return {
    type: DELETE_SUB_CATEGORY_FAILURE,
    payload: data,
  };
};

export const searchSubCategoryRequest = () => {
  return {
    type: SEARCH_SUB_CATEGORY_REQUEST,
  };
};

export const searchSubCategorySuccess = (data) => {
  return {
    type: SEARCH_SUB_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const searchSubCategoryFailure = (data) => {
  return {
    type: SEARCH_SUB_CATEGORY_FAILURE,
    payload: data,
  };
};
