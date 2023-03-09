import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "../../redux/async/category.async";
import { fetchBrand } from "../../redux/async/brand.async";
import { fetchWishlist } from "../../redux/async/wishlist.async";
import { fetchProductList } from "../../redux/async/productlist.async";
import { fetchCart } from "../../redux/async/cart.async";
import { deleteCart } from "../../redux/async/cart.async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const category = useSelector((state) => state.category);
  const brand = useSelector((state) => state.brand);
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);
  const feedback = useSelector((state) => state.feedback);
  const user = useSelector((state) => state.user);
  let TotalPrice = 0;
  const dispatch = useDispatch();
  const [Search, setSearch] = useState(0);
  const [S, setS] = useState("");

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchBrand());
    dispatch(fetchCart());
    dispatch(fetchWishlist());
  }, [dispatch]);

  const showSearchBar = () => {
    if (Search) setSearch(0);
    else setSearch(1);
  };

  useEffect(() => {
    console.log(wishlist.status);
    if (wishlist.status === "SUCCESS") {
      (() => {
        toast.success(wishlist.message);
      })();
    }
    if (wishlist.status === "FAILED") {
      (() => {
        toast.error(wishlist.message);
      })();
    }
  }, [wishlist.status]);

  useEffect(() => {
    if (cart.status === "SUCCESS") {
      (() => {
        toast.success(cart.message);
      })();
    }
    if (cart.status === "FAILED") {
      (() => {
        toast.error(cart.message);
      })();
    }
  }, [cart.status]);

  useEffect(() => {
    if (feedback.status === "SUCCESS") {
      (() => {
        toast.success(feedback.message);
      })();
    }
    if (feedback.status === "FAILED") {
      (() => {
        toast.error(feedback.message);
      })();
    }
  }, [feedback.status]);
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
  }, [user.status]);
  return (
    <>
      <ToastContainer />
      <header className="header-area header-default header-style2">
        <div className="header-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 hidden-md-down">
                <div className="contact-email">
                  <span>
                    Email us:{" "}
                    <Link to="mailto:demo@example.com">demo@example.com</Link>
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 text-md-start text-lg-center text-center">
                <p>Additional 20% Off Sale Items – Please See Details</p>
              </div>
              <div className="col-md-6 col-lg-4 text-md-end text-center mt-sm-15">
                <div className="theme-setting">
                  <Link className="dropdown-btn" to="#" role="button">
                    Setting
                    <i className="ion-ios-arrow-down"></i>
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/account">My account</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Checkout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-middle hidden-md-down">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col col-md-4 col-sm-12">
                <div className="contact-link">
                  <div className="contact-info">
                    <span className="phone">
                      Call Us: <Link to="tel:(+123)4567890">(+123)4567890</Link>
                    </span>
                    <div className="time-contact">
                      7 Days a week from 9:00 am to 7:00 pm
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-md-4 col-sm-12">
                <div className="header-logo-area text-center">
                  <Link to="/">
                    <img
                      className="logo-main"
                      src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}
                      alt="Logo"
                    />
                    <img
                      className="logo-light d-none"
                      src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}
                      alt="Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col col-md-4 col-sm-12">
                <div className="header-action-area float-end">
                  <div className="search-content-wrap">
                    <button className="btn-search" onClick={showSearchBar}>
                      <span className="icon icon-search icon-magnifier"></span>
                    </button>
                    <div
                      className={`btn-search-content ${Search ? "show" : ""}`}
                    >
                      <form action="#" method="post">
                        <div className="form-input-item">
                          <input
                            type="text"
                            placeholder="Enter your search key ..."
                            value={S}
                            onChange={(e) => {
                              setS(e.target.value);
                            }}
                          />
                          <Link
                            type="submit"
                            className="btn-src"
                            to={`/search/?s=${S}`}
                            // onClick={(e) => {
                            //   e.preventDefault();
                            //   window.location.href = `/search/?s=${S}`;
                            // }}
                          >
                            <i className="icon-magnifier ml-15"></i>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="shop-button-group">
                    <div className="shop-button-item">
                      <Link className="shop-button" to="/wishlist">
                        <i className="icon-heart icon"></i>
                        <sup className="shop-count">{wishlist.data.length}</sup>
                      </Link>
                    </div>
                    <div className="shop-button-item">
                      <Link className="shop-button" to="/cart">
                        <i className="icon-bag icon"></i>
                        <sup className="shop-count">{cart.data.length}</sup>
                      </Link>
                      <div className="popup-cart-content">
                        <ul className="popup-product-list">
                          {cart.data.map((item) => {
                            return (
                              <li className="product-list-item" key={item._id}>
                                <Link to={`/d/${item.slug}`}>
                                  <img
                                    src={`${process.env.PUBLIC_URL}/assets/upload/${item.product[0].thumbnail}`}
                                    alt="HasTech"
                                  />
                                  <span className="product-title">
                                    {item.product[0].name}
                                  </span>
                                  <span className="product-quantity">
                                    {item.qty}x
                                  </span>
                                </Link>
                                <span className="product-price">
                                  {(item.product[0].price -
                                    item.product[0].discount) *
                                    item.qty}
                                </span>
                                <span className="visually-hidden">
                                  {
                                    (TotalPrice =
                                      TotalPrice +
                                      (item.product[0].price -
                                        item.product[0].discount) *
                                        item.qty)
                                  }
                                </span>
                                <Link
                                  className="product-close"
                                  to="#"
                                  onClick={() => {
                                    dispatch(deleteCart(item._id));
                                  }}
                                >
                                  <i className="la la-close"></i>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                        <div className="price-content">
                          <div className="cart-subtotals">
                            <div className="products">
                              <span className="label">Subtotal</span>
                              <span className="value">{TotalPrice} Rs</span>
                            </div>
                            <div className="products">
                              <span className="label">Shipping</span>
                              <span className="value">Free</span>
                            </div>
                          </div>
                          <div className="cart-total">
                            <span className="label">Total</span>
                            <span className="value">{TotalPrice} Rs</span>
                          </div>
                        </div>
                        <div className="checkout">
                          <Link to="/checkout" className="btn-Checkout">
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom sticky-header hidden-md-down">
          <div className="container">
            <div className="row align-items-center">
              <div className="col col-12 position-relative">
                <div className="header-align align-default justify-content-center">
                  <div className="header-navigation-area hidden-md-down">
                    <ul className="main-menu nav">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li className="has-submenu full-width">
                        <Link to="/all">Category</Link>
                        {category.data.map((item) => {
                          return (
                            // <li className="mega-menu-item" key={item._id}>
                            //   <Link
                            //     to={`/${item.slug}`}
                            //     className="mega-title"
                            //   >
                            //     {item.name}
                            //   </Link>
                            //   <ul>
                            <ul
                              className="submenu-nav submenu-nav-mega submenu-nav-width mt-0"
                              key={item._id}
                            >
                              {item.sub_category.map((sub) => {
                                return (
                                  // <li key={sub._id} className="mega-menu-item">
                                  //   <Link to={`/${sub.slug}`} className="">
                                  //     {sub.name}
                                  //   </Link>
                                  //   <ul className="pl-15">
                                  <>
                                    {item.child_category.map((child) => {
                                      if (child.subCategory === sub._id) {
                                        return (
                                          <li
                                            key={child._id}
                                            className="mega-menu-item"
                                          >
                                            <Link to={`/${child.slug}`}>
                                              {child.name}
                                            </Link>
                                          </li>
                                        );
                                      }
                                    })}
                                  </>
                                  //   </ul>
                                  // </li>
                                );
                              })}
                            </ul>
                          );
                        })}
                      </li>
                      <li className="has-submenu full-width">
                        <Link to="#">Brand</Link>
                        <ul className="submenu-nav submenu-nav-mega submenu-nav-width mt-0">
                          {brand.data.map((item) => {
                            return (
                              <li key={item._id} className="mega-menu-item">
                                <Link to={`/${item.name}`}>{item.name}</Link>
                              </li>
                            );
                          })}
                        </ul>
                        ;
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="responsive-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-4">
                <div className="header-item">
                  <button className="btn-menu" type="button">
                    <i className="icon-menu"></i>
                  </button>
                </div>
              </div>
              <div className="col-4">
                <div className="header-item justify-content-center">
                  <div className="header-logo-area">
                    <Link to="/">
                      <img
                        className="logo-main"
                        src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="header-item justify-content-end">
                  <Link className="btn-user" to="/account">
                    <i className="icon-user"></i>
                  </Link>
                  <Link className="btn-cart" to="/cart">
                    <i className="icon-bag"></i>
                    <span className="item-count">{cart.data.length}</span>
                  </Link>
                </div>
              </div>
              <div className="col-12">
                <div className="responsive-search-content">
                  <form action="#">
                    <div className="form-input-item">
                      <input
                        type="text"
                        placeholder="Enter your search key ..."
                        value={S}
                        onChange={(e) => {
                          setS(e.target.value);
                        }}
                      />
                      <button
                        type="submit"
                        className="btn-src"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `/search/?s=${S}`;
                        }}
                      >
                        <i className="icon-magnifier"></i>
                      </button>
                      {/* <div className="search-categorie">
                        <select className="form-select" name="poscats">
                          <option defaultValue="all">All categories</option>
                          <option defaultValue="1">Beauty &amp; Health</option>
                          <option defaultValue="2">- - Makeup</option>
                          <option defaultValue="3">- - - - Eyes</option>
                          <option defaultValue="4">- - - - Lips</option>
                          <option defaultValue="5">- - - - Face</option>
                          <option defaultValue="6">- - - - Makeup Tools</option>
                          <option defaultValue="7"> - - Skin Care</option>
                          <option defaultValue="8">- - - - Face</option>
                          <option defaultValue="9">- - - - Eyes</option>
                          <option defaultValue="10">- - - - Body</option>
                          <option defaultValue="11">
                            - - - - Skin Care Tools
                          </option>
                          <option defaultValue="12">- - Health Care</option>
                          <option defaultValue="13">
                            - - - - Massage &amp; Relaxation
                          </option>
                          <option defaultValue="14">
                            - - - - Household Health Monitors
                          </option>
                          <option defaultValue="15">
                            - - - - Chinese Medicine
                          </option>
                          <option defaultValue="16">
                            - - - - Personal Health Care Items
                          </option>
                          <option defaultValue="17">
                            - - Nail Art &amp; Tools
                          </option>
                          <option defaultValue="18">
                            - - - - Gel Nail Polish
                          </option>
                          <option defaultValue="19">- - - - Nail Drills</option>
                          <option defaultValue="20">- - - - Nail Dryers</option>
                          <option defaultValue="21">
                            - - - - Nail Glitter
                          </option>
                        </select>
                      </div> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
