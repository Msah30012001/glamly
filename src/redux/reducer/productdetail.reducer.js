import { ProductDetailConstant } from "../constants";

const {
  FETCH_PRODUCT_DETAIL_REQUEST,
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_PRODUCT_DETAIL_FAILURE,
  FETCH_SIMILAR_PRODUCT_REQUEST,
  FETCH_SIMILAR_PRODUCT_SUCCESS,
  FETCH_SIMILAR_PRODUCT_FAILURE,
  FETCH_TRENDING_PRODUCT_REQUEST,
  FETCH_TRENDING_PRODUCT_SUCCESS,
  FETCH_TRENDING_PRODUCT_FAILURE,
  FETCH_MOST_VIEWED_PRODUCT_REQUEST,
  FETCH_MOST_VIEWED_PRODUCT_SUCCESS,
  FETCH_MOST_VIEWED_PRODUCT_FAILURE,
} = ProductDetailConstant;

const initialState = {
  loading: false,
  data: [],
  similarProduct: [],
  trendingProduct:[],
  mostViewedProduct:[],
  status: "",
  message: "",
};

export const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        status: "SUCCESS",
        message: "data fetched successfully",
      };
    case FETCH_PRODUCT_DETAIL_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case FETCH_SIMILAR_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_SIMILAR_PRODUCT_SUCCESS:
      return {
        ...state,
        similarProduct: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case FETCH_SIMILAR_PRODUCT_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case FETCH_TRENDING_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_TRENDING_PRODUCT_SUCCESS:
      return {
        ...state,
        trendingProduct: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case FETCH_TRENDING_PRODUCT_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    case FETCH_MOST_VIEWED_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        status: "",
        message: "",
      };
    case FETCH_MOST_VIEWED_PRODUCT_SUCCESS:
      return {
        ...state,
        mostViewedProduct: action.payload,
        loading: false,
        status: "",
        message: "",
      };
    case FETCH_MOST_VIEWED_PRODUCT_FAILURE:
      return {
        ...state,
        message: action.payload,
        loading: false,
        status: "FAILED",
      };
    default:
      return state;
  }
};
