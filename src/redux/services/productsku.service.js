import axios from "axios";
import { PRODUCT_SKU_API } from "../api";

const service = () => {
  const getProductSku = () => {
    return axios
      .get(PRODUCT_SKU_API)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
   const getWeeklyProductSku = () => {
     return axios
       .get(`${PRODUCT_SKU_API}/weekly`)
       .then((res) => res.data)
       .catch((err) => {
         throw err.response.data.message;
       });
   };
  const getSingleProductSku = (id) => {
    return axios
      .get(`${PRODUCT_SKU_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const postProductSku = (Data) => {
    return axios
      .post(PRODUCT_SKU_API, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const updateProductSku = (id, Data) => {
    return axios
      .patch(`${PRODUCT_SKU_API}/stock/${id}`, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const updateProductSkuIncrementView = (Data) => {
    return axios
      .patch(`${PRODUCT_SKU_API}/p/increment`, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const deleteProductSku = (id) => {
    return axios
      .delete(`${PRODUCT_SKU_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const searchProductSku = (key) => {
    return axios
      .get(`${PRODUCT_SKU_API}/search/${key}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  return {
    getProductSku,
    getWeeklyProductSku,
    getSingleProductSku,
    postProductSku,
    updateProductSku,
    updateProductSkuIncrementView,
    deleteProductSku,
    searchProductSku,
  };
};

const productSkuService = service();

export default productSkuService;
