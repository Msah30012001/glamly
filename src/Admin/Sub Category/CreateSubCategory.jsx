import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { postSubCategory } from "../../redux/async/subcategory.async";
import {fetchMainCategory} from "../../redux/async/maincategory.async";

const CreateSubCategory = () => {
  const dispatch = useDispatch();
  const mainCategory = useSelector((state) => state.mainCategory);
  const [Data, setData] = useState({
    name: "",
    slug: "",
    mainCategory: ""
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
  useEffect(()=>{
    dispatch(fetchMainCategory())
  },[dispatch])
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
                Create new Sub Category
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
                    Sub Category
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
                    {
                      mainCategory.data.map((item)=>{
                        return <option value={item._id} key={item._id}>{item.name}</option>;
                      })
                    }
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(postSubCategory(Data));
                    setData({ name: "", slug: "",mainCategory:"" });
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

export default CreateSubCategory;
