import { ProductDetailConstant } from "../constants";

const {
  FETCH_PRODUCT_DETAIL_REQUEST,
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_PRODUCT_DETAIL_FAILURE,
} = ProductDetailConstant;

const initialState = {
  loading: false,
  data: [],
  status: "",
  message: "",
};

export const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "SUCCESS",
        message: "data fetched successfully",
      };
    case FETCH_PRODUCT_DETAIL_FAILURE:
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
