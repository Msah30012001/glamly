import { PaymentConstant } from "../constants";

const {
  FETCH_PAYMENT_REQUEST,
  FETCH_PAYMENT_SUCCESS,
  FETCH_PAYMENT_FAILURE,
  POST_PAYMENT_REQUEST,
  POST_PAYMENT_SUCCESS,
  POST_PAYMENT_FAILURE,
  UPDATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
  DELETE_PAYMENT_REQUEST,
  DELETE_PAYMENT_SUCCESS,
  DELETE_PAYMENT_FAILURE,
  SEARCH_PAYMENT_REQUEST,
  SEARCH_PAYMENT_SUCCESS,
  SEARCH_PAYMENT_FAILURE,
} = PaymentConstant;

const initialState = {
  loading: false,
  data: [],
  status: "",
  message: "",
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_PAYMENT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "SUCCESS",
        message: "data fetched successfully",
      };
    case FETCH_PAYMENT_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case POST_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case POST_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Insert Successfully",
      };
    case POST_PAYMENT_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case UPDATE_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case UPDATE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Update Successfully",
      };
    case UPDATE_PAYMENT_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case DELETE_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case DELETE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Delete Successfully",
      };
    case DELETE_PAYMENT_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case SEARCH_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case SEARCH_PAYMENT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case SEARCH_PAYMENT_FAILURE:
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
