import childCategoryService from "../services/childcategory.service";
import {
  fetchChildCategoryRequest,
  fetchChildCategorySuccess,
  fetchChildCategoryFailure,
  postChildCategoryRequest,
  postChildCategorySuccess,
  postChildCategoryFailure,
  updateChildCategoryRequest,
  updateChildCategorySuccess,
  updateChildCategoryFailure,
  deleteChildCategoryRequest,
  deleteChildCategorySuccess,
  deleteChildCategoryFailure,
  searchChildCategoryRequest,
  searchChildCategorySuccess,
  searchChildCategoryFailure,
} from "../actions";

export const fetchChildCategory = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchChildCategoryRequest());
      const response = await childCategoryService.getChildCategory();
      dispatch(fetchChildCategorySuccess(response));
    } catch (error) {
      dispatch(fetchChildCategoryFailure(error));
    }
  };
};

export const fetchSingleChildCategory = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchChildCategoryRequest());
      const response = await childCategoryService.getSingleChildCategory(id);
      dispatch(fetchChildCategorySuccess(response));
    } catch (error) {
      dispatch(fetchChildCategoryFailure(error));
    }
  };
};

export const postChildCategory = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(postChildCategoryRequest());
      const response = await childCategoryService.postChildCategory(Data);
      if(response) dispatch(fetchChildCategory())
      dispatch(postChildCategorySuccess(response));
    } catch (error) {
      dispatch(postChildCategoryFailure(error));
    }
  };
};

export const updateChildCategory = (id, Data) => {
  return async (dispatch) => {
    try {
      dispatch(updateChildCategoryRequest());
      const response = await childCategoryService.updateChildCategory(
        id,
        Data
      );
      if(response) dispatch(fetchChildCategory())
      dispatch(updateChildCategorySuccess(response));
    } catch (error) {
      dispatch(updateChildCategoryFailure(error));
    }
  };
};

export const deleteChildCategory = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteChildCategoryRequest());
      const response = await childCategoryService.deleteChildCategory(id);
      if (response) dispatch(fetchChildCategory())
      dispatch(deleteChildCategorySuccess(response));
    } catch (error) {
      dispatch(deleteChildCategoryFailure(error));
    }
  };
};

export const searchChildCategory = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(searchChildCategoryRequest());
      const response = await childCategoryService.searchChildCategory(Data);
      dispatch(searchChildCategorySuccess(response));
    } catch (error) {
      dispatch(searchChildCategoryFailure(error));
    }
  };
};
