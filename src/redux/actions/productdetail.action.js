import { ProductDetailConstant } from "../constants";

const {
  FETCH_PRODUCT_DETAIL_REQUEST,
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_PRODUCT_DETAIL_FAILURE,
  FETCH_SIMILAR_PRODUCT_REQUEST,
  FETCH_SIMILAR_PRODUCT_SUCCESS,
  FETCH_SIMILAR_PRODUCT_FAILURE,
  FETCH_TRENDING_PRODUCT_REQUEST,
  FETCH_TRENDING_PRODUCT_SUCCESS,
  FETCH_TRENDING_PRODUCT_FAILURE,
  FETCH_MOST_VIEWED_PRODUCT_REQUEST,
  FETCH_MOST_VIEWED_PRODUCT_SUCCESS,
  FETCH_MOST_VIEWED_PRODUCT_FAILURE,
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

export const fetchSimilarProductRequest = () => {
  return {
    type: FETCH_SIMILAR_PRODUCT_REQUEST,
  };
};

export const fetchSimilarProductSuccess = (data) => {
  return {
    type: FETCH_SIMILAR_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const fetchSimilarProductFailure = (data) => {
  return {
    type: FETCH_SIMILAR_PRODUCT_FAILURE,
    payload: data,
  };
};
export const fetchTrendingProductRequest = () => {
  return {
    type: FETCH_TRENDING_PRODUCT_REQUEST,
  };
};

export const fetchTrendingProductSuccess = (data) => {
  return {
    type: FETCH_TRENDING_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const fetchTrendingProductFailure = (data) => {
  return {
    type: FETCH_TRENDING_PRODUCT_FAILURE,
    payload: data,
  };
};
export const fetchMostViewedProductRequest = () => {
  return {
    type: FETCH_MOST_VIEWED_PRODUCT_REQUEST,
  };
};

export const fetchMostViewedProductSuccess = (data) => {
  return {
    type: FETCH_MOST_VIEWED_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const fetchMostViewedProductFailure = (data) => {
  return {
    type: FETCH_MOST_VIEWED_PRODUCT_FAILURE,
    payload: data,
  };
};
