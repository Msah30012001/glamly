import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateBrand,fetchBrand } from "../../redux/async/brand.async";

const EditBrand = () => {
  const brand = useSelector((state) => state.brand);
  const dispatch = useDispatch();
  const [Data, setData] = useState({
    name: "",
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
    if (brand.data) {
      setData({
        name: brand.data.name,
      });
    }
  }, [brand]);

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
                Edit Brand
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => dispatch(fetchBrand())}
              ></button>
            </div>
            <div className="modal-body row justify-content-center align-items-center">
              <form className="col-sm-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Brand
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
                    dispatch(updateBrand(brand.data._id, Data));
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
                onClick={() => dispatch(fetchBrand())}
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

export default EditBrand;
