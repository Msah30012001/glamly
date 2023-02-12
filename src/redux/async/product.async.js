import productService from "../services/product.service";
import {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFailure,
  postProductRequest,
  postProductSuccess,
  postProductFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailure,
  searchProductRequest,
  searchProductSuccess,
  searchProductFailure,
} from "../actions";

export const fetchProduct = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductRequest());
      const response = await productService.getProduct();
      dispatch(fetchProductSuccess(response));
    } catch (error) {
      dispatch(fetchProductFailure(error));
    }
  };
};

export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductRequest());
      const response = await productService.getSingleProduct(id);
      dispatch(fetchProductSuccess(response));
    } catch (error) {
      dispatch(fetchProductFailure(error));
    }
  };
};

export const postProduct = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(postProductRequest());
      const response = await productService.postProduct(Data);
      if (response) dispatch(fetchProduct());
      dispatch(postProductSuccess(response));
    } catch (error) {
      dispatch(postProductFailure(error));
    }
  };
};

export const updateProduct = (id, Data) => {
  return async (dispatch) => {
    try {
      dispatch(updateProductRequest());
      const response = await productService.updateProduct(id, Data);
      if (response) dispatch(fetchProduct());

      dispatch(updateProductSuccess(response));
    } catch (error) {
      dispatch(updateProductFailure(error));
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteProductRequest());
      const response = await productService.deleteProduct(id);
      if (response) dispatch(fetchProduct());
      dispatch(deleteProductSuccess(response));
    } catch (error) {
      dispatch(deleteProductFailure(error));
    }
  };
};

export const searchProduct = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(searchProductRequest());
      const response = await productService.searchProduct(Data);
      dispatch(searchProductSuccess(response));
    } catch (error) {
      dispatch(searchProductFailure(error));
    }
  };
};
