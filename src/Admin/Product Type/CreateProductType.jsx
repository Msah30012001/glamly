import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { postProductType } from "../../redux/async/producttype.async";

const CreateProductType = () => {
  const dispatch = useDispatch();
  const [Data, setData] = useState({
    name: "",
    attribute: []
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;
    var atr = "";
    if(name === "attribute") 
      atr = value.split(",")
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
        attribute: atr
      };
    });
  };
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
                Create new Product type
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
                    Product Type
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={Data.name}
                    onChange={inputEvent}
                    placeholder="Enter product type name here..."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Attribute list (value should separated by ,)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="attribute"
                    value={Data.attribute.toString()}
                    onChange={inputEvent}
                    placeholder="Enter product type name here..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(postProductType(Data));
                    setData({ name: "", attribute: [] });
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

export default CreateProductType;
