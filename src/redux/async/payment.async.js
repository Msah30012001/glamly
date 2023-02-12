import paymentService from "../services/payment.service";
import {
  fetchPaymentRequest,
  fetchPaymentSuccess,
  fetchPaymentFailure,
  postPaymentRequest,
  postPaymentSuccess,
  postPaymentFailure,
  updatePaymentRequest,
  updatePaymentSuccess,
  updatePaymentFailure,
  deletePaymentRequest,
  deletePaymentSuccess,
  deletePaymentFailure,
  searchPaymentRequest,
  searchPaymentSuccess,
  searchPaymentFailure,
} from "../actions";

export const fetchPayment = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPaymentRequest());
      const response = await paymentService.getPayment();
      dispatch(fetchPaymentSuccess(response));
    } catch (error) {
      dispatch(fetchPaymentFailure(error));
    }
  };
};

export const fetchSinglePayment = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPaymentRequest());
      const response = await paymentService.getSinglePayment(id);
      dispatch(fetchPaymentSuccess(response));
    } catch (error) {
      dispatch(fetchPaymentFailure(error));
    }
  };
};

export const postPayment = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(postPaymentRequest());
      const response = await paymentService.postPayment(Data);
      dispatch(postPaymentSuccess(response));
    } catch (error) {
      dispatch(postPaymentFailure(error));
    }
  };
};

export const updatePayment = (id, Data) => {
  return async (dispatch) => {
    try {
      dispatch(updatePaymentRequest());
      const response = await paymentService.updatePayment(
        id,
        Data
      );
      dispatch(updatePaymentSuccess(response));
    } catch (error) {
      dispatch(updatePaymentFailure(error));
    }
  };
};

export const deletePayment = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deletePaymentRequest());
      const response = await paymentService.deletePayment(id);
      dispatch(deletePaymentSuccess(response));
      if (response) {
        dispatch(fetchPayment());
      }
    } catch (error) {
      dispatch(deletePaymentFailure(error));
    }
  };
};

export const searchPayment = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(searchPaymentRequest());
      const response = await paymentService.searchPayment(Data);
      dispatch(searchPaymentSuccess(response));
    } catch (error) {
      dispatch(searchPaymentFailure(error));
    }
  };
};
