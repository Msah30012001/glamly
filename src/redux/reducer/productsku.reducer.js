import { ProductSkuConstant } from "../constants";

const {
  FETCH_PRODUCT_SKU_REQUEST,
  FETCH_PRODUCT_SKU_SUCCESS,
  FETCH_PRODUCT_SKU_FAILURE,
  POST_PRODUCT_SKU_REQUEST,
  POST_PRODUCT_SKU_SUCCESS,
  POST_PRODUCT_SKU_FAILURE,
  UPDATE_PRODUCT_SKU_FAILURE,
  UPDATE_PRODUCT_SKU_REQUEST,
  UPDATE_PRODUCT_SKU_SUCCESS,
  DELETE_PRODUCT_SKU_REQUEST,
  DELETE_PRODUCT_SKU_SUCCESS,
  DELETE_PRODUCT_SKU_FAILURE,
  SEARCH_PRODUCT_SKU_REQUEST,
  SEARCH_PRODUCT_SKU_SUCCESS,
  SEARCH_PRODUCT_SKU_FAILURE,
} = ProductSkuConstant;

const initialState = {
  loading: false,
  data: [],
  status: "",
  message: "",
};

export const productSkuReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SKU_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_PRODUCT_SKU_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "SUCCESS",
        message: "data fetched successfully",
      };
    case FETCH_PRODUCT_SKU_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case POST_PRODUCT_SKU_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case POST_PRODUCT_SKU_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Insert Successfully",
      };
    case POST_PRODUCT_SKU_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case UPDATE_PRODUCT_SKU_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case UPDATE_PRODUCT_SKU_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Update Successfully",
      };
    case UPDATE_PRODUCT_SKU_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case DELETE_PRODUCT_SKU_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case DELETE_PRODUCT_SKU_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Delete Successfully",
      };
    case DELETE_PRODUCT_SKU_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case SEARCH_PRODUCT_SKU_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case SEARCH_PRODUCT_SKU_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case SEARCH_PRODUCT_SKU_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "",
      };
    default:
      return state;
  }
};
