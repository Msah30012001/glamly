import { AdminConstant } from "../constants";

const {
  FETCH_ADMIN_REQUEST,
  FETCH_ADMIN_SUCCESS,
  FETCH_ADMIN_FAILURE,
  POST_ADMIN_REQUEST,
  POST_ADMIN_SUCCESS,
  POST_ADMIN_FAILURE,
  UPDATE_ADMIN_FAILURE,
  UPDATE_ADMIN_REQUEST,
  UPDATE_ADMIN_SUCCESS,
  DELETE_ADMIN_REQUEST,
  DELETE_ADMIN_SUCCESS,
  DELETE_ADMIN_FAILURE,
  SEARCH_ADMIN_REQUEST,
  SEARCH_ADMIN_SUCCESS,
  SEARCH_ADMIN_FAILURE,
  AUTH_ADMIN_REQUEST,
  AUTH_ADMIN_SUCCESS,
  AUTH_ADMIN_FAILURE,
  DESTROY_AUTH_ADMIN_REQUEST,
  DESTROY_AUTH_ADMIN_SUCCESS,
  DESTROY_AUTH_ADMIN_FAILURE,
} = AdminConstant;

const initialState = {
  loading: false,
  data: [],
  status: "",
  message: "",
  auth: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADMIN_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_ADMIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "SUCCESS",
        message: "",
      };
    case FETCH_ADMIN_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case POST_ADMIN_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case POST_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Insert Successfully",
      };
    case POST_ADMIN_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case UPDATE_ADMIN_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case UPDATE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Update Successfully",
      };
    case UPDATE_ADMIN_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case DELETE_ADMIN_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case DELETE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Delete Successfully",
      };
    case DELETE_ADMIN_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case SEARCH_ADMIN_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case SEARCH_ADMIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case SEARCH_ADMIN_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "",
      };
    case AUTH_ADMIN_REQUEST:
      return {
        ...state,
        message: "",
        loading: true,
        status: "",
      };
    case AUTH_ADMIN_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: true,
        status: "SUCCESS",
      };
    case AUTH_ADMIN_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: true,
        status: "FAILED",
      };
    case DESTROY_AUTH_ADMIN_REQUEST:
      return {
        ...state,
        message: "",
        loading: true,
        status: "",
      };
    case DESTROY_AUTH_ADMIN_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: true,
        status: "SUCCESS",
      };
    case DESTROY_AUTH_ADMIN_FAILURE:
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
