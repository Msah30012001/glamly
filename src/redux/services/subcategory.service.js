import axios from "axios";
import { SUB_CATEGORY_API } from "../api";

const service = () => {
  const getSubCategory = () => {
    return axios
      .get(SUB_CATEGORY_API)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const getSingleSubCategory = (id) => {
    return axios
      .get(`${SUB_CATEGORY_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const postSubCategory = (Data) => {
    return axios
      .post(SUB_CATEGORY_API, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const updateSubCategory = (id, Data) => {
    return axios
      .patch(`${SUB_CATEGORY_API}/${id}`, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const deleteSubCategory = (id) => {
    return axios
      .delete(`${SUB_CATEGORY_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const searchSubCategory = (key) => {
    return axios
      .get(`${SUB_CATEGORY_API}/search/${key}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  return {
    getSubCategory,
    getSingleSubCategory,
    postSubCategory,
    updateSubCategory,
    deleteSubCategory,
    searchSubCategory,
  };
};

const subCategoryService = service();

export default subCategoryService;
