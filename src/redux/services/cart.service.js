import axios from "axios";
import { CART_API } from "../api";

const service = () => {
  const getCart = () => {
    return axios
      .get(CART_API,{
        withCredentials:true
      })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const getSingleCart = (id) => {
    return axios
      .get(`${CART_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const postCart = (Data) => {
    return axios
      .post(CART_API, Data,{
        withCredentials:true
      })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const updateCart = (id, Data) => {
    return axios
      .patch(`${CART_API}/${id}`, Data, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const deleteCart = (id) => {
    return axios
      .delete(`${CART_API}/${id}`,{
        withCredentials:true
      })
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const searchCart = (key) => {
    return axios
      .get(`${CART_API}/search/${key}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  return {
    getCart,
    getSingleCart,
    postCart,
    updateCart,
    deleteCart,
    searchCart,
  };
};

const cartService = service();

export default cartService;
