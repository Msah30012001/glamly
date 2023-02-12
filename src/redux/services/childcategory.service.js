import axios from "axios";
import { CHILD_CATEGORY_API } from "../api";

const service = () => {
  const getChildCategory = () => {
    return axios
      .get(CHILD_CATEGORY_API)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const getSingleChildCategory = (id) => {
    return axios
      .get(`${CHILD_CATEGORY_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const postChildCategory = (Data) => {
    return axios
      .post(CHILD_CATEGORY_API, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const updateChildCategory = (id, Data) => {
    return axios
      .patch(`${CHILD_CATEGORY_API}/${id}`, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const deleteChildCategory = (id) => {
    return axios
      .delete(`${CHILD_CATEGORY_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const searchChildCategory = (key) => {
    return axios
      .get(`${CHILD_CATEGORY_API}/search/${key}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  return {
    getChildCategory,
    getSingleChildCategory,
    postChildCategory,
    updateChildCategory,
    deleteChildCategory,
    searchChildCategory,
  };
};

const childCategoryService = service();

export default childCategoryService;
