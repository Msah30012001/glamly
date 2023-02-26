import axios from "axios";
import { PRODUCT_DETAIL_API } from "../api";

const service = () => {
  const getProductDetail = (param) => {
    return axios
      .get(`${PRODUCT_DETAIL_API}/${param}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const getSimilarProduct = (param) => {
    return axios
      .get(`${PRODUCT_DETAIL_API}/similar/${param}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
   const getTrendingProduct = () => {
     return axios
       .get(`${PRODUCT_DETAIL_API}/p/trend`)
       .then((res) => res.data)
       .catch((err) => {
         throw err.response.data.message;
       });
   };
   const getMostViewedProduct = () => {
     return axios
       .get(`${PRODUCT_DETAIL_API}/p/most-viewed`)
       .then((res) => res.data)
       .catch((err) => {
         throw err.response.data.message;
       });
   };
  return {
    getProductDetail,
    getSimilarProduct,
    getTrendingProduct,
    getMostViewedProduct,
  };
};

const productDetailService = service();

export default productDetailService;
