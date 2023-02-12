import axios from "axios";
import { MAIN_CATEGORY_API } from "../api";

const service = () => {
  const getCategory = () => {
    return axios
      .get(`${MAIN_CATEGORY_API}/all`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  return {
    getCategory,
  };
};

const categoryService = service();

export default categoryService;
