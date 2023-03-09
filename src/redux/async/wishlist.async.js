import wishlistService from "../services/wishlist.service";
import {
  fetchWishlistRequest,
  fetchWishlistSuccess,
  fetchWishlistFailure,
  postWishlistRequest,
  postWishlistSuccess,
  postWishlistFailure,
  deleteWishlistRequest,
  deleteWishlistSuccess,
  deleteWishlistFailure,
  searchWishlistRequest,
  searchWishlistSuccess,
  searchWishlistFailure,
} from "../actions";

export const fetchWishlist = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchWishlistRequest());
      const response = await wishlistService.getWishlist();
      dispatch(fetchWishlistSuccess(response));
    } catch (error) {
      dispatch(fetchWishlistFailure(error));
    }
  };
};

export const fetchSingleWishlist = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchWishlistRequest());
      const response = await wishlistService.getSingleWishlist(id);
      dispatch(fetchWishlistSuccess(response));
    } catch (error) {
      dispatch(fetchWishlistFailure(error));
    }
  };
};

export const postWishlist = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(postWishlistRequest());
      const response = await wishlistService.postWishlist(Data);
      if(response) dispatch(fetchWishlist())
      dispatch(postWishlistSuccess(response));
    } catch (error) {
      console.log(error)
      dispatch(postWishlistFailure(error));
    }
  };
};

export const deleteWishlist = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteWishlistRequest());
      const response = await wishlistService.deleteWishlist(id);
      dispatch(deleteWishlistSuccess(response));
      if (response) {
        dispatch(fetchWishlist());
      }
    } catch (error) {
      dispatch(deleteWishlistFailure(error));
    }
  };
};

export const searchWishlist = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(searchWishlistRequest());
      const response = await wishlistService.searchWishlist(Data);
      dispatch(searchWishlistSuccess(response));
    } catch (error) {
      dispatch(searchWishlistFailure(error));
    }
  };
};
