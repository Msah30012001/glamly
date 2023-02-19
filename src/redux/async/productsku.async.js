import productSkuService from "../services/productsku.service";
import {
  fetchProductSkuRequest,
  fetchProductSkuSuccess,
  fetchProductSkuFailure,
  postProductSkuRequest,
  postProductSkuSuccess,
  postProductSkuFailure,
  updateProductSkuRequest,
  updateProductSkuSuccess,
  updateProductSkuFailure,
  deleteProductSkuRequest,
  deleteProductSkuSuccess,
  deleteProductSkuFailure,
  searchProductSkuRequest,
  searchProductSkuSuccess,
  searchProductSkuFailure,
} from "../actions";

export const fetchProductSku = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductSkuRequest());
      const response = await productSkuService.getProductSku();
      dispatch(fetchProductSkuSuccess(response));
    } catch (error) {
      dispatch(fetchProductSkuFailure(error));
    }
  };
};

export const fetchWeeklyProductSku = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductSkuRequest());
      const response = await productSkuService.getWeeklyProductSku();
      dispatch(fetchProductSkuSuccess(response));
    } catch (error) {
      dispatch(fetchProductSkuFailure(error));
    }
  };
};

export const fetchSingleProductSku = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductSkuRequest());
      const response = await productSkuService.getSingleProductSku(id);
      dispatch(fetchProductSkuSuccess(response));
    } catch (error) {
      dispatch(fetchProductSkuFailure(error));
    }
  };
};

export const postProductSku = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(postProductSkuRequest());
      const response = await productSkuService.postProductSku(Data);
      console.log(response)
      if (response) dispatch(fetchProductSku());
      dispatch(postProductSkuSuccess(response));
    } catch (error) {
      dispatch(postProductSkuFailure(error));
    }
  };
};

export const updateProductSku = (id, Data) => {
  return async (dispatch) => {
    try {
      dispatch(updateProductSkuRequest());
      const response = await productSkuService.updateProductSku(id, Data);
      if (response) dispatch(fetchProductSku());
      dispatch(updateProductSkuSuccess(response));
    } catch (error) {
      dispatch(updateProductSkuFailure(error));
    }
  };
};

export const deleteProductSku = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteProductSkuRequest());
      const response = await productSkuService.deleteProductSku(id);
      if (response) dispatch(fetchProductSku());
      dispatch(deleteProductSkuSuccess(response));
    } catch (error) {
      dispatch(deleteProductSkuFailure(error));
    }
  };
};

export const searchProductSku = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(searchProductSkuRequest());
      const response = await productSkuService.searchProductSku(Data);
      dispatch(searchProductSkuSuccess(response));
    } catch (error) {
      dispatch(searchProductSkuFailure(error));
    }
  };
};
