import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authAdmin } from "../redux/async/admin.async";
import Cookies from "js-cookie";
import CheckAdminCookie from "../components/CheckAdminCookie";

const Login = () => {
  const dispatch = useDispatch();
  const [Data, setData] = useState({
    email: "",
    password: "",
  });
  console.log(Cookies.get());
  console.log(document.cookie);
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
      <CheckAdminCookie path="login" />
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
                    <div className="form-group row mb-15">
                      <div className="col-12 text-center">
                        {/* <Link className="btn-forgot" href="#/">
                          Forgot your password?
                        </Link> */}
                        <button
                          className="btn-signin"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(authAdmin(Data));
                          }}
                        >
                          Sign in
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <Link className="btn-create-account" href="register.html">
                  No account? Create one here
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
