import { ProductListConstant } from "../constants";

const {
  FETCH_PRODUCT_LIST_REQUEST,
  FETCH_PRODUCT_LIST_SUCCESS,
  FETCH_PRODUCT_LIST_FAILURE,
} = ProductListConstant;

const initialState = {
  loading: false,
  data: [],
  status: "",
  message: "",
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "SUCCESS",
        message: "data fetched successfully",
      };
    case FETCH_PRODUCT_LIST_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
   
    default:
      return state;
  }
};
