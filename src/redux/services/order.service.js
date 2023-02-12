import axios from "axios";
import { ORDER_API } from "../api";


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

const getData = (data) => {
  return fetch(`http://localhost:5000/api/payment`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

const makePayment = () => {
  getData({ amount: 500, email: "abc@gmail.com" }).then((response) => {
    var information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  });
};


const service = () => {
  const getOrder = () => {
    return axios
      .get(ORDER_API,{
        withCredentials: true
      })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const getSingleOrder = (id) => {
    return axios
      .get(`${ORDER_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const postOrder = (Data) => {
    return axios
      .post(ORDER_API, Data,{withCredentials: true})
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const updateOrder = (id, Data) => {
    return axios
      .patch(`${ORDER_API}/${id}`, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const deleteOrder = (id) => {
    return axios
      .delete(`${ORDER_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const searchOrder = (key) => {
    return axios
      .get(`${ORDER_API}/search/${key}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  return {
    getOrder,
    getSingleOrder,
    postOrder,
    updateOrder,
    deleteOrder,
    searchOrder,
  };
};

const orderService = service();

export default orderService;
