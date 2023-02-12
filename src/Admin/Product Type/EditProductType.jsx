import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateProductType,fetchProductType } from "../../redux/async/producttype.async";

const EditProductType = () => {
  const productType = useSelector((state) => state.productType);
  const dispatch = useDispatch();
  const [Data, setData] = useState({
    name: "",
    attribute: []
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;
        var atr = "";
        if (name === "attribute") atr = value.split(",");
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
        attribute: atr,
      };
    });
  };
  useEffect(() => {
    if (productType.data) {
      setData({
        name: productType.data.name,
        attribute: productType.data.attribute
      });
    }
  }, [productType])

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
                Edit Product Type
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => dispatch(fetchProductType())}
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
                    value={Data.name || ""}
                    onChange={inputEvent}
                    name="name"
                    placeholder="Enter category name here..."
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
                    value={Data.attribute || ""}
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
                    dispatch(updateProductType(productType.data._id, Data));
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
                onClick={() => dispatch(fetchProductType())}
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

export default EditProductType;
