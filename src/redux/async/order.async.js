import orderService from "../services/order.service";
import paymentService from "../services/payment.service"
import {
  fetchOrderRequest,
  fetchOrderSuccess,
  fetchOrderFailure,
  postOrderRequest,
  postOrderSuccess,
  postOrderFailure,
  updateOrderRequest,
  updateOrderSuccess,
  updateOrderFailure,
  deleteOrderRequest,
  deleteOrderSuccess,
  deleteOrderFailure,
  searchOrderRequest,
  searchOrderSuccess,
  searchOrderFailure,
} from "../actions";





export const fetchOrder = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchOrderRequest());
      const response = await orderService.getOrder();
      console.log(response)
      dispatch(fetchOrderSuccess(response));
    } catch (error) {
      dispatch(fetchOrderFailure(error));
    }
  };
};

export const fetchSingleOrder = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchOrderRequest());
      const response = await orderService.getSingleOrder(id);
      dispatch(fetchOrderSuccess(response));
    } catch (error) {
      dispatch(fetchOrderFailure(error));
    }
  };
};

export const postOrder = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(postOrderRequest());
      const response = await orderService.postOrder(Data);
      console.log(Data)
      console.log(response)
      if(response && (Data.method === "PAY TO VENDOR" || Data.method === "CASH ON DELIVERY")){
        const paymentResponse = await paymentService.updatePayment(response.payment_id,{order:response._id});
        console.log(paymentResponse)
        if(paymentResponse){
          window.location.href="/thank-you"
        }
      }else if(response && (Data.method === "PAYTM")){

      }else if(response && (Data.method === "RAZOYPAY")){

      }
      console.log(response)
      dispatch(postOrderSuccess(response));
    } catch (error) {
      dispatch(postOrderFailure(error));
    }
  };
};

export const updateOrder = (id, Data) => {
  return async (dispatch) => {
    try {
      dispatch(updateOrderRequest());
      const response = await orderService.updateOrder(id, Data);
      dispatch(updateOrderSuccess(response));
    } catch (error) {
      dispatch(updateOrderFailure(error));
    }
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteOrderRequest());
      const response = await orderService.deleteOrder(id);
      dispatch(deleteOrderSuccess(response));
      if (response) {
        dispatch(fetchOrder());
      }
    } catch (error) {
      dispatch(deleteOrderFailure(error));
    }
  };
};

export const searchOrder = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(searchOrderRequest());
      const response = await orderService.searchOrder(Data);
      dispatch(searchOrderSuccess(response));
    } catch (error) {
      dispatch(searchOrderFailure(error));
    }
  };
};
