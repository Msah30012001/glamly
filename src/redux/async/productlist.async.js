import productListService from "../services/productlist.service";
import {
  fetchProductListRequest,
  fetchProductListSuccess,
  fetchProductListFailure,
} from "../actions";

export const fetchProductList = (param) => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductListRequest());
      const response = await productListService.getProductList(param);
      dispatch(fetchProductListSuccess(response));
    } catch (error) {
      dispatch(fetchProductListFailure(error));
    }
  };
};

