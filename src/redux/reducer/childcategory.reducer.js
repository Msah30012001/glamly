import { ChildCategoryConstant } from "../constants";

const {
  FETCH_CHILD_CATEGORY_REQUEST,
  FETCH_CHILD_CATEGORY_SUCCESS,
  FETCH_CHILD_CATEGORY_FAILURE,
  POST_CHILD_CATEGORY_REQUEST,
  POST_CHILD_CATEGORY_SUCCESS,
  POST_CHILD_CATEGORY_FAILURE,
  UPDATE_CHILD_CATEGORY_FAILURE,
  UPDATE_CHILD_CATEGORY_REQUEST,
  UPDATE_CHILD_CATEGORY_SUCCESS,
  DELETE_CHILD_CATEGORY_REQUEST,
  DELETE_CHILD_CATEGORY_SUCCESS,
  DELETE_CHILD_CATEGORY_FAILURE,
  SEARCH_CHILD_CATEGORY_REQUEST,
  SEARCH_CHILD_CATEGORY_SUCCESS,
  SEARCH_CHILD_CATEGORY_FAILURE,
} = ChildCategoryConstant;

const initialState = {
  loading: false,
  data: [],
  status: "",
  message: "",
};

export const childCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHILD_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_CHILD_CATEGORY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "SUCCESS",
        message: "data fetched successfully",
      };
    case FETCH_CHILD_CATEGORY_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case POST_CHILD_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case POST_CHILD_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Insert Successfully",
      };
    case POST_CHILD_CATEGORY_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case UPDATE_CHILD_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case UPDATE_CHILD_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Update Successfully",
      };
    case UPDATE_CHILD_CATEGORY_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case DELETE_CHILD_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case DELETE_CHILD_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Delete Successfully",
      };
    case DELETE_CHILD_CATEGORY_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case SEARCH_CHILD_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case SEARCH_CHILD_CATEGORY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case SEARCH_CHILD_CATEGORY_FAILURE:
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
