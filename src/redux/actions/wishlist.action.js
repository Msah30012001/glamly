import { WishlistConstant } from "../constants";

const {
  FETCH_WISHLIST_REQUEST,
  FETCH_WISHLIST_SUCCESS,
  FETCH_WISHLIST_FAILURE,
  POST_WISHLIST_REQUEST,
  POST_WISHLIST_SUCCESS,
  POST_WISHLIST_FAILURE,
  UPDATE_WISHLIST_REQUEST,
  UPDATE_WISHLIST_SUCCESS,
  UPDATE_WISHLIST_FAILURE,
  DELETE_WISHLIST_REQUEST,
  DELETE_WISHLIST_SUCCESS,
  DELETE_WISHLIST_FAILURE,
  SEARCH_WISHLIST_REQUEST,
  SEARCH_WISHLIST_SUCCESS,
  SEARCH_WISHLIST_FAILURE,
} = WishlistConstant;

export const fetchWishlistRequest = () => {
  return {
    type: FETCH_WISHLIST_REQUEST,
  };
};

export const fetchWishlistSuccess = (data) => {
  return {
    type: FETCH_WISHLIST_SUCCESS,
    payload: data,
  };
};

export const fetchWishlistFailure = (data) => {
  return {
    type: FETCH_WISHLIST_FAILURE,
    payload: data,
  };
};

export const postWishlistRequest = () => {
  return {
    type: POST_WISHLIST_REQUEST,
  };
};

export const postWishlistSuccess = (data) => {
  return {
    type: POST_WISHLIST_SUCCESS,
    payload: data,
  };
};

export const postWishlistFailure = (data) => {
  return {
    type: POST_WISHLIST_FAILURE,
    payload: data,
  };
};

export const updateWishlistRequest = () => {
  return {
    type: UPDATE_WISHLIST_REQUEST,
  };
};

export const updateWishlistSuccess = (data) => {
  return {
    type: UPDATE_WISHLIST_SUCCESS,
    payload: data,
  };
};

export const updateWishlistFailure = (data) => {
  return {
    type: UPDATE_WISHLIST_FAILURE,
    payload: data,
  };
};

export const deleteWishlistRequest = () => {
  return {
    type: DELETE_WISHLIST_REQUEST,
  };
};

export const deleteWishlistSuccess = (data) => {
  return {
    type: DELETE_WISHLIST_SUCCESS,
    payload: data,
  };
};

export const deleteWishlistFailure = (data) => {
  return {
    type: DELETE_WISHLIST_FAILURE,
    payload: data,
  };
};

export const searchWishlistRequest = () => {
  return {
    type: SEARCH_WISHLIST_REQUEST,
  };
};

export const searchWishlistSuccess = (data) => {
  return {
    type: SEARCH_WISHLIST_SUCCESS,
    payload: data,
  };
};

export const searchWishlistFailure = (data) => {
  return {
    type: SEARCH_WISHLIST_FAILURE,
    payload: data,
  };
};
