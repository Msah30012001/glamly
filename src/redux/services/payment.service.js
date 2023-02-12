import axios from "axios";
import { PAYMENT_API } from "../api";

const service = () => {
  const getPayment = () => {
    return axios
      .get(PAYMENT_API)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const getSinglePayment = (id) => {
    return axios
      .get(`${PAYMENT_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const postPayment = (Data) => {
    return axios
      .post(PAYMENT_API, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };


  const updatePayment = (id, Data) => {
    return axios
      .patch(`${PAYMENT_API}/${id}`, Data,{
        withCredentials:true
      })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };


  const deletePayment = (id) => {
    return axios
      .delete(`${PAYMENT_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const searchPayment = (key) => {
    return axios
      .get(`${PAYMENT_API}/search/${key}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  return {
    getPayment,
    getSinglePayment,
    postPayment,
    updatePayment,
    deletePayment,
    searchPayment,
  };
};

const paymentService = service();

export default paymentService;
