import orderService from "../services/order.service";
import paymentService from "../services/payment.service";
import logo from "../../assets/img/logo.png";
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

function isDate(val) {
  // Cross realm comptatible
  return Object.prototype.toString.call(val) === "[object Date]";
}

function isObj(val) {
  return typeof val === "object";
}

function stringifyValue(val) {
  if (isObj(val) && !isDate(val)) {
    return JSON.stringify(val);
  } else {
    return val;
  }
}

function buildForm({ action, params }) {
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", action);

  Object.keys(params).forEach((key) => {
    const input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", key);
    input.setAttribute("value", stringifyValue(params[key]));
    form.appendChild(input);
  });

  return form;
}

function post(details) {
  const form = buildForm(details);
  document.body.appendChild(form);
  form.submit();
  form.remove();
}

async function displayRazorpay(_id) {
  const res = await loadRazorpay(
    "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online ?");
    return;
  }
  let data = await fetch("http://localhost:5000/api/payment/razorpay", {
    method: "POST",
    body: JSON.stringify({ order: _id }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    credentials: "include",
  });
  data = await data.json();
  console.log(data);

  var options = {
    key: "rzp_test_OlPBLALh7NvLzy", // Enter the Key ID generated from the Dashboard
    amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: data.currency,
    name: "Glamly", //your business name
    description: "Payment details",
    image: logo,
    order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: "http://localhost:5000/api/razorpay-callback",
    redirect: true,
    prefill: {
      name: data.name, //your customer's name
      email: data.email,
      contact: data.phone,
    },
    theme: {
      color: "#ec6b81",
    },
  };

  var rzp1 = new window.Razorpay(options);
  rzp1.open();
}

function loadRazorpay(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const fetchOrder = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchOrderRequest());
      const response = await orderService.getOrder();
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
      console.log(response);
      console.log(Data);
      if (
        response &&
        (Data.method === "PAY TO VENDOR" || Data.method === "CASH ON DELIVERY")
      ) {
        const paymentResponse = await paymentService.updatePayment(
          response.payment_id,
          { order: response._id }
        );
        if (paymentResponse) {
          window.location.href = `/status/${response.order_id}`;
        }
      } else if (response && Data.method === "PAYTM") {
        const paytmPaymentResponse = await paymentService.postPaytmPayment({
          order: response._id,
        });
        if (paytmPaymentResponse) {
          var information = {
            action: "https://securegw-stage.paytm.in/order/process",
            params: paytmPaymentResponse,
          };
          post(information);
          //  window.location.href = "/thank-you";
        }
      } else if (response && Data.method === "RAZORPAY") {
        displayRazorpay(response._id);
      }
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
