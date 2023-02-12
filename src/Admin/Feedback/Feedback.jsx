import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import CheckAdminCookie from "../../components/CheckAdminCookie";

import {
  fetchFeedback,
  searchFeedback,
  deleteFeedback,
  fetchSingleFeedback,
} from "../../redux/async/feedback.async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Feedback = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedback);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const lastIndex = currentPage * limit;
  const firstIndex = lastIndex - limit;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const previous = () => setCurrentPage(currentPage - 1);
  const next = () => setCurrentPage(currentPage + 1);

  useEffect(() => {
    if (search !== "") dispatch(searchFeedback(search));
    else dispatch(fetchFeedback());
  }, [search, dispatch]);
  useEffect(() => {
    if (feedback.status === "SUCCESS") {
      (() => {
        toast.success(feedback.message);
      })();
    }
    if (feedback.status === "FAILED") {
      (() => {
        toast.error(feedback.message);
      })();
    }
  }, [feedback.status, feedback.message]);
console.log(feedback)
  return (
    <>
      <CheckAdminCookie path="feedback" />
      <ToastContainer />
      <div className="product-header-wrap mr-20">
        <h4 className="text-primary">Product Feedback</h4>
        <div className="row">
          <div className="col-4 col-sm-4 col-md-6">
            <div className="total-products">
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="search here..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            </div>
          </div>
          <div className="col-md-2 col-2 col-sm-2">
            <select
              className="form-control"
              onChange={(e) => setLimit(e.target.value)}
            >
              <option defaultValue="5">5</option>
              <option defaultValue="15">15</option>
              <option defaultValue="25">25</option>
              <option defaultValue="50">50</option>
              <option defaultValue="100">100</option>
            </select>
          </div>
          <div className="col-6 col-sm-6 col-md-4 text-end">
            {/* <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#create"
            >
              <i className="fa fa-plus mx-2"></i>Create
            </button> */}
          </div>
        </div>
      </div>
      <div className="product-body-wrap pt-55 mr-20">
        {feedback.loading !== false ? <Loader /> : ""}
        <div className="card border-0">
          <div className="card-body table-responsive">
            <table className="table table-borderless table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Product</th>
                  <th>Rate</th>
                  <th>Review</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(feedback.data)
                  ? feedback.data.slice(firstIndex, lastIndex).map((item) => {
                      const { user,product,rate,review,date, _id } = item;
                      return (
                        <tr key={_id}>
                          <td>{user[0].name}</td>
                          <td>{product[0].name}<br/>{product[0].sku_code}</td>
                          <td>{rate}</td>
                          <td>{review}</td>
                          <td>{date}</td>
                        </tr>
                      );
                    })
                  : ""}

                {!feedback.data.length ? (
                  <tr>
                    <td colSpan="5">No Record Found</td>
                  </tr>
                ) : (
                  ""
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          limit={limit}
          total={feedback.data.length}
          previous={previous}
          next={next}
          paginate={paginate}
          preNo={currentPage}
          nextNo={currentPage}
        />
      </div>
    </>
  );
};

export default Feedback;
