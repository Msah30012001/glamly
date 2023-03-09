import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changePasswordUser } from "../redux/async/user.async";
import CheckCookie from "../components/CheckCookie";
import {toast} from "react-toastify";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [Data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

  return (
    <>
      <CheckCookie path="login" />
      <section>
        <div className="container" data-padding-top="62">
          <h4 className="fz-24 mb-25">Log in to your account</h4>
          <div className="row">
            <div className="col-12">
              <div className="login-form-content">
                <div className="login-form">
                  <form method="POST">
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
                      <label className="col-md-3" htmlFor="frm_pass">
                        Password
                      </label>
                      <div className="col-md-6">
                        <div className="pass-content">
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={Data.password}
                            onChange={inputEvent}
                            id="frm_pass"
                          />
                          {/* <span className="show-pass">show</span> */}
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3" htmlFor="frm_pass">
                        Confirm Password
                      </label>
                      <div className="col-md-6">
                        <div className="pass-content">
                          <input
                            type="password"
                            className="form-control"
                            name="confirmPassword"
                            value={Data.confirmPassword}
                            onChange={inputEvent}
                            id="frm_pass"
                          />
                          {/* <span className="show-pass">show</span> */}
                        </div>
                      </div>
                    </div>
                    <div className="form-group row mb-15">
                      <div className="col-12 text-center">
                        {/* <Link className="btn-forgot" href="#/">
                          Forgot your password?
                        </Link> */}
                        <button
                          className="btn-signin"
                          onClick={(e) => {
                            e.preventDefault();
                            if(Data.password === Data.confirmPassword){
                                dispatch(changePasswordUser(Data));
                            }else{
                                toast.error("confirm password and password should be same")
                            }
                          }}
                        >
                          Change Password
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                Already have an account?{" "}
                <Link to="/login">Log in instead!</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
