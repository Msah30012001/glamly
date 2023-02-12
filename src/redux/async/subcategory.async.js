import subCategoryService from "../services/subcategory.service";
import {
  fetchSubCategoryRequest,
  fetchSubCategorySuccess,
  fetchSubCategoryFailure,
  postSubCategoryRequest,
  postSubCategorySuccess,
  postSubCategoryFailure,
  updateSubCategoryRequest,
  updateSubCategorySuccess,
  updateSubCategoryFailure,
  deleteSubCategoryRequest,
  deleteSubCategorySuccess,
  deleteSubCategoryFailure,
  searchSubCategoryRequest,
  searchSubCategorySuccess,
  searchSubCategoryFailure,
} from "../actions";

export const fetchSubCategory = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchSubCategoryRequest());
      const response = await subCategoryService.getSubCategory();
      if (response) dispatch(fetchSubCategorySuccess(response));
    } catch (error) {
      dispatch(fetchSubCategoryFailure(error));
    }
  };
};

export const fetchSingleSubCategory = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchSubCategoryRequest());
      const response = await subCategoryService.getSingleSubCategory(id);
      dispatch(fetchSubCategorySuccess(response));
    } catch (error) {
      dispatch(fetchSubCategoryFailure(error));
    }
  };
};

export const postSubCategory = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(postSubCategoryRequest());
      const response = await subCategoryService.postSubCategory(Data);
      if (response) dispatch(fetchSubCategory())
      dispatch(postSubCategorySuccess(response));
    } catch (error) {
      dispatch(postSubCategoryFailure(error));
    }
  };
};

export const updateSubCategory = (id, Data) => {
  return async (dispatch) => {
    try {
      dispatch(updateSubCategoryRequest());
      const response = await subCategoryService.updateSubCategory(id, Data);
      if (response) dispatch(fetchSubCategory())
      dispatch(updateSubCategorySuccess(response));
    } catch (error) {
      dispatch(updateSubCategoryFailure(error));
    }
  };
};

export const deleteSubCategory = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteSubCategoryRequest());
      const response = await subCategoryService.deleteSubCategory(id);
      if (response) dispatch(fetchSubCategory())
      dispatch(deleteSubCategorySuccess(response));
    } catch (error) {
      dispatch(deleteSubCategoryFailure(error));
    }
  };
};

export const searchSubCategory = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(searchSubCategoryRequest());
      const response = await subCategoryService.searchSubCategory(Data);
      dispatch(searchSubCategorySuccess(response));
    } catch (error) {
      dispatch(searchSubCategoryFailure(error));
    }
  };
};
