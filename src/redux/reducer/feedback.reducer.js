import { FeedbackConstant } from "../constants";

const {
  FETCH_FEEDBACK_REQUEST,
  FETCH_FEEDBACK_SUCCESS,
  FETCH_FEEDBACK_FAILURE,
  POST_FEEDBACK_REQUEST,
  POST_FEEDBACK_SUCCESS,
  POST_FEEDBACK_FAILURE,
  UPDATE_FEEDBACK_FAILURE,
  UPDATE_FEEDBACK_REQUEST,
  UPDATE_FEEDBACK_SUCCESS,
  DELETE_FEEDBACK_REQUEST,
  DELETE_FEEDBACK_SUCCESS,
  DELETE_FEEDBACK_FAILURE,
  SEARCH_FEEDBACK_REQUEST,
  SEARCH_FEEDBACK_SUCCESS,
  SEARCH_FEEDBACK_FAILURE,
} = FeedbackConstant;

const initialState = {
  loading: false,
  data: [],
  status: "",
  message: "",
};

export const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEEDBACK_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_FEEDBACK_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "SUCCESS",
        message: "data fetched successfully",
      };
    case FETCH_FEEDBACK_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case POST_FEEDBACK_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case POST_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Insert Successfully",
      };
    case POST_FEEDBACK_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case UPDATE_FEEDBACK_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case UPDATE_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Update Successfully",
      };
    case UPDATE_FEEDBACK_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case DELETE_FEEDBACK_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case DELETE_FEEDBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Delete Successfully",
      };
    case DELETE_FEEDBACK_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case SEARCH_FEEDBACK_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case SEARCH_FEEDBACK_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case SEARCH_FEEDBACK_FAILURE:
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
