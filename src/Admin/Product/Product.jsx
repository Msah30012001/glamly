import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import CheckAdminCookie from "../../components/CheckAdminCookie";
import {
  fetchProduct,
  searchProduct,
  deleteProduct,
  fetchSingleProduct
} from "../../redux/async/product.async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const lastIndex = currentPage * limit;
  const firstIndex = lastIndex - limit;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const previous = () => setCurrentPage(currentPage - 1);
  const next = () => setCurrentPage(currentPage + 1);

  useEffect(() => {
    if (search !== "") dispatch(searchProduct(search));
    else dispatch(fetchProduct());
    
  }, [search,dispatch]);  
  useEffect(()=>{
 if (product.status === "SUCCESS") {
   (() => {
     toast.success(product.message);
   })();
 }
 if (product.status === "FAILED") {
   (() => {
     toast.error(product.message);
   })();
 }
  },[product.status,product.message])

 
  return (
    <>
    <CheckAdminCookie path="product"/>
      <ToastContainer />
      <div className="product-header-wrap mr-20">
        <h4 className="text-primary">Product</h4>
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
        {product.loading !== false ? <Loader /> : ""}
        <div className="card border-0">
          <div className="card-body table-responsive">
            <table className="table table-borderless table-striped text-center">
              <thead>
                <tr>
                  <th scope="col">Description</th>
                  <th>Category</th>
                  <th>Product Type</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(product.data)
                  ? product.data
                      .slice(firstIndex, lastIndex)
                      .map((item) => {
                        const { _id,name,brand,code,main_category,sub_category,child_category,description,product_type } = item;
                        return (
                          <tr key={_id}>
                            <td>{name}<br/>{code}<br/>{brand}</td>
                            <td>{ main_category.length ?  main_category[0].name : "" }<br/>{ sub_category.length ? sub_category[0].name : ""}<br/>{ child_category.length ? child_category[0].name : ""}</td>
                            <td>{ product_type.length ? product_type[0].name : ""}</td>
                            <td>
                              <button
                                className="btn btn-link"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                onClick={() =>
                                  dispatch(fetchSingleProduct(_id))
                                }
                                data-main_category_id={_id}
                              >
                                <i className="fa fa-pen-to-square fa-lg"></i>
                              </button>
                              <button
                                className="btn btn-link text-danger"
                                onClick={() =>
                                  dispatch(deleteProduct(_id))
                                }
                              >
                                <i className="fa fa-trash fa-lg"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })
                  : ""}

                {!product.data.length ? (
                  <tr>
                    <td colSpan="4">No Record Found</td>
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
          total={product.data.length}
          previous={previous}
          next={next}
          paginate={paginate}
          preNo={currentPage}
          nextNo={currentPage}
        />
        <CreateProduct />
        <EditProduct />
      </div>
    </>
  );
};

export default Product;
