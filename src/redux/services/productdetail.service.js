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
  return {
    getProductDetail,
  };
};

const productDetailService = service();

export default productDetailService;
