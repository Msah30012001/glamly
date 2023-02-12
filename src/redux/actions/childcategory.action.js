import { ChildCategoryConstant } from "../constants";

const {
  FETCH_CHILD_CATEGORY_REQUEST,
  FETCH_CHILD_CATEGORY_SUCCESS,
  FETCH_CHILD_CATEGORY_FAILURE,
  POST_CHILD_CATEGORY_REQUEST,
  POST_CHILD_CATEGORY_SUCCESS,
  POST_CHILD_CATEGORY_FAILURE,
  UPDATE_CHILD_CATEGORY_REQUEST,
  UPDATE_CHILD_CATEGORY_SUCCESS,
  UPDATE_CHILD_CATEGORY_FAILURE,
  DELETE_CHILD_CATEGORY_REQUEST,
  DELETE_CHILD_CATEGORY_SUCCESS,
  DELETE_CHILD_CATEGORY_FAILURE,
  SEARCH_CHILD_CATEGORY_REQUEST,
  SEARCH_CHILD_CATEGORY_SUCCESS,
  SEARCH_CHILD_CATEGORY_FAILURE,
} = ChildCategoryConstant;

export const fetchChildCategoryRequest = () => {
  return {
    type: FETCH_CHILD_CATEGORY_REQUEST,
  };
};

export const fetchChildCategorySuccess = (data) => {
  return {
    type: FETCH_CHILD_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const fetchChildCategoryFailure = (data) => {
  return {
    type: FETCH_CHILD_CATEGORY_FAILURE,
    payload: data,
  };
};

export const postChildCategoryRequest = () => {
  return {
    type: POST_CHILD_CATEGORY_REQUEST,
  };
};

export const postChildCategorySuccess = (data) => {
  return {
    type: POST_CHILD_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const postChildCategoryFailure = (data) => {
  return {
    type: POST_CHILD_CATEGORY_FAILURE,
    payload: data,
  };
};

export const updateChildCategoryRequest = () => {
  return {
    type: UPDATE_CHILD_CATEGORY_REQUEST,
  };
};

export const updateChildCategorySuccess = (data) => {
  return {
    type: UPDATE_CHILD_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const updateChildCategoryFailure = (data) => {
  return {
    type: UPDATE_CHILD_CATEGORY_FAILURE,
    payload: data,
  };
};

export const deleteChildCategoryRequest = () => {
  return {
    type: DELETE_CHILD_CATEGORY_REQUEST,
  };
};

export const deleteChildCategorySuccess = (data) => {
  return {
    type: DELETE_CHILD_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const deleteChildCategoryFailure = (data) => {
  return {
    type: DELETE_CHILD_CATEGORY_FAILURE,
    payload: data,
  };
};

export const searchChildCategoryRequest = () => {
  return {
    type: SEARCH_CHILD_CATEGORY_REQUEST,
  };
};

export const searchChildCategorySuccess = (data) => {
  return {
    type: SEARCH_CHILD_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const searchChildCategoryFailure = (data) => {
  return {
    type: SEARCH_CHILD_CATEGORY_FAILURE,
    payload: data,
  };
};
