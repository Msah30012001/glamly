import mainCategoryService from "../services/maincategory.service";
import {
  fetchMainCategoryRequest,
  fetchMainCategorySuccess,
  fetchMainCategoryFailure,
  postMainCategoryRequest,
  postMainCategorySuccess,
  postMainCategoryFailure,
  updateMainCategoryRequest,
  updateMainCategorySuccess,
  updateMainCategoryFailure,
  deleteMainCategoryRequest,
  deleteMainCategorySuccess,
  deleteMainCategoryFailure,
  searchMainCategoryRequest,
  searchMainCategorySuccess,
  searchMainCategoryFailure,
} from "../actions";

export const fetchMainCategory = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchMainCategoryRequest());
      const response = await mainCategoryService.getMainCategory();
      if (response) dispatch(fetchMainCategorySuccess(response));
    } catch (error) {
      dispatch(fetchMainCategoryFailure(error));
    }
  };
};

export const fetchSingleMainCategory = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchMainCategoryRequest());
      const response = await mainCategoryService.getSingleMainCategory(id);
      dispatch(fetchMainCategorySuccess(response));
    } catch (error) {
      dispatch(fetchMainCategoryFailure(error));
    }
  };
};

export const postMainCategory = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(postMainCategoryRequest());
      const response = await mainCategoryService.postMainCategory(Data);
      if (response) dispatch(fetchMainCategory())
      dispatch(postMainCategorySuccess(response));
    } catch (error) {
      dispatch(postMainCategoryFailure(error));
    }
  };
};

export const updateMainCategory = (id, Data) => {
  return async (dispatch) => {
    try {
      dispatch(updateMainCategoryRequest());
      const response = await mainCategoryService.updateMainCategory(id, Data);
      if (response) dispatch(fetchMainCategory())
      dispatch(updateMainCategorySuccess(response));
    } catch (error) {
      dispatch(updateMainCategoryFailure(error));
    }
  };
};

export const deleteMainCategory = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteMainCategoryRequest());
      const response = await mainCategoryService.deleteMainCategory(id);
      if (response) dispatch(fetchMainCategory())
      dispatch(deleteMainCategorySuccess(response));
    } catch (error) {
      dispatch(deleteMainCategoryFailure(error));
    }
  };
};

export const searchMainCategory = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(searchMainCategoryRequest());
      const response = await mainCategoryService.searchMainCategory(Data);
      dispatch(searchMainCategorySuccess(response));
    } catch (error) {
      dispatch(searchMainCategoryFailure(error));
    }
  };
};
