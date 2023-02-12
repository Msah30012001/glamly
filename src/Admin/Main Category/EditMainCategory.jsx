import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateMainCategory,fetchMainCategory } from "../../redux/async/maincategory.async";

const EditMainCategory = () => {
  const mainCategory = useSelector((state) => state.mainCategory);
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
  useEffect(() => {
    if (mainCategory.data) {
      setData({
        name: mainCategory.data.name,
        slug:mainCategory.data.slug
      });
      // setData({
      //   code: category.data[0].category_code,
      //   name: category.data[0].category_name,
      // });
    }
  }, [mainCategory]);

  return (
    <>
      <div className="modal fade" id="edit" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-uppercase"
                id="exampleModalLabel"
              >
                Edit Main Category
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => dispatch(fetchMainCategory())}
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
                    value={Data.name || ""}
                    onChange={inputEvent}
                    name="name"
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
                    dispatch(updateMainCategory(mainCategory.data._id, Data));
                  }}
                >
                  Update
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => dispatch(fetchMainCategory())}
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

export default EditMainCategory;
