import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProductSku } from "../../redux/async/productsku.async";
import { fetchProduct } from "../../redux/async/product.async";

const CreateProductSku = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [SpecificationValue, setSpecificationValue] = useState({});
  const [Data, setData] = useState({
    name: "",
    sku_code: "",
    product: "",
    thumbnail: null,
    thumbnail_hover: null,
    image: [],
    description: "",
    qty: 0,
    price: 0,
    discount: 0,
    status: 1,
    specification: {},
  });
  let specification = [];
  let specificationObj = [];
  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const inputEvent = (e) => {
    const { name, value } = e.target;
    let img = "";
    if (e.target.type === "file") {
      if (name === "thumbnail") {
        setData({ ...Data, thumbnail: e.target.files[0] });
      } else if (name === "thumbnail_hover") {
        setData({ ...Data, thumbnail_hover: e.target.files[0] });
      } else if (name === "image") {
        for (var i = 0; i < e.target.files.length; i++) {
          img = e.target.files[i];
          setData({ ...Data, image: [...Data.image, img] });
        }
      }
    } else {
      setData((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
    }
  };
  const inputSpecification = (e) => {
    const { name, value } = e.target;
    setSpecificationValue((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(this);
    formData.append('specification',JSON.stringify(SpecificationValue));
    formData.append("thumbnail",Data.thumbnail)
    formData.append("thumbnail_hover",Data.thumbnail_hover);
    Data.image.map((item)=>{
      formData.append("image",item)
    })
    formData.append("name",Data.name)
    formData.append("sku_code",Data.sku_code)
    formData.append("product",Data.product)
    formData.append("description",Data.description)
    formData.append("qty",Data.qty)
    formData.append("price",Data.price)
    formData.append("discount",Data.discount)
    formData.append("status",Data.status)
    console.log(formData)
    setData({ ...Data, specification: SpecificationValue });
    dispatch(postProductSku(formData));
  };
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  useEffect(() => {
    if (Data.product !== "") {
      for (var i = 0; i < product.data.length; i++) {
        if (product.data[i]._id === Data.product) {
          specificationObj = product.data[i].product_type[0].attribute;
          specificationObj = specificationObj.reduce(function (
            obj,
            item,
            index
          ) {
            obj[item.replace(/\s/g, "_")] = "";
            return obj;
          },
          {});
          setSpecificationValue({});
          setSpecificationValue((item) => {
            return {
              ...item,
              ...specificationObj,
            };
          });
          break;
        }
      }
    }
  }, [Data.product]);
  if (Data.product !== "") {
    for (var i = 0; i < product.data.length; i++) {
      if (product.data[i]._id === Data.product) {
        specification = product.data[i].product_type[0].attribute;
      }
    }
  }
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
                Create new Product sku
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body row justify-content-center align-items-center">
              <form
                className="col-sm-10"
                encType="multipart/form-data"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Product Sku Name
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
                        Product Sku Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="sku_code"
                        value={Data.sku_code}
                        onChange={inputEvent}
                        placeholder="Enter product code here..."
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Select Product
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        name="product"
                        onChange={inputEvent}
                      >
                        <option>select product</option>
                        {product.data.map((item) => {
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
                        Qty
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="qty"
                        value={Data.qty}
                        onChange={inputEvent}
                        placeholder="Enter product code here..."
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Price
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="price"
                        value={Data.price}
                        onChange={inputEvent}
                        placeholder="Enter product code here..."
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Discount
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="discount"
                        value={Data.discount}
                        onChange={inputEvent}
                        placeholder="Enter product code here..."
                      />
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
                    <div className="mb-3">
                      <fieldset>
                        <legend>specification</legend>
                        {specification.map((item, key) => {
                          return (
                            <>
                              <label htmlFor="name" className="form-label">
                                {item}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name={item.replace(/\s/g, "_")}
                                value={
                                  SpecificationValue[item.replace(/\s/g, "_")]
                                }
                                onChange={inputSpecification}
                                placeholder={`Enter ${item} here ...`}
                              />
                            </>
                          );
                        })}
                      </fieldset>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label">
                        product thumbnail
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        name="thumbnail"
                        onChange={inputEvent}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label">
                        product thumbnail hover
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        name="thumbnail_hover"
                        onChange={inputEvent}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label">
                        product images
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        name="image"
                        onChange={inputEvent}
                        multiple
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
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

export default CreateProductSku;
