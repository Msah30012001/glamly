import { CategoryConstant } from "../constants";

const {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
} = CategoryConstant;

export const fetchCategoryRequest = () => {
  return {
    type: FETCH_CATEGORY_REQUEST,
  };
};

export const fetchCategorySuccess = (data) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const fetchCategoryFailure = (data) => {
  return {
    type: FETCH_CATEGORY_FAILURE,
    payload: data,
  };
};