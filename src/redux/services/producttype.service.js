import axios from "axios";
import { PRODUCT_TYPE_API } from "../api";

const service = () => {
  const getProductType = () => {
    return axios
      .get(PRODUCT_TYPE_API)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const getSingleProductType = (id) => {
    return axios
      .get(`${PRODUCT_TYPE_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const postProductType = (Data) => {
    return axios
      .post(PRODUCT_TYPE_API, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const updateProductType = (id, Data) => {
    return axios
      .patch(`${PRODUCT_TYPE_API}/${id}`, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const deleteProductType = (id) => {
    return axios
      .delete(`${PRODUCT_TYPE_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const searchProductType = (key) => {
    return axios
      .get(`${PRODUCT_TYPE_API}/search/${key}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  return {
    getProductType,
    getSingleProductType,
    postProductType,
    updateProductType,
    deleteProductType,
    searchProductType,
  };
};

const productTypeService = service();

export default productTypeService;
