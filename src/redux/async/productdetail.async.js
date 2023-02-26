import productDetailService from "../services/productdetail.service";
import {
  fetchProductDetailRequest,
  fetchProductDetailSuccess,
  fetchProductDetailFailure,
  fetchSimilarProductRequest,
  fetchSimilarProductSuccess,
  fetchSimilarProductFailure,
  fetchTrendingProductRequest,
  fetchTrendingProductSuccess,
  fetchTrendingProductFailure,
  fetchMostViewedProductRequest,
  fetchMostViewedProductSuccess,
  fetchMostViewedProductFailure,
} from "../actions";

export const fetchProductDetail = (param) => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductDetailRequest());
      const response = await productDetailService.getProductDetail(param);
      dispatch(fetchProductDetailSuccess(response));
    } catch (error) {
      dispatch(fetchProductDetailFailure(error));
    }
  };
};

export const fetchSimilarProduct = (param) => {
  return async (dispatch) => {
    try {
      dispatch(fetchSimilarProductRequest());
      const response = await productDetailService.getSimilarProduct(param);
      dispatch(fetchSimilarProductSuccess(response));
    } catch (error) {
      dispatch(fetchSimilarProductFailure(error));
    }
  };
};

export const fetchTrendingProduct = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchTrendingProductRequest());
      const response = await productDetailService.getTrendingProduct();
      dispatch(fetchTrendingProductSuccess(response));
    } catch (error) {
      dispatch(fetchTrendingProductFailure(error));
    }
  };
};

export const fetchMostViewedProduct = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchMostViewedProductRequest());
      const response = await productDetailService.getMostViewedProduct();
      dispatch(fetchMostViewedProductSuccess(response));
    } catch (error) {
      dispatch(fetchMostViewedProductFailure(error));
    }
  };
};