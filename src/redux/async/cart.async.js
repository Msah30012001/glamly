import cartService from "../services/cart.service";
import {
  fetchCartRequest,
  fetchCartSuccess,
  fetchCartFailure,
  postCartRequest,
  postCartSuccess,
  postCartFailure,
  updateCartRequest,
  updateCartSuccess,
  updateCartFailure,
  deleteCartRequest,
  deleteCartSuccess,
  deleteCartFailure,
  searchCartRequest,
  searchCartSuccess,
  searchCartFailure,
} from "../actions";

export const fetchCart = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCartRequest());
      const response = await cartService.getCart();
      dispatch(fetchCartSuccess(response));
    } catch (error) {
      dispatch(fetchCartFailure(error));
    }
  };
};

export const fetchSingleCart = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchCartRequest());
      const response = await cartService.getSingleCart(id);
      dispatch(fetchCartSuccess(response));
    } catch (error) {
      dispatch(fetchCartFailure(error));
    }
  };
};

export const postCart = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(postCartRequest());
      const response = await cartService.postCart(Data);
      if(response) dispatch(fetchCart())
      dispatch(postCartSuccess(response));
    } catch (error) {
      dispatch(postCartFailure(error));
    }
  };
};

export const updateCart = (id, Data) => {
  return async (dispatch) => {
    try {
      dispatch(updateCartRequest());
      const response = await cartService.updateCart(
        id,
        Data
      );
      dispatch(updateCartSuccess(response));
    } catch (error) {
      dispatch(updateCartFailure(error));
    }
  };
};

export const deleteCart = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteCartRequest());
      const response = await cartService.deleteCart(id);
      dispatch(deleteCartSuccess(response));
      if (response) {
        dispatch(fetchCart());
      }
    } catch (error) {
      dispatch(deleteCartFailure(error));
    }
  };
};

export const searchCart = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(searchCartRequest());
      const response = await cartService.searchCart(Data);
      dispatch(searchCartSuccess(response));
    } catch (error) {
      dispatch(searchCartFailure(error));
    }
  };
};
