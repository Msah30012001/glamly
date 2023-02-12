import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateSubCategory from "./CreateSubCategory";
import EditSubCategory from "./EditSubCategory";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import CheckAdminCookie from "../../components/CheckAdminCookie";
import {
  fetchSubCategory,
  searchSubCategory,
  deleteSubCategory,
  fetchSingleSubCategory
} from "../../redux/async/subcategory.async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubCategory = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const subCategory = useSelector((state) => state.subCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const lastIndex = currentPage * limit;
  const firstIndex = lastIndex - limit;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const previous = () => setCurrentPage(currentPage - 1);
  const next = () => setCurrentPage(currentPage + 1);

  useEffect(() => {
    if (search !== "") dispatch(searchSubCategory(search));
    else dispatch(fetchSubCategory());
    
  }, [search,dispatch]);  
  useEffect(()=>{
 if (subCategory.status === "SUCCESS") {
   (() => {
     toast.success(subCategory.message);
   })();
 }
 if (subCategory.status === "FAILED") {
   (() => {
     toast.error(subCategory.message);
   })();
 }
  },[subCategory.status,subCategory.message])

 
  return (
    <>
    <CheckAdminCookie path="sub-category"/>
      <ToastContainer />
      <div className="product-header-wrap mr-20">
        <h4 className="text-primary">Sub Category</h4>
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
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#create"
            >
              <i className="fa fa-plus mx-2"></i>Create
            </button>
          </div>
        </div>
      </div>
      <div className="product-body-wrap pt-55 mr-20">
        {subCategory.loading !== false ? <Loader /> : ""}
        <div className="card border-0">
          <div className="card-body table-responsive">
            <table className="table table-borderless table-striped">
              <thead>
                <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(subCategory.data)
                  ? subCategory.data
                      .slice(firstIndex, lastIndex)
                      .map((item) => {
                        const { name, _id } = item;
                        return (
                          <tr key={_id}>
                            <td>{name}</td>
                            <td>
                              <button
                                className="btn btn-link"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                onClick={() =>
                                  dispatch(fetchSingleSubCategory(_id))
                                }
                                data-main_category_id={_id}
                              >
                                <i className="fa fa-pen-to-square fa-lg"></i>
                              </button>
                              <button
                                className="btn btn-link text-danger"
                                onClick={() =>
                                  dispatch(deleteSubCategory(_id))
                                }
                              >
                                <i className="fa fa-trash fa-lg"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })
                  : ""}

                {!subCategory.data.length ? (
                  <tr>
                    <td colSpan="2">No Record Found</td>
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
          total={subCategory.data.length}
          previous={previous}
          next={next}
          paginate={paginate}
          preNo={currentPage}
          nextNo={currentPage}
        />
        <CreateSubCategory />
        <EditSubCategory />
      </div>
    </>
  );
};

export default SubCategory;
