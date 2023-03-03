import feedbackService from "../services/feedback.service";
import {
  fetchFeedbackRequest,
  fetchFeedbackSuccess,
  fetchFeedbackFailure,
  postFeedbackRequest,
  postFeedbackSuccess,
  postFeedbackFailure,
  updateFeedbackRequest,
  updateFeedbackSuccess,
  updateFeedbackFailure,
  deleteFeedbackRequest,
  deleteFeedbackSuccess,
  deleteFeedbackFailure,
  searchFeedbackRequest,
  searchFeedbackSuccess,
  searchFeedbackFailure,
} from "../actions";

export const fetchFeedback = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchFeedbackRequest());
      const response = await feedbackService.getFeedback();
      dispatch(fetchFeedbackSuccess(response));
    } catch (error) {
      dispatch(fetchFeedbackFailure(error));
    }
  };
};

export const fetchSingleFeedback = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchFeedbackRequest());
      const response = await feedbackService.getSingleFeedback(id);
      dispatch(fetchFeedbackSuccess(response));
    } catch (error) {
      dispatch(fetchFeedbackFailure(error));
    }
  };
};

export const postFeedback = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(postFeedbackRequest());
      const response = await feedbackService.postFeedback(Data);
      if(response) dispatch(fetchFeedback());
      dispatch(postFeedbackSuccess(response));
    } catch (error) {
      console.log(error)
      dispatch(postFeedbackFailure(error));
    }
  };
};

export const updateFeedback = (id, Data) => {
  return async (dispatch) => {
    try {
      dispatch(updateFeedbackRequest());
      const response = await feedbackService.updateFeedback(id, Data);
      dispatch(updateFeedbackSuccess(response));
    } catch (error) {
      dispatch(updateFeedbackFailure(error));
    }
  };
};

export const deleteFeedback = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteFeedbackRequest());
      const response = await feedbackService.deleteFeedback(id);
      dispatch(deleteFeedbackSuccess(response));
      if (response) {
        dispatch(fetchFeedback());
      }
    } catch (error) {
      dispatch(deleteFeedbackFailure(error));
    }
  };
};

export const searchFeedback = (Data) => {
  return async (dispatch) => {
    try {
      dispatch(searchFeedbackRequest());
      const response = await feedbackService.searchFeedback(Data);
      dispatch(searchFeedbackSuccess(response));
    } catch (error) {
      dispatch(searchFeedbackFailure(error));
    }
  };
};
