import React, { useState, useEffect } from "react";
import { fetchSingleUser } from "../../redux/async/user.async";
import { useDispatch, useSelector } from "react-redux";
import {updateUser} from "../../redux/async/user.async"

const Address = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [Shipping, setShipping] = useState({
    country: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
  });
  const [Billing, setBilling] = useState({
    country: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
  });

  const inputShipping = (e) => {
    const { name, value } = e.target;
    setShipping((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const inputBilling = (e) => {
    const { name, value } = e.target;
    setBilling((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    dispatch(fetchSingleUser());
  }, []);

  useEffect(() => {
    if (user.data.length && Object.hasOwn(user.data[0], 'shipping')) {
      setShipping({
        country: user.data[0].shipping.country,
        city: user.data[0].shipping.city,
        state: user.data[0].shipping.state,
        pincode: user.data[0].shipping.pincode,
        address: user.data[0].shipping.address,
      });
    }
    if (user.data.length && Object.hasOwn(user.data[0],"billing")) {
      setBilling({
        country: user.data[0].billing.country,
        city: user.data[0].billing.city,
        state: user.data[0].billing.state,
        pincode: user.data[0].billing.pincode,
        address: user.data[0].billing.address,
      });
    }
  }, [user]);

  return (
    <>
      <div id="address" className="modal fade" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Shipping & Billing
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body register-form-content">
              <form className="register-form">
                <div className="row">
                  <div className="col-sm-6">
                    <fieldset>
                      <legend>Shipping</legend>
                      <div className="form-group row">
                        <label className="col-md-3">Country</label>
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="text"
                            name="country"
                            value={Shipping.country}
                            onChange={inputShipping}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3">City</label>
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="text"
                            name="city"
                            value={Shipping.city}
                            onChange={inputShipping}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3">State</label>
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="text"
                            name="state"
                            value={Shipping.state}
                            onChange={inputShipping}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3">Pincode</label>
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="text"
                            name="pincode"
                            value={Shipping.pincode}
                            onChange={inputShipping}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3">Address</label>
                        <div className="col-md-6">
                          <textarea
                            className="form-control"
                            style={{ height: "200px" }}
                            name="address"
                            value={Shipping.address}
                            onChange={inputShipping}
                          ></textarea>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="col-sm-6">
                    <fieldset>
                      <legend className="form-check" htmlFor="check">
                        Billing
                      </legend>
                      <div className="form-group row">
                        <label className="col-md-3">Country</label>
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="text"
                            name="country"
                            value={Billing.country}
                            onChange={inputBilling}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3">City</label>
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="text"
                            name="city"
                            value={Billing.city}
                            onChange={inputBilling}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3">State</label>
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="text"
                            name="state"
                            value={Billing.state}
                            onChange={inputBilling}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3">Pincode</label>
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="text"
                            name="pincode"
                            value={Billing.pincode}
                            onChange={inputBilling}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3">Address</label>
                        <div className="col-md-6">
                          <textarea
                            className="form-control"
                            style={{ height: "200px" }}
                            name="address"
                            value={Billing.address}
                            onChange={inputBilling}
                          ></textarea>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary" onClick={(e)=>{
                        e.preventDefault()
                        dispatch(updateUser("",{shipping:Shipping,billing:Billing}))
                      }}>
                        Save
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
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

export default Address;
