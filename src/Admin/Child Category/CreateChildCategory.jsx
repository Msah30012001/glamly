import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { postChildCategory } from "../../redux/async/childcategory.async";
import {fetchSubCategory} from "../../redux/async/subcategory.async";

const CreateChildCategory = () => {
  const dispatch = useDispatch();
  const subCategory = useSelector((state) => state.subCategory);
  const [Data, setData] = useState({
    name: "",
    slug: "",
    subCategory: ""
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
    dispatch(fetchSubCategory())
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
                Create new Child Category
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
                    Child Category
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
                    Select Sub Category
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="subCategory"
                    onChange={inputEvent}
                  >
                    <option>select sub category</option>
                    {
                      subCategory.data.map((item)=>{
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
                    dispatch(postChildCategory(Data));
                    setData({ name: "", slug: "",subCategory:"" });
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

export default CreateChildCategory;
