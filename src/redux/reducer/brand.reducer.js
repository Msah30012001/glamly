import { BrandConstant } from "../constants";

const {
  FETCH_BRAND_REQUEST,
  FETCH_BRAND_SUCCESS,
  FETCH_BRAND_FAILURE,
  POST_BRAND_REQUEST,
  POST_BRAND_SUCCESS,
  POST_BRAND_FAILURE,
  UPDATE_BRAND_FAILURE,
  UPDATE_BRAND_REQUEST,
  UPDATE_BRAND_SUCCESS,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_BRAND_FAILURE,
  SEARCH_BRAND_REQUEST,
  SEARCH_BRAND_SUCCESS,
  SEARCH_BRAND_FAILURE,
} = BrandConstant;

const initialState = {
  loading: false,
  data: [],
  status: "",
  message: "",
};

export const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_BRAND_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "SUCCESS",
        message: "data fetched successfully",
      };
    case FETCH_BRAND_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case POST_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case POST_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Insert Successfully",
      };
    case POST_BRAND_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case UPDATE_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case UPDATE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Update Successfully",
      };
    case UPDATE_BRAND_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case DELETE_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case DELETE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Delete Successfully",
      };
    case DELETE_BRAND_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case SEARCH_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case SEARCH_BRAND_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case SEARCH_BRAND_FAILURE:
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
