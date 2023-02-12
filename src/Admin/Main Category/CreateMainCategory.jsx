import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postMainCategory } from "../../redux/async/maincategory.async";

const CreateMainCategory = () => {
  const dispatch = useDispatch();
  const [Data, setData] = useState({
    name: "",
    slug: "",
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;
    var slug = "";
    if (name === "name") {
      slug = value;
      slug = slug
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
    }
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
        slug: slug,
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
                Create new Main Category
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
                    Main Category
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={Data.name}
                    onChange={inputEvent}
                    placeholder="Enter category name here..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(postMainCategory(Data));
                    setData({name:"",slug:""})
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

export default CreateMainCategory;
