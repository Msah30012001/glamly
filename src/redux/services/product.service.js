import axios from "axios";
import { PRODUCT_API } from "../api";

const service = () => {
  const getProduct = () => {
    return axios
      .get(PRODUCT_API)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const getSingleProduct = (id) => {
    return axios
      .get(`${PRODUCT_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const postProduct = (Data) => {
    return axios
      .post(PRODUCT_API, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const updateProduct = (id, Data) => {
    return axios
      .patch(`${PRODUCT_API}/${id}`, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const deleteProduct = (id) => {
    return axios
      .delete(`${PRODUCT_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const searchProduct = (key) => {
    return axios
      .get(`${PRODUCT_API}/search/${key}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  return {
    getProduct,
    getSingleProduct,
    postProduct,
    updateProduct,
    deleteProduct,
    searchProduct,
  };
};

const productService = service();

export default productService;
