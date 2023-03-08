import axios from "axios";
import { BRAND_API } from "../api";

const service = () => {
  const getBrand = () => {
    return axios
      .get(BRAND_API)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const getSingleBrand = (id) => {
    return axios
      .get(`${BRAND_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const postBrand = (Data) => {
    return axios
      .post(BRAND_API, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const updateBrand = (id, Data) => {
    return axios
      .patch(`${BRAND_API}/${id}`, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const deleteBrand = (id) => {
    return axios
      .delete(`${BRAND_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  const searchBrand = (key) => {
    return axios
      .get(`${BRAND_API}/search/${key}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message;
      });
  };
  return {
    getBrand,
    getSingleBrand,
    postBrand,
    updateBrand,
    deleteBrand,
    searchBrand,
  };
};

const brandService = service();

export default brandService;
