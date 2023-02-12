import categoryService from "../services/category.service";
import {
  fetchCategoryRequest,
  fetchCategorySuccess,
  fetchCategoryFailure,
} from "../actions";

export const fetchCategory = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCategoryRequest());
      const response = await categoryService.getCategory();
      dispatch(fetchCategorySuccess(response));
    } catch (error) {
      dispatch(fetchCategoryFailure(error));
    }
  };
};