import axios from "axios";
import { MAIN_CATEGORY_API } from "../api";

const service = () => {
  const getMainCategory = () => {
    return axios
      .get(MAIN_CATEGORY_API)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const getSingleMainCategory = (id) => {
    return axios
      .get(`${MAIN_CATEGORY_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const postMainCategory = (Data) => {
    return axios
      .post(MAIN_CATEGORY_API, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const updateMainCategory = (id,Data) => {
    return axios
      .patch(`${MAIN_CATEGORY_API}/${id}`, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const deleteMainCategory = (id) => {
    return axios
      .delete(`${MAIN_CATEGORY_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const searchMainCategory = (key) => {
    return axios
      .get(`${MAIN_CATEGORY_API}/search/${key}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  return {
    getMainCategory,
    getSingleMainCategory,
    postMainCategory,
    updateMainCategory,
    deleteMainCategory,
    searchMainCategory,
  };
};

const mainCategoryService = service();

export default mainCategoryService;