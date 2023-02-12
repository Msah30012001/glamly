import productTypeService from "../services/producttype.service";
import {
  fetchProductTypeRequest,
  fetchProductTypeSuccess,
  fetchProductTypeFailure,
  postProductTypeRequest,
  postProductTypeSuccess,
  postProductTypeFailure,
  updateProductTypeRequest,
  updateProductTypeSuccess,
  updateProductTypeFailure,
  deleteProductTypeRequest,
  deleteProductTypeSuccess,
  deleteProductTypeFailure,
  searchProductTypeRequest,
  searchProductTypeSuccess,
  searchProductTypeFailure,
} from "../actions";

export const fetchProductType = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductTypeRequest());
      const response = await productTypeService.getProductType();
      dispatch(fetchProductTypeSuccess(response));
    } catch (error) {
      dispatch(fetchProductTypeFailure(error));
    }
  };
};

export const fetchSingleProductType = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductTypeRequest());
      const response = await productTypeService.getSingleProductType(id);
      dispatch(fetchProductTypeSuccess(response));
    } catch (error) {
      dispatch(fetchProductTypeFailure(error));
    }
  };
};

export const postProductType = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(postProductTypeRequest());
      const response = await productTypeService.postProductType(Data);
      if(response) dispatch(fetchProductType())
      dispatch(postProductTypeSuccess(response));
    } catch (error) {
      dispatch(postProductTypeFailure(error));
    }
  };
};

export const updateProductType = (id, Data) => {
  return async (dispatch) => {
    try {
      dispatch(updateProductTypeRequest());
      const response = await productTypeService.updateProductType(
        id,
        Data
      );
      if(response) dispatch(fetchProductType())
      dispatch(updateProductTypeSuccess(response));
    } catch (error) {
      dispatch(updateProductTypeFailure(error));
    }
  };
};

export const deleteProductType = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteProductTypeRequest());
      const response = await productTypeService.deleteProductType(id);
      if (response) dispatch(fetchProductType())
      dispatch(deleteProductTypeSuccess(response));
    } catch (error) {
      dispatch(deleteProductTypeFailure(error));
    }
  };
};

export const searchProductType = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(searchProductTypeRequest());
      const response = await productTypeService.searchProductType(Data);
      dispatch(searchProductTypeSuccess(response));
    } catch (error) {
      dispatch(searchProductTypeFailure(error));
    }
  };
};
