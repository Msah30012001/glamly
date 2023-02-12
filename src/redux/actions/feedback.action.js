import { FeedbackConstant } from "../constants";

const {
  FETCH_FEEDBACK_REQUEST,
  FETCH_FEEDBACK_SUCCESS,
  FETCH_FEEDBACK_FAILURE,
  POST_FEEDBACK_REQUEST,
  POST_FEEDBACK_SUCCESS,
  POST_FEEDBACK_FAILURE,
  UPDATE_FEEDBACK_REQUEST,
  UPDATE_FEEDBACK_SUCCESS,
  UPDATE_FEEDBACK_FAILURE,
  DELETE_FEEDBACK_REQUEST,
  DELETE_FEEDBACK_SUCCESS,
  DELETE_FEEDBACK_FAILURE,
  SEARCH_FEEDBACK_REQUEST,
  SEARCH_FEEDBACK_SUCCESS,
  SEARCH_FEEDBACK_FAILURE,
} = FeedbackConstant;

export const fetchFeedbackRequest = () => {
  return {
    type: FETCH_FEEDBACK_REQUEST,
  };
};

export const fetchFeedbackSuccess = (data) => {
  return {
    type: FETCH_FEEDBACK_SUCCESS,
    payload: data,
  };
};

export const fetchFeedbackFailure = (data) => {
  return {
    type: FETCH_FEEDBACK_FAILURE,
    payload: data,
  };
};

export const postFeedbackRequest = () => {
  return {
    type: POST_FEEDBACK_REQUEST,
  };
};

export const postFeedbackSuccess = (data) => {
  return {
    type: POST_FEEDBACK_SUCCESS,
    payload: data,
  };
};

export const postFeedbackFailure = (data) => {
  return {
    type: POST_FEEDBACK_FAILURE,
    payload: data,
  };
};

export const updateFeedbackRequest = () => {
  return {
    type: UPDATE_FEEDBACK_REQUEST,
  };
};

export const updateFeedbackSuccess = (data) => {
  return {
    type: UPDATE_FEEDBACK_SUCCESS,
    payload: data,
  };
};

export const updateFeedbackFailure = (data) => {
  return {
    type: UPDATE_FEEDBACK_FAILURE,
    payload: data,
  };
};

export const deleteFeedbackRequest = () => {
  return {
    type: DELETE_FEEDBACK_REQUEST,
  };
};

export const deleteFeedbackSuccess = (data) => {
  return {
    type: DELETE_FEEDBACK_SUCCESS,
    payload: data,
  };
};

export const deleteFeedbackFailure = (data) => {
  return {
    type: DELETE_FEEDBACK_FAILURE,
    payload: data,
  };
};

export const searchFeedbackRequest = () => {
  return {
    type: SEARCH_FEEDBACK_REQUEST,
  };
};

export const searchFeedbackSuccess = (data) => {
  return {
    type: SEARCH_FEEDBACK_SUCCESS,
    payload: data,
  };
};

export const searchFeedbackFailure = (data) => {
  return {
    type: SEARCH_FEEDBACK_FAILURE,
    payload: data,
  };
};
