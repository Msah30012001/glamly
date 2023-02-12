import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateProductSku from "./CreateProductSku";
import EditProductSku from "./EditProductSku";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
import CheckAdminCookie from "../../components/CheckAdminCookie";
import {
  fetchProductSku,
  searchProductSku,
  deleteProductSku,
  fetchSingleProductSku,
} from "../../redux/async/productsku.async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductSku = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const productSku = useSelector((state) => state.productSku);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const lastIndex = currentPage * limit;
  const firstIndex = lastIndex - limit;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const previous = () => setCurrentPage(currentPage - 1);
  const next = () => setCurrentPage(currentPage + 1);

  useEffect(() => {
    if (search !== "") dispatch(searchProductSku(search));
    else dispatch(fetchProductSku());
  }, [search, dispatch]);
  useEffect(() => {
    if (productSku.status === "SUCCESS") {
      (() => {
        toast.success(productSku.message);
      })();
    } else if (productSku.status === "FAILED") {
      (() => {
        toast.error(productSku.message);
      })();
    }
  }, [productSku.status, productSku.message]);

  return (
    <>
    <CheckAdminCookie path="product-sku"/>
      <ToastContainer />
      <div className="product-header-wrap mr-20">
        <h4 className="text-primary">Product Sku</h4>
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
        {productSku.loading !== false ? <Loader /> : ""}
        <div className="card border-0">
          <div className="card-body table-responsive">
            <table className="table table-borderless table-striped text-center">
              <thead>
                <tr>
                  <th colSpan="2">Description</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(productSku.data)
                  ? productSku.data.slice(firstIndex, lastIndex).map((item) => {
                      const {
                        _id,
                        name,
                        sku_code,
                        qty,
                        price,
                        discount,
                        thumbnail,
                        status,
                      } = item;
                      return (
                        <tr key={_id}>
                          <td>
                            <img src={`${process.env.PUBLIC_URL}/assets/upload/${thumbnail}`} height="100" />
                          </td>
                          <td>
                            {name}
                            <br />
                            {sku_code}
                          </td>
                          <td>{qty}</td>
                          <td>{price} /-</td>
                          <td>{discount} /-</td>
                          <td>
                            {status ? (
                              <span className="badge text-bg-success">Active</span>
                            ) : (
                              <span className="badge text-bg-danger">Deactive</span>
                            )}
                          </td>
                          <td>
                            <button
                              className="btn btn-link"
                              data-bs-toggle="modal"
                              data-bs-target="#edit"
                              onClick={() =>
                                dispatch(fetchSingleProductSku(_id))
                              }
                              data-main_category_id={_id}
                            >
                              <i className="fa fa-pen-to-square fa-lg"></i>
                            </button>
                            <button
                              className="btn btn-link text-danger"
                              onClick={() => dispatch(deleteProductSku(_id))}
                            >
                              <i className="fa fa-trash fa-lg"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : ""}

                {!productSku.data.length ? (
                  <tr>
                    <td colSpan="7">No Record Found</td>
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
          total={productSku.data.length}
          previous={previous}
          next={next}
          paginate={paginate}
          preNo={currentPage}
          nextNo={currentPage}
        />
        <CreateProductSku />
        <EditProductSku />
      </div>
    </>
  );
};

export default ProductSku;
