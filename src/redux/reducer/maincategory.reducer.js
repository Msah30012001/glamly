import { MainCategoryConstant } from "../constants";

const {
  FETCH_MAIN_CATEGORY_REQUEST,
  FETCH_MAIN_CATEGORY_SUCCESS,
  FETCH_MAIN_CATEGORY_FAILURE,
  POST_MAIN_CATEGORY_REQUEST,
  POST_MAIN_CATEGORY_SUCCESS,
  POST_MAIN_CATEGORY_FAILURE,
  UPDATE_MAIN_CATEGORY_FAILURE,
  UPDATE_MAIN_CATEGORY_REQUEST,
  UPDATE_MAIN_CATEGORY_SUCCESS,
  DELETE_MAIN_CATEGORY_REQUEST,
  DELETE_MAIN_CATEGORY_SUCCESS,
  DELETE_MAIN_CATEGORY_FAILURE,
  SEARCH_MAIN_CATEGORY_REQUEST,
  SEARCH_MAIN_CATEGORY_SUCCESS,
  SEARCH_MAIN_CATEGORY_FAILURE,
} = MainCategoryConstant;

const initialState = {
  loading: false,
  data: [],
  status: "",
  message: "",
};

export const mainCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MAIN_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_MAIN_CATEGORY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case FETCH_MAIN_CATEGORY_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case POST_MAIN_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case POST_MAIN_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Insert Successfully",
      };
    case POST_MAIN_CATEGORY_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case UPDATE_MAIN_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case UPDATE_MAIN_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Update Successfully",
      };
    case UPDATE_MAIN_CATEGORY_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case DELETE_MAIN_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case DELETE_MAIN_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Delete Successfully",
      };
    case DELETE_MAIN_CATEGORY_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case SEARCH_MAIN_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case SEARCH_MAIN_CATEGORY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case SEARCH_MAIN_CATEGORY_FAILURE:
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
