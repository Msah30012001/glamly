import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateProductType from "./CreateProductType";
import EditProductType from "./EditProductType";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import CheckAdminCookie from "../../components/CheckAdminCookie";
import {
  fetchProductType,
  searchProductType,
  deleteProductType,
  fetchSingleProductType
} from "../../redux/async/producttype.async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductType = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const productType = useSelector((state) => state.productType);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const lastIndex = currentPage * limit;
  const firstIndex = lastIndex - limit;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const previous = () => setCurrentPage(currentPage - 1);
  const next = () => setCurrentPage(currentPage + 1);

  useEffect(() => {
    if (search !== "") dispatch(searchProductType(search));
    else dispatch(fetchProductType());
    
  }, [search,dispatch]);  
  useEffect(()=>{
 if (productType.status === "SUCCESS") {
   (() => {
     toast.success(productType.message);
   })();
 }
 if (productType.status === "FAILED") {
   (() => {
     toast.error(productType.message);
   })();
 }
  },[productType.status,productType.message])

 
  return (
    <>
    <CheckAdminCookie path="product-type"/>
      <ToastContainer />
      <div className="product-header-wrap mr-20">
        <h4 className="text-primary">Product Type</h4>
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
        {productType.loading !== false ? <Loader /> : ""}
        <div className="card border-0">
          <div className="card-body table-responsive">
            <table className="table table-borderless table-striped">
              <thead>
                <tr>
                  <th scope="col">Description</th>
                  <th>Attribute</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(productType.data)
                  ? productType.data
                      .slice(firstIndex, lastIndex)
                      .map((item) => {
                        const { name,attribute, _id } = item;
                        return (
                          <tr key={_id}>
                            <td>{name}</td>
                            <td>{attribute.toString()}</td>
                            <td>
                              <button
                                className="btn btn-link"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                onClick={() =>
                                  dispatch(fetchSingleProductType(_id))
                                }
                                data-main_category_id={_id}
                              >
                                <i className="fa fa-pen-to-square fa-lg"></i>
                              </button>
                              <button
                                className="btn btn-link text-danger"
                                onClick={() =>
                                  dispatch(deleteProductType(_id))
                                }
                              >
                                <i className="fa fa-trash fa-lg"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })
                  : ""}

                {!productType.data.length ? (
                  <tr>
                    <td colSpan="3">No Record Found</td>
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
          total={productType.data.length}
          previous={previous}
          next={next}
          paginate={paginate}
          preNo={currentPage}
          nextNo={currentPage}
        />
        <CreateProductType />
        <EditProductType />
      </div>
    </>
  );
};

export default ProductType;
