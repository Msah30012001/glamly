import brandService from "../services/brand.service";
import {
  fetchBrandRequest,
  fetchBrandSuccess,
  fetchBrandFailure,
  postBrandRequest,
  postBrandSuccess,
  postBrandFailure,
  updateBrandRequest,
  updateBrandSuccess,
  updateBrandFailure,
  deleteBrandRequest,
  deleteBrandSuccess,
  deleteBrandFailure,
  searchBrandRequest,
  searchBrandSuccess,
  searchBrandFailure,
} from "../actions";

export const fetchBrand = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchBrandRequest());
      const response = await brandService.getBrand();
      dispatch(fetchBrandSuccess(response));
    } catch (error) {
      dispatch(fetchBrandFailure(error));
    }
  };
};

export const fetchSingleBrand = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchBrandRequest());
      const response = await brandService.getSingleBrand(id);
      dispatch(fetchBrandSuccess(response));
    } catch (error) {
      dispatch(fetchBrandFailure(error));
    }
  };
};

export const postBrand = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(postBrandRequest());
      const response = await brandService.postBrand(Data);
      if (response) dispatch(fetchBrand());
      dispatch(postBrandSuccess(response));
    } catch (error) {
      dispatch(postBrandFailure(error));
    }
  };
};

export const updateBrand = (id, Data) => {
  return async (dispatch) => {
    try {
      dispatch(updateBrandRequest());
      const response = await brandService.updateBrand(id, Data);
      if (response) dispatch(fetchBrand());
      dispatch(updateBrandSuccess(response));
    } catch (error) {
      dispatch(updateBrandFailure(error));
    }
  };
};

export const deleteBrand = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteBrandRequest());
      const response = await brandService.deleteBrand(id);
      if (response) dispatch(fetchBrand());
      dispatch(deleteBrandSuccess(response));
    } catch (error) {
      dispatch(deleteBrandFailure(error));
    }
  };
};

export const searchBrand = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(searchBrandRequest());
      const response = await brandService.searchBrand(Data);
      dispatch(searchBrandSuccess(response));
    } catch (error) {
      dispatch(searchBrandFailure(error));
    }
  };
};
