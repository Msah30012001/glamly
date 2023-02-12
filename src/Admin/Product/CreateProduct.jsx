import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProduct } from "../../redux/async/product.async";
import { fetchMainCategory } from "../../redux/async/maincategory.async";
import { fetchSubCategory } from "../../redux/async/subcategory.async";
import { fetchChildCategory } from "../../redux/async/childcategory.async";
import { fetchProductType } from "../../redux/async/producttype.async";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const mainCategory = useSelector((state) => state.mainCategory);
  const subCategory = useSelector((state) => state.subCategory);
  const childCategory = useSelector((state) => state.childCategory);
  const productType = useSelector((state) => state.productType);
  const [Data, setData] = useState({
    name: "",
    brand: "",
    mainCategory: "",
    subCategory: "",
    childCategory: "",
    description: "",
    code: "",
    productType: "",
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    dispatch(fetchMainCategory());
    dispatch(fetchSubCategory());
    dispatch(fetchChildCategory());
    dispatch(fetchProductType());
  }, [dispatch]);
  return (
    <>
      <div className="modal fade" id="create" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-uppercase"
                id="exampleModalLabel"
              >
                Create new Product
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body row justify-content-center align-items-center">
              <form className="col-sm-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={Data.name}
                    onChange={inputEvent}
                    placeholder="Enter product name here..."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Product Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="code"
                    value={Data.code}
                    onChange={inputEvent}
                    placeholder="Enter product code here..."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Product Brand
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="brand"
                    value={Data.brand}
                    onChange={inputEvent}
                    placeholder="Enter product brand here..."
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Select Main Category
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="mainCategory"
                        onChange={inputEvent}
                      >
                        <option>select main category</option>
                        {mainCategory.data.map((item) => {
                          return (
                            <option value={item._id} key={item._id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Select Child Category
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="childCategory"
                        onChange={inputEvent}
                      >
                        <option>select child category</option>
                        {childCategory.data.map((item) => {
                          return (
                            <option value={item._id} key={item._id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Select Sub Category
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="subCategory"
                        onChange={inputEvent}
                      >
                        <option>select main category</option>
                        {subCategory.data.map((item) => {
                          return (
                            <option value={item._id} key={item._id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Select Product Type
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="productType"
                        onChange={inputEvent}
                      >
                        <option>select product type</option>
                        {productType.data.map((item) => {
                          return (
                            <option value={item._id} key={item._id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={Data.description}
                    onChange={inputEvent}
                    placeholder="Description here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(postProduct(Data));
                    setData({
                      name: "",
                      brand: "",
                      mainCategory: "",
                      subCategory: "",
                      childCategory: "",
                      description: "",
                      code: "",
                      productType: "",
                    });
                  }}
                >
                  Create
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
