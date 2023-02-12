import React from "react";
import { Link } from "react-router-dom";
import CheckCookie from "../../components/CheckCookie";
import Address from "./Address"
import Profile from "./Profile"
import Order from "./Order"
import {destroyAuthUser} from "../../redux/async/user.async"
import {useDispatch} from "react-redux"

const Account = () => {
  const dispatch = useDispatch()
  return (
    <>
      <CheckCookie path="account" />
      <section>
        <div className="container" data-padding-top="62">
          <h4 className="fz-24 mb-25">Your account</h4>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="account-item">
                <div className="account-inner mb-30">
                  <Link
                    to="#/"
                    data-bs-toggle="modal"
                    data-bs-target="#profile"
                  >
                    <i className="fa fa-user-circle"></i>
                    <span>Profile</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="account-item">
                <div className="account-inner mb-30">
                  <Link
                    to="#/"
                    data-bs-toggle="modal"
                    data-bs-target="#address"
                  >
                    <i className="fa fa-map-marker"></i>
                    <span>Shipping & Billing Address</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="account-item">
                <div className="account-inner mb-30">
                  <Link
                    to="#/"
                    data-bs-toggle="modal"
                    data-bs-target="#order"
                  >
                    <i className="fa fa-calendar"></i>
                    <span>Order history and details</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="account-item">
                <div className="account-inner">
                  <Link to="/wishlist">
                    <i className="fa fa-heart"></i>
                    <span>Wishlist</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="account-item">
                <div className="account-inner">
                  <Link to="/cart">
                    <i className="fa fa-shopping-cart"></i>
                    <span>Cart</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="account-item">
                <div className="account-inner">
                  <Link
                    to="#/"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(destroyAuthUser());
                    }}
                  >
                    <i className="fa fa-smile-o"></i>
                    <span>Sign out</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Address />
      <Profile />
      <Order/>
    </>
  );
};

export default Account;
