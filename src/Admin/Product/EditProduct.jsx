import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateProduct,fetchProduct } from "../../redux/async/product.async";

const EditProduct = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
   const mainCategory = useSelector((state) => state.mainCategory);
  const brand = useSelector((state) => state.brand);
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
    if (product.data) {
      setData({
        name: product.data.name,
        brand: product.data.brand,
        mainCategory: product.data.mainCategory,
        subCategory: product.data.subCategory,
        childCategory: product.data.childCategory,
        description: product.data.description,
        code: product.data.code,
        productType: product.data.productType,
      });
    }
  }, [product])

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
                Edit Product
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => dispatch(fetchProduct())}
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
                    value={Data.name || ""}
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
                    value={Data.code || ""}
                    onChange={inputEvent}
                    placeholder="Enter product code here..."
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="brand" className="form-label">
                    Product Brand
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="brand"
                    onChange={inputEvent}
                    value={Data.brand}
                  >
                    <option>select brand</option>
                    {brand.data.map((item) => {
                      return (
                        <option value={item._id} key={item._id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
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
                        value={Data.mainCategory}
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
                        value={Data.childCategory}
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
                        value={Data.subCategory}
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
                        value={Data.productType}
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
                    value={Data.description || ""}
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
                    dispatch(updateProduct(product.data._id, Data));
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
                onClick={() => dispatch(fetchProduct())}
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

export default EditProduct;
