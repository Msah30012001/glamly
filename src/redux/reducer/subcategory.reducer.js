import { SubCategoryConstant } from "../constants";

const {
  FETCH_SUB_CATEGORY_REQUEST,
  FETCH_SUB_CATEGORY_SUCCESS,
  FETCH_SUB_CATEGORY_FAILURE,
  POST_SUB_CATEGORY_REQUEST,
  POST_SUB_CATEGORY_SUCCESS,
  POST_SUB_CATEGORY_FAILURE,
  UPDATE_SUB_CATEGORY_FAILURE,
  UPDATE_SUB_CATEGORY_REQUEST,
  UPDATE_SUB_CATEGORY_SUCCESS,
  DELETE_SUB_CATEGORY_REQUEST,
  DELETE_SUB_CATEGORY_SUCCESS,
  DELETE_SUB_CATEGORY_FAILURE,
  SEARCH_SUB_CATEGORY_REQUEST,
  SEARCH_SUB_CATEGORY_SUCCESS,
  SEARCH_SUB_CATEGORY_FAILURE,
} = SubCategoryConstant;

const initialState = {
  loading: false,
  data: [],
  status: "",
  message: "",
};

export const subCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUB_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case FETCH_SUB_CATEGORY_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case POST_SUB_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case POST_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Insert Successfully",
      };
    case POST_SUB_CATEGORY_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case UPDATE_SUB_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case UPDATE_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Update Successfully",
      };
    case UPDATE_SUB_CATEGORY_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case DELETE_SUB_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case DELETE_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Delete Successfully",
      };
    case DELETE_SUB_CATEGORY_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case SEARCH_SUB_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case SEARCH_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case SEARCH_SUB_CATEGORY_FAILURE:
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
