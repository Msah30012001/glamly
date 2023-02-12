import axios from "axios";
import { PRODUCT_LIST_API } from "../api";

const service = () => {
  const getProductList = (param) => {
    return axios
      .get(`${PRODUCT_LIST_API}/${param}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  return {
    getProductList,
  };
};

const productListService = service();

export default productListService;
