import axios from "axios";
import { WISHLIST_API } from "../api";

const service = () => {
  const getWishlist = () => {
    return axios
      .get(WISHLIST_API,{withCredentials:true})
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const getSingleWishlist = (id) => {
    return axios
      .get(`${WISHLIST_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const postWishlist = (Data) => {
    console.log(Data)
    return axios
      .post(WISHLIST_API, Data,{
        withCredentials:true
      })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err.response.data)
        throw err.response.data.message
      });
  };
  const deleteWishlist = (id) => {
    return axios
      .delete(`${WISHLIST_API}/${id}`,{withCredentials:true})
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const searchWishlist = (key) => {
    return axios
      .get(`${WISHLIST_API}/search/${key}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  return {
    getWishlist,
    getSingleWishlist,
    postWishlist,
    deleteWishlist,
    searchWishlist,
  };
};

const wishlistService = service();

export default wishlistService;
