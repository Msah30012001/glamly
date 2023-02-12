import { OrderConstant } from "../constants";

const {
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILURE,
  UPDATE_ORDER_FAILURE,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  SEARCH_ORDER_REQUEST,
  SEARCH_ORDER_SUCCESS,
  SEARCH_ORDER_FAILURE,
} = OrderConstant;

const initialState = {
  loading: false,
  data: [],
  status: "",
  message: "",
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "SUCCESS",
        message: "data fetched successfully",
      };
    case FETCH_ORDER_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case POST_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case POST_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Insert Successfully",
      };
    case POST_ORDER_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case UPDATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Update Successfully",
      };
    case UPDATE_ORDER_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case DELETE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Delete Successfully",
      };
    case DELETE_ORDER_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case SEARCH_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case SEARCH_ORDER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case SEARCH_ORDER_FAILURE:
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
