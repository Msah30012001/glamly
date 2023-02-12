import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import { postUser } from "../redux/async/user.async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckCookie from "../components/CheckCookie";

const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [Data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    dob: "",
  });
  useEffect(() => {
    if (user.status === "SUCCESS") {
      (() => {
        toast.success(user.message);
      })();
    }
    if (user.status === "FAILED") {
      (() => {
        toast.error(user.message);
      })();
    }
  }, [user.status, user.message]);
  const inputEvent = (e) => {
    const { name, value } = e.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  console.log(Data);
  return (
    <>
      <CheckCookie path="register" />
      <ToastContainer />
      <section>
        <div className="container" data-padding-top="62">
          <h4 className="fz-24 mb-25">Create an account</h4>
          <div className="row">
            <div className="col-12">
              <div className="register-form-content">
                <div className="register-form">
                  <span className="login-account">
                    Already have an account? <Link to="/login">Log in instead!</Link>
                  </span>
                  <form action="#">
                    {/* <div className="form-group row">
                    <label className="col-md-3" htmlFor="frm_social">Social title</label>
                    <div className="col-md-6">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="frm_social" checked/>
                        <label className="form-check-label" htmlFor="frm_social">Mr.</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">Mrs.</label>
                      </div>
                    </div>
                  </div> */}
                    <div className="form-group row">
                      <label className="col-md-3" htmlFor="f_name">
                        Name
                      </label>
                      <div className="col-md-6">
                        <input
                          id="f_name"
                          className="form-control"
                          type="text"
                          name="name"
                          value={Data.name}
                          onChange={inputEvent}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3" htmlFor="frm_email">
                        Email
                      </label>
                      <div className="col-md-6">
                        <input
                          id="frm_email"
                          className="form-control"
                          type="email"
                          name="email"
                          value={Data.email}
                          onChange={inputEvent}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3" htmlFor="l_name">
                        Phone Number
                      </label>
                      <div className="col-md-6">
                        <input
                          id="l_name"
                          className="form-control"
                          type="text"
                          name="phone"
                          value={Data.phone}
                          onChange={inputEvent}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3" htmlFor="l_name">
                        Gender
                      </label>
                      <div className="col-md-6">
                        <select
                          className="form-control"
                          name="gender"
                          value={Data.gender}
                          onChange={inputEvent}
                        >
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                          <option value="O">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3" htmlFor="frm_pass">
                        Password
                      </label>
                      <div className="col-md-6">
                        <div className="pass-content">
                          <input
                            type="password"
                            className="form-control"
                            id="frm_pass"
                            name="password"
                            value={Data.password}
                            onChange={inputEvent}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3" htmlFor="frm_birt">
                        Date of Birth
                      </label>
                      <div className="col-md-6">
                        <input
                          id="frm_birt"
                          className="form-control"
                          type="date"
                          placeholder="MM/DD/YYYY"
                          name="dob"
                          value={Data.dob}
                          onChange={inputEvent}
                        />
                        {/* <span className="birth-date">(E.g.: 05/31/1970)</span> */}
                      </div>
                      <div className="col-md-3">
                        <span className="optional-label">Optional</span>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="row">
                  <div className="col-12 text-end">
                    <button
                      className="btn-save"
                      onClick={() => {
                        dispatch(postUser(Data));
                        setData({
                          name: "",
                          email: "",
                          phone: "",
                          gender: "",
                          password: "",
                          dob: "",
                        });
                      }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
