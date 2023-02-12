import { ProductDetailConstant } from "../constants";

const {
  FETCH_PRODUCT_DETAIL_REQUEST,
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_PRODUCT_DETAIL_FAILURE,
} = ProductDetailConstant;

export const fetchProductDetailRequest = () => {
  return {
    type: FETCH_PRODUCT_DETAIL_REQUEST,
  };
};

export const fetchProductDetailSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_DETAIL_SUCCESS,
    payload: data,
  };
};

export const fetchProductDetailFailure = (data) => {
  return {
    type: FETCH_PRODUCT_DETAIL_FAILURE,
    payload: data,
  };
};
