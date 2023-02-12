import { WishlistConstant } from "../constants";

const {
  FETCH_WISHLIST_REQUEST,
  FETCH_WISHLIST_SUCCESS,
  FETCH_WISHLIST_FAILURE,
  POST_WISHLIST_REQUEST,
  POST_WISHLIST_SUCCESS,
  POST_WISHLIST_FAILURE,
  UPDATE_WISHLIST_FAILURE,
  UPDATE_WISHLIST_REQUEST,
  UPDATE_WISHLIST_SUCCESS,
  DELETE_WISHLIST_REQUEST,
  DELETE_WISHLIST_SUCCESS,
  DELETE_WISHLIST_FAILURE,
  SEARCH_WISHLIST_REQUEST,
  SEARCH_WISHLIST_SUCCESS,
  SEARCH_WISHLIST_FAILURE,
} = WishlistConstant;

const initialState = {
  loading: false,
  data: [],
  status: "",
  message: "",
};

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_WISHLIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "SUCCESS",
        message: "data fetched successfully",
      };
    case FETCH_WISHLIST_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case POST_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case POST_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Insert Successfully",
      };
    case POST_WISHLIST_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case UPDATE_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case UPDATE_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Update Successfully",
      };
    case UPDATE_WISHLIST_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case DELETE_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case DELETE_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        status: "SUCCESS",
        message: "Delete Successfully",
      };
    case DELETE_WISHLIST_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case SEARCH_WISHLIST_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case SEARCH_WISHLIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case SEARCH_WISHLIST_FAILURE:
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
