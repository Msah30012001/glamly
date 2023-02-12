import productDetailService from "../services/productdetail.service";
import {
  fetchProductDetailRequest,
  fetchProductDetailSuccess,
  fetchProductDetailFailure,
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
