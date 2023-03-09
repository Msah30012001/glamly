import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'
import Header from './App/Components/Header';
import PreLoader from './App/Components/PreLoader';
import Footer from './App/Components/Footer';
import Home from './App/Home'
import ProductDetails from './App/ProductDetails';
import ProductList from './App/ProductList';
import Login from './App/Login'
import Register from './App/Register'
import Account from './App/Account/Account'
import Wishlist from './App/Account/Wishlist'
import NotFound from "./components/NotFound";
import Cart from './App/Account/Cart'
import Checkout from "./App/Account/Checkout";
import AboutUs from "./App/AboutUs"
import Contact from "./App/Contact"
import PaymentStatus from "./App/Components/PaymentStatus"
import ForgotPassword from "./App/ForgotPassword"

function App() {
  return (
    <>
      <div className="wrapper home-default-wrapper">
        <PreLoader />
        <Header />
        <main className="main-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route exact path="/status/:orderId" element={<PaymentStatus />} />
            <Route path="/contact" element={<Contact />} />
            <Route exact path="/search" element={<ProductList />} />
            <Route exact path="/:slug" element={<ProductList />} />
            <Route path="/d/:slug" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />

        <div id="scroll-to-top" className="scroll-to-top">
          <span className="ion-md-arrow-up"></span>
        </div>

        <aside className="off-canvas-wrapper">
          <div className="off-canvas-inner">
            <div className="off-canvas-overlay"></div>

            <div className="off-canvas-content">
              <div className="off-canvas-header">
                <div className="close-action">
                  <button className="btn-menu-close">
                    menu<i className="icon-arrow-left"></i>
                  </button>
                </div>
              </div>

              <div className="off-canvas-item">
                <div className="res-mobile-menu menu-active-one"></div>
              </div>
            </div>
          </div>
        </aside>

        <div className="popup-product-quickview">
          <div className="product-single-item">
            <div className="row">
              <div className="col-md-6">
                <div className="product-thumb">
                  <div className="swiper-container single-product-thumb-content single-product-thumb-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <Link to="#/">
                          <img
                            src={`assets/img/shop/product-single/05.jpg`}
                            alt="HasTech"
                          />
                          <span className="product-flag-new">New</span>
                        </Link>
                      </div>
                      <div className="swiper-slide">
                        <Link to="#/">
                          <img
                            src={`assets/img/shop/product-single/06.jpg`}
                            alt="HasTech"
                          />
                          <span className="product-flag-new">New</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-container single-product-nav-content single-product-nav-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          src={`assets/img/shop/product-single/nav-05.jpg`}
                          alt="HasTech"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src={`assets/img/shop/product-single/nav-06.jpg`}
                          alt="HasTech"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-single-info mt-sm-70">
                  <h1 className="title">
                    Water And Wind Resistant Insulated Jacket
                  </h1>
                  <div className="product-info">
                    <div className="star-content">
                      <i className="ion-md-star"></i>
                      <i className="ion-md-star"></i>
                      <i className="ion-md-star"></i>
                      <i className="ion-md-star"></i>
                      <i className="ion-md-star icon-color-gray"></i>
                    </div>
                    <ul className="comments-advices">
                      <li>
                        <Link to="#/" className="reviews">
                          <i className="fa fa-commenting-o"></i>Read reviews (1)
                        </Link>
                      </li>
                      <li>
                        <Link to="#/" className="comment">
                          <i className="fa fa-pencil-square-o"></i>Write a
                          review
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="prices">
                    <span className="price">€14.52</span>
                    <div className="tax-label">Tax included</div>
                  </div>
                  <div className="product-description">
                    <ul className="product-desc-list">
                      <li>
                        Stay ready for a change in weather with the IZOD® Water
                        and Wind Resistant Insulated Jacket.
                      </li>
                      <li>Water-resistant jacket keeps you warm and dry.</li>
                      <li>Stand collar features an attached hood.</li>
                      <li>Front-zip closure.</li>
                    </ul>
                  </div>
                  <div className="product-quick-action">
                    <div className="product-quick-qty">
                      <div className="pro-qty">
                        <input
                          type="text"
                          id="quantity"
                          title="Quantity"
                          defaultValue="1"
                        />
                      </div>
                    </div>
                    <Link className="btn-product-add" to="single-product.html">
                      Add to cart
                    </Link>
                  </div>
                  <div className="product-wishlist-compare">
                    <Link to="#" className="btn-wishlist">
                      <i className="icon-heart"></i>Add to wishlist
                    </Link>
                    <Link to="#" className="btn-compare">
                      <i className="icon-shuffle"></i>Add to compare
                    </Link>
                  </div>
                  <div className="social-sharing">
                    <span>Share</span>
                    <div className="social-icons">
                      <Link to="#/">
                        <i className="la la-facebook"></i>
                      </Link>
                      <Link to="#/">
                        <i className="la la-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popup-product-overlay"></div>
        <button className="popup-product-close">
          <i className="la la-close"></i>
        </button>
      </div>
    </>
  );
}

export default App;
