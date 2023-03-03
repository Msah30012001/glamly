import axios from "axios";
import { FEEDBACK_API } from "../api";

const service = () => {
  const getFeedback = () => {
    return axios
      .get(FEEDBACK_API)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const getSingleFeedback = (id) => {
    return axios
      .get(`${FEEDBACK_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const postFeedback = (Data) => {
    return axios
      .post(FEEDBACK_API, Data,{
        withCredentials:true
      })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err.response.data.message)
        throw err.response.data.message
      });
  };
  const updateFeedback = (id, Data) => {
    return axios
      .patch(`${FEEDBACK_API}/${id}`, Data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const deleteFeedback = (id) => {
    return axios
      .delete(`${FEEDBACK_API}/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  const searchFeedback = (key) => {
    return axios
      .get(`${FEEDBACK_API}/search/${key}`)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response.data.message
      });
  };
  return {
    getFeedback,
    getSingleFeedback,
    postFeedback,
    updateFeedback,
    deleteFeedback,
    searchFeedback,
  };
};

const feedbackService = service();

export default feedbackService;
