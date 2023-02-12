import { ProductListConstant } from "../constants";

const {
  FETCH_PRODUCT_LIST_REQUEST,
  FETCH_PRODUCT_LIST_SUCCESS,
  FETCH_PRODUCT_LIST_FAILURE,
} = ProductListConstant;

export const fetchProductListRequest = () => {
  return {
    type: FETCH_PRODUCT_LIST_REQUEST,
  };
};

export const fetchProductListSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_LIST_SUCCESS,
    payload: data,
  };
};

export const fetchProductListFailure = (data) => {
  return {
    type: FETCH_PRODUCT_LIST_FAILURE,
    payload: data,
  };
};