import React, { useState } from "react";
import {useDispatch} from "react-redux"
import {postFeedback} from "../../../redux/async/feedback.async"

const GiveFeedback = (props) => {
  const [Rate, setRate] = useState(1);
  const [Review, setReview] = useState("");
  const dispatch = useDispatch()
  const { _id } = props;
  return (
    <>
      <div
        class="modal fade"
        id="feedback"
        tabindex="-1"
        aria-labelledby="review"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="review">
                Write a Review
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="register-form-content">
                <div className="register-form">
                  <form action="#">
                    <div className="form-group row">
                      <label className="col-md-3" htmlFor="l_name">
                        Rate
                      </label>
                      <div className="col-md-9">
                        <select
                          className="form-control"
                          name="rate"
                          value={Rate}
                          onChange={(e) => {
                            setRate(e.target.value);
                          }}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3" htmlFor="l_name">
                        Review
                      </label>
                      <div className="col-md-9">
                        <textarea
                          className="form-control"
                          style={{ height: "100px" }}
                          value={Review}
                          onChange={(e) => {
                            setReview(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="row">
                  <div className="col-12 text-end">
                    <button
                      className="btn-save"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(
                          postFeedback({
                            product: _id,
                            rate: Rate,
                            review: Review,
                          })
                        );
                      }}
                    >
                      Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiveFeedback;
