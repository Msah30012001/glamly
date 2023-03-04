import { UserConstant } from "../constants";

const {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
  DESTROY_AUTH_USER_REQUEST,
  DESTROY_AUTH_USER_SUCCESS,
  DESTROY_AUTH_USER_FAILURE,
} = UserConstant;

const initialState = {
  loading: false,
  data: [],
  status: "",
  message: "",
  auth:[]
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case POST_USER_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Register Successfully",
      };
    case POST_USER_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Update Successfully",
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Delete Successfully",
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case SEARCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case SEARCH_USER_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "",
      };
    case AUTH_USER_REQUEST:
      return {
        ...state,
        message: "",
        loading: true,
        status: "",
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: true,
        status: "SUCCESS",
      };
    case AUTH_USER_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: true,
        status: "FAILED",
      };
    case DESTROY_AUTH_USER_REQUEST:
      return {
        ...state,
        message: "",
        loading: true,
        status: "",
      };
    case DESTROY_AUTH_USER_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: true,
        status: "SUCCESS",
      };
    case DESTROY_AUTH_USER_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: true,
        status: "FAILED",
      };
    default:
      return state;
  }
};
