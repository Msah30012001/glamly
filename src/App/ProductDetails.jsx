import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "./Components/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import GiveFeedback from "./Components/Feedback/GiveFeedback";
import { fetchProductDetail } from "../redux/async/productdetail.async";
import { postWishlist } from "../redux/async/wishlist.async";
import { postCart } from "../redux/async/cart.async";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [Qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const param = useParams();

  useEffect(() => {
    dispatch(fetchProductDetail(`${param.slug}`));
  }, [param.slug]);
  console.log(Qty);
  return (
    <>
      <Breadcrumb />
      {productDetail.data.map((item) => {
        return (
          <section className="product-area product-single-area">
            <div className="container pt-60 pb-0">
              <div className="row">
                <div className="col-12">
                  <div className="product-single-item" data-margin-bottom="62">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="product-thumb">
                          <div className="swiper-container single-product-thumb-content single-product-thumb-slider2">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide zoom zoom-hover">
                                <Link
                                  className="lightbox-image"
                                  data-fancybox="gallery"
                                  to={`${process.env.PUBLIC_URL}/assets/upload/${item.thumbnail}`}
                                >
                                  <img
                                    src={`${process.env.PUBLIC_URL}/assets/upload/${item.thumbnail}`}
                                    alt="HasTech"
                                  />
                                  <span className="product-flag-new">New</span>
                                </Link>
                              </div>
                              <div className="swiper-slide zoom zoom-hover">
                                <Link
                                  className="lightbox-image"
                                  data-fancybox="gallery"
                                  to={`${process.env.PUBLIC_URL}/assets/upload/${item.thumbnail_hover}`}
                                >
                                  <img
                                    src={`${process.env.PUBLIC_URL}/assets/upload/${item.thumbnail_hover}`}
                                    alt="HasTech"
                                  />
                                  <span className="product-flag-new">New</span>
                                </Link>
                              </div>
                              {item.image.map((item) => {
                                return (
                                  <div
                                    className="swiper-slide zoom zoom-hover"
                                    key={item}
                                  >
                                    <Link
                                      className="lightbox-image"
                                      data-fancybox="gallery"
                                      to={`${process.env.PUBLIC_URL}/assets/upload/${item}`}
                                    >
                                      <img
                                        src={`${process.env.PUBLIC_URL}/assets/upload/${item}`}
                                        alt="HasTech"
                                      />
                                      <span className="product-flag-new">
                                        New
                                      </span>
                                    </Link>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div className="swiper-container single-product-nav-content single-product-nav-slider2">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <img
                                  src={`${process.env.PUBLIC_URL}/assets/upload/${item.thumbnail}`}
                                  alt="HasTech"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src={`${process.env.PUBLIC_URL}/assets/upload/${item.thumbnail_hover}`}
                                  alt="HasTech"
                                />
                              </div>
                              {item.image.map((item) => {
                                return (
                                  <div className="swiper-slide" key={item}>
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/upload/${item}`}
                                      alt="HasTech"
                                    />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="product-single-info mt-sm-70">
                          <h1 className="title">{item.name}</h1>
                          <div className="product-info">
                            <div className="star-content">
                              {((avg) => {
                                if (avg >= 0 && avg < 1) {
                                  return (
                                    <>
                                      <i className="ion-md-star icon-color-gray"></i>
                                      <i className="ion-md-star icon-color-gray"></i>
                                      <i className="ion-md-star icon-color-gray"></i>
                                      <i className="ion-md-star icon-color-gray"></i>
                                      <i className="ion-md-star icon-color-gray"></i>
                                    </>
                                  );
                                } else if (avg >= 1 && avg < 2) {
                                  return (
                                    <>
                                      <i className="ion-md-star"></i>
                                      <i className="ion-md-star icon-color-gray"></i>
                                      <i className="ion-md-star icon-color-gray"></i>
                                      <i className="ion-md-star icon-color-gray"></i>
                                      <i className="ion-md-star icon-color-gray"></i>
                                    </>
                                  );
                                } else if (avg >= 2 && avg < 3) {
                                  return (
                                    <>
                                      <i className="ion-md-star"></i>
                                      <i className="ion-md-star"></i>
                                      <i className="ion-md-star icon-color-gray"></i>
                                      <i className="ion-md-star icon-color-gray"></i>
                                      <i className="ion-md-star icon-color-gray"></i>
                                    </>
                                  );
                                } else if (avg >= 3 && avg < 4) {
                                  return (
                                    <>
                                      <i className="ion-md-star"></i>
                                      <i className="ion-md-star"></i>
                                      <i className="ion-md-star"></i>
                                      <i className="ion-md-star icon-color-gray"></i>
                                      <i className="ion-md-star icon-color-gray"></i>
                                    </>
                                  );
                                } else if (avg >= 4 && avg < 5) {
                                  return (
                                    <>
                                      <i className="ion-md-star"></i>
                                      <i className="ion-md-star"></i>
                                      <i className="ion-md-star"></i>
                                      <i className="ion-md-star"></i>
                                      <i className="ion-md-star icon-color-gray"></i>
                                    </>
                                  );
                                } else {
                                  return (
                                    <>
                                      <i className="ion-md-star"></i>
                                      <i className="ion-md-star"></i>
                                      <i className="ion-md-star"></i>
                                      <i className="ion-md-star"></i>
                                      <i className="ion-md-star"></i>
                                    </>
                                  );
                                }
                              })(item.avg)}
                            </div>
                            <ul className="comments-advices">
                              <li>
                                <Link to="#/" className="reviews">
                                  <i className="fa fa-commenting-o"></i>Read
                                  reviews (1)
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#/"
                                  className="comment"
                                  data-bs-toggle="modal"
                                  data-bs-target="#feedback"
                                >
                                  <i className="fa fa-pencil-square-o"></i>Write
                                  a review
                                </Link>
                                <GiveFeedback _id={item._id}/>
                              </li>
                            </ul>
                          </div>
                          <div className="prices">
                            <span className="price">
                              {item.price - item.discount}
                              Rs
                            </span>
                            <span className="price text-secondary">
                              <del>{item.price} Rs</del>
                            </span>
                            <div className="tax-label">Tax included</div>
                          </div>
                          <div className="product-description">
                            {item.description}
                          </div>
                          <div className="product-quick-action">
                            <div className="product-quick-qty">
                              <div className="pro-qty">
                                <input
                                  type="text"
                                  id="quantity"
                                  title="Quantity"
                                  value={Qty}
                                  onChange={(e) => {
                                    setQty(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                            <Link
                              className="btn-product-add"
                              to="#"
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(
                                  postCart({ product: item._id, qty: Qty })
                                );
                              }}
                            >
                              Add to cart
                            </Link>
                          </div>
                          <div className="product-wishlist-compare">
                            <Link
                              to="#"
                              className="btn-wishlist"
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(
                                  postWishlist({
                                    product: item._id,
                                  })
                                );
                              }}
                            >
                              <i className="icon-heart"></i>Add to wishlist
                            </Link>
                            <Link to="compare.html" className="btn-compare">
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
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="product-review-tabs-content">
                    <ul
                      className="nav product-tab-nav"
                      id="ReviewTab"
                      role="tablist"
                    >
                      <li role="presentation">
                        <Link
                          className="active"
                          id="description-tab"
                          data-bs-toggle="pill"
                          to="#description"
                          role="tab"
                          aria-controls="description"
                          aria-selected="true"
                        >
                          Description
                        </Link>
                      </li>
                      <li role="presentation">
                        <Link
                          id="product-details-tab"
                          data-bs-toggle="pill"
                          to="#product-details"
                          role="tab"
                          aria-controls="product-details"
                          aria-selected="false"
                        >
                          Product Details
                        </Link>
                      </li>
                      <li role="presentation">
                        <Link
                          id="reviews-tab"
                          data-bs-toggle="pill"
                          to="#reviews"
                          role="tab"
                          aria-controls="reviews"
                          aria-selected="false"
                        >
                          Reviews
                        </Link>
                      </li>
                    </ul>
                    <div
                      className="tab-content product-tab-content"
                      id="ReviewTabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="description"
                        role="tabpanel"
                        aria-labelledby="description-tab"
                      >
                        <div className="product-description">
                          {item.description}
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="product-details"
                        role="tabpanel"
                        aria-labelledby="product-details-tab"
                      >
                        <div className="product-details">
                          <div className="product-quantities">
                            <span>In stock</span>
                            {item.qty} Items
                          </div>
                          <div className="product-data-sheet">
                            <span>specification</span>
                            <dl className="data-sheet">
                              {Object.keys(item.specification).map((x) => {
                                return (
                                  <>
                                    <dt className="name" key={x}>
                                      {x}
                                    </dt>
                                    <dd className="value">
                                      {item.specification[x]}
                                    </dd>
                                  </>
                                );
                              })}
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="reviews"
                        role="tabpanel"
                        aria-labelledby="reviews-tab"
                      >
                        <div className="product-comments-content">
                          <div className="comment clearfix">
                            <div className="comment-author">
                              <span className="grade">Grade</span>
                              <div className="star-content">
                                <i className="ion-md-star"></i>
                                <i className="ion-md-star"></i>
                                <i className="ion-md-star"></i>
                                <i className="ion-md-star"></i>
                                <i className="ion-md-star icon-color-gray"></i>
                              </div>
                              <div className="comment-author-info">
                                <span className="title">posthemes</span>
                                <span className="date">05/19/2021</span>
                              </div>
                            </div>
                            <Link
                              to="#/"
                              className="btn-review"
                              data-bs-toggle="modal"
                              data-bs-target="#feedback"
                            >
                              Write your review !
                            </Link>


                            <div className="comment-author">
                              <span className="grade">Grade</span>
                              <div className="star-content">
                                <i className="ion-md-star"></i>
                                <i className="ion-md-star"></i>
                                <i className="ion-md-star"></i>
                                <i className="ion-md-star"></i>
                                <i className="ion-md-star icon-color-gray"></i>
                              </div>
                              <div className="comment-author-info">
                                <span className="title">posthemes</span>

                                <span className="date">05/19/2021</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
      <section className="product-area">
        <div className="container pt-60">
          <div className="row">
            <div className="col-sm-8 m-auto">
              <div className="section-title text-center">
                <h2 className="title">You Might Also Like</h2>
                <div className="desc">
                  <p>Add Related products to weekly line up</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-slider owl-carousel owl-theme"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-area">
        <div className="container pt-0">
          <div className="row">
            <div className="col-sm-8 m-auto">
              <div className="section-title text-center">
                <h2 className="title">Other Products</h2>
                <div className="desc">
                  <p>12 other products in the same category:</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-slider owl-carousel owl-theme">
                <div className="item">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img src="assets/img/shop/06.jpg" alt="HasTech" />
                        </Link>
                        <div className="product-action">
                          <div className="addto-wrap">
                            <Link
                              className="add-wishlist"
                              to="wishlist.html"
                              title="Add to wishlist"
                            >
                              <i className="icon-heart icon"></i>
                            </Link>
                            <Link
                              className="add-compare"
                              to="compare.html"
                              title="Add to compare"
                            >
                              <i className="icon-shuffle icon"></i>
                            </Link>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                          <li className="discount visually-hidden">-5%</li>
                        </ul>
                      </div>
                      <div className="product-desc">
                        <div className="product-info">
                          <h4 className="title">
                            <Link to="single-product.html">
                              New Balance Fresh Foam Kaymin
                            </Link>
                          </h4>
                          <div className="star-content">
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                          </div>
                          <div className="prices">
                            <span className="price-old visually-hidden">
                              €14.52
                            </span>
                            <span className="price text-black">€23.06</span>
                          </div>
                        </div>
                        <div className="product-footer">
                          <Link className="btn-product-add" to="cart.html">
                            Add to cart
                          </Link>
                          <Link
                            className="btn-quick-view"
                            to="#"
                            title="Quick view"
                          >
                            Quick view
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img src="assets/img/shop/07.jpg" alt="HasTech" />
                          <img
                            className="second-image"
                            src="assets/img/shop/07-h1.jpg"
                            alt="HasTech"
                          />
                        </Link>
                        <div className="product-action">
                          <div className="addto-wrap">
                            <Link
                              className="add-wishlist"
                              to="wishlist.html"
                              title="Add to wishlist"
                            >
                              <i className="icon-heart icon"></i>
                            </Link>
                            <Link
                              className="add-compare"
                              to="compare.html"
                              title="Add to compare"
                            >
                              <i className="icon-shuffle icon"></i>
                            </Link>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                          <li className="discount">-20%</li>
                        </ul>
                      </div>
                      <div className="product-desc">
                        <div className="product-info">
                          <h4 className="title">
                            <Link to="single-product.html">
                              Juicy Couture Solid Sleeve Puffer Jacket
                            </Link>
                          </h4>
                          <div className="star-content">
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                          </div>
                          <div className="prices">
                            <span className="price-old">€23.06</span>
                            <span className="price">€18.45</span>
                          </div>
                        </div>
                        <div className="product-footer">
                          <Link className="btn-product-add" to="cart.html">
                            Add to cart
                          </Link>
                          <Link
                            className="btn-quick-view"
                            to="#"
                            title="Quick view"
                          >
                            Quick view
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img src="assets/img/shop/08.jpg" alt="HasTech" />
                          <img
                            className="second-image"
                            src="assets/img/shop/08-h1.jpg"
                            alt="HasTech"
                          />
                        </Link>
                        <div className="product-action">
                          <div className="addto-wrap">
                            <Link
                              className="add-wishlist"
                              to="wishlist.html"
                              title="Add to wishlist"
                            >
                              <i className="icon-heart icon"></i>
                            </Link>
                            <Link
                              className="add-compare"
                              to="compare.html"
                              title="Add to compare"
                            >
                              <i className="icon-shuffle icon"></i>
                            </Link>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                          <li className="discount visually-hidden">-20%</li>
                        </ul>
                      </div>
                      <div className="product-desc">
                        <div className="product-info">
                          <h4 className="title">
                            <Link to="single-product.html">
                              New Balance Fresh Foam LAZR v1 Sport
                            </Link>
                          </h4>
                          <div className="star-content">
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                          </div>
                          <div className="prices">
                            <span className="price-old visually-hidden">
                              €23.06
                            </span>
                            <span className="price text-black">€23.06</span>
                          </div>
                        </div>
                        <div className="product-footer">
                          <Link className="btn-product-add" to="cart.html">
                            Add to cart
                          </Link>
                          <Link
                            className="btn-quick-view"
                            to="#"
                            title="Quick view"
                          >
                            Quick view
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img src="assets/img/shop/09.jpg" alt="HasTech" />
                        </Link>
                        <div className="product-action">
                          <div className="addto-wrap">
                            <Link
                              className="add-wishlist"
                              to="wishlist.html"
                              title="Add to wishlist"
                            >
                              <i className="icon-heart icon"></i>
                            </Link>
                            <Link
                              className="add-compare"
                              to="compare.html"
                              title="Add to compare"
                            >
                              <i className="icon-shuffle icon"></i>
                            </Link>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                          <li className="discount visually-hidden">-20%</li>
                        </ul>
                      </div>
                      <div className="product-desc">
                        <div className="product-info">
                          <h4 className="title">
                            <Link to="single-product.html">
                              Brixton Patrol All Terrain Anorak Jacket
                            </Link>
                          </h4>
                          <div className="star-content">
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                          </div>
                          <div className="prices">
                            <span className="price-old visually-hidden">
                              €23.06
                            </span>
                            <span className="price text-black">€35.38</span>
                          </div>
                        </div>
                        <div className="product-footer">
                          <Link className="btn-product-add" to="cart.html">
                            Add to cart
                          </Link>
                          <Link
                            className="btn-quick-view"
                            to="#"
                            title="Quick view"
                          >
                            Quick view
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img src="assets/img/shop/01.jpg" alt="HasTech" />
                          <img
                            className="second-image"
                            src="assets/img/shop/01-h1.jpg"
                            alt="HasTech"
                          />
                        </Link>
                        <div className="product-action">
                          <div className="addto-wrap">
                            <Link
                              className="add-wishlist"
                              to="wishlist.html"
                              title="Add to wishlist"
                            >
                              <i className="icon-heart icon"></i>
                            </Link>
                            <Link
                              className="add-compare"
                              to="compare.html"
                              title="Add to compare"
                            >
                              <i className="icon-shuffle icon"></i>
                            </Link>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                          <li className="discount">-10%</li>
                        </ul>
                      </div>
                      <div className="product-desc">
                        <div className="product-info">
                          <h4 className="title">
                            <Link to="single-product.html">
                              Originals Kaval Windbreaker Winter Jac...
                            </Link>
                          </h4>
                          <div className="star-content">
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                          </div>
                          <div className="prices">
                            <span className="price-old">€29.16</span>
                            <span className="price">€26.24</span>
                          </div>
                        </div>
                        <div className="product-footer">
                          <Link className="btn-product-add" to="cart.html">
                            Add to cart
                          </Link>
                          <Link
                            className="btn-quick-view"
                            to="#"
                            title="Quick view"
                          >
                            Quick view
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img src="assets/img/shop/02.jpg" alt="HasTech" />
                          <img
                            className="second-image"
                            src="assets/img/shop/02-h1.jpg"
                            alt="HasTech"
                          />
                        </Link>
                        <div className="product-action">
                          <div className="addto-wrap">
                            <Link
                              className="add-wishlist"
                              to="wishlist.html"
                              title="Add to wishlist"
                            >
                              <i className="icon-heart icon"></i>
                            </Link>
                            <Link
                              className="add-compare"
                              to="compare.html"
                              title="Add to compare"
                            >
                              <i className="icon-shuffle icon"></i>
                            </Link>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                          <li className="discount visually-hidden">-10%</li>
                        </ul>
                      </div>
                      <div className="product-desc">
                        <div className="product-info">
                          <h4 className="title">
                            <Link to="single-product.html">
                              Juicy Couture Juicy Quilted Terry Track...
                            </Link>
                          </h4>
                          <div className="star-content">
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                          </div>
                          <div className="prices">
                            <span className="price-old visually-hidden">
                              €29.16
                            </span>
                            <span className="price text-black">€43.80</span>
                          </div>
                        </div>
                        <div className="product-footer">
                          <Link className="btn-product-add" to="cart.html">
                            Add to cart
                          </Link>
                          <Link
                            className="btn-quick-view"
                            to="#"
                            title="Quick view"
                          >
                            Quick view
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img src="assets/img/shop/03.jpg" alt="HasTech" />
                          <img
                            className="second-image"
                            src="assets/img/shop/03-h1.jpg"
                            alt="HasTech"
                          />
                        </Link>
                        <div className="product-action">
                          <div className="addto-wrap">
                            <Link
                              className="add-wishlist"
                              to="wishlist.html"
                              title="Add to wishlist"
                            >
                              <i className="icon-heart icon"></i>
                            </Link>
                            <Link
                              className="add-compare"
                              to="compare.html"
                              title="Add to compare"
                            >
                              <i className="icon-shuffle icon"></i>
                            </Link>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                          <li className="discount">-5%</li>
                        </ul>
                      </div>
                      <div className="product-desc">
                        <div className="product-info">
                          <h4 className="title">
                            <Link to="single-product.html">
                              Madden by Steve Madden Cale 6
                            </Link>
                          </h4>
                          <div className="star-content">
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                          </div>
                          <div className="prices">
                            <span className="price-old">€14.52</span>
                            <span className="price">€13.79</span>
                          </div>
                        </div>
                        <div className="product-footer">
                          <Link className="btn-product-add" to="cart.html">
                            Add to cart
                          </Link>
                          <Link
                            className="btn-quick-view"
                            to="#"
                            title="Quick view"
                          >
                            Quick view
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img src="assets/img/shop/04.jpg" alt="HasTech" />
                          <img
                            className="second-image"
                            src="assets/img/shop/04-h1.jpg"
                            alt="HasTech"
                          />
                        </Link>
                        <div className="product-action">
                          <div className="addto-wrap">
                            <Link
                              className="add-wishlist"
                              to="wishlist.html"
                              title="Add to wishlist"
                            >
                              <i className="icon-heart icon"></i>
                            </Link>
                            <Link
                              className="add-compare"
                              to="compare.html"
                              title="Add to compare"
                            >
                              <i className="icon-shuffle icon"></i>
                            </Link>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                          <li className="discount visually-hidden">-5%</li>
                        </ul>
                      </div>
                      <div className="product-desc">
                        <div className="product-info">
                          <h4 className="title">
                            <Link to="single-product.html">
                              Trans-Weight Hooded Wind and Water...
                            </Link>
                          </h4>
                          <div className="star-content">
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                          </div>
                          <div className="prices">
                            <span className="price-old visually-hidden">
                              €14.52
                            </span>
                            <span className="price text-black">€14.52</span>
                          </div>
                        </div>
                        <div className="product-footer">
                          <Link className="btn-product-add" to="cart.html">
                            Add to cart
                          </Link>
                          <Link
                            className="btn-quick-view"
                            to="#"
                            title="Quick view"
                          >
                            Quick view
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img src="assets/img/shop/05.jpg" alt="HasTech" />
                          <img
                            className="second-image"
                            src="assets/img/shop/05-h1.jpg"
                            alt="HasTech"
                          />
                        </Link>
                        <div className="product-action">
                          <div className="addto-wrap">
                            <Link
                              className="add-wishlist"
                              to="wishlist.html"
                              title="Add to wishlist"
                            >
                              <i className="icon-heart icon"></i>
                            </Link>
                            <Link
                              className="add-compare"
                              to="compare.html"
                              title="Add to compare"
                            >
                              <i className="icon-shuffle icon"></i>
                            </Link>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                          <li className="discount visually-hidden">-5%</li>
                        </ul>
                      </div>
                      <div className="product-desc">
                        <div className="product-info">
                          <h4 className="title">
                            <Link to="single-product.html">
                              Water and Wind Resistant Insulated Ja...
                            </Link>
                          </h4>
                          <div className="star-content">
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                          </div>
                          <div className="prices">
                            <span className="price-old visually-hidden">
                              €14.52
                            </span>
                            <span className="price text-black">€14.52</span>
                          </div>
                        </div>
                        <div className="product-footer">
                          <Link className="btn-product-add" to="cart.html">
                            Add to cart
                          </Link>
                          <Link
                            className="btn-quick-view"
                            to="#"
                            title="Quick view"
                          >
                            Quick view
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img src="assets/img/shop/10.jpg" alt="HasTech" />
                          <img
                            className="second-image"
                            src="assets/img/shop/10-h1.jpg"
                            alt="HasTech"
                          />
                        </Link>
                        <div className="product-action">
                          <div className="addto-wrap">
                            <Link
                              className="add-wishlist"
                              to="wishlist.html"
                              title="Add to wishlist"
                            >
                              <i className="icon-heart icon"></i>
                            </Link>
                            <Link
                              className="add-compare"
                              to="compare.html"
                              title="Add to compare"
                            >
                              <i className="icon-shuffle icon"></i>
                            </Link>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                          <li className="discount visually-hidden">-20%</li>
                        </ul>
                      </div>
                      <div className="product-desc">
                        <div className="product-info">
                          <h4 className="title">
                            <Link to="single-product.html">
                              New Balance Arishi Sport v1
                            </Link>
                          </h4>
                          <div className="star-content">
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star icon-color-gray"></i>
                          </div>
                          <div className="prices">
                            <span className="price-old visually-hidden">
                              €23.06
                            </span>
                            <span className="price text-black">€23.06</span>
                          </div>
                        </div>
                        <div className="product-footer">
                          <Link className="btn-product-add" to="cart.html">
                            Add to cart
                          </Link>
                          <Link
                            className="btn-quick-view"
                            to="#"
                            title="Quick view"
                          >
                            Quick view
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img src="assets/img/shop/11.jpg" alt="HasTech" />
                          <img
                            className="second-image"
                            src="assets/img/shop/11-h1.jpg"
                            alt="HasTech"
                          />
                        </Link>
                        <div className="product-action">
                          <div className="addto-wrap">
                            <Link
                              className="add-wishlist"
                              to="wishlist.html"
                              title="Add to wishlist"
                            >
                              <i className="icon-heart icon"></i>
                            </Link>
                            <Link
                              className="add-compare"
                              to="compare.html"
                              title="Add to compare"
                            >
                              <i className="icon-shuffle icon"></i>
                            </Link>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                          <li className="discount visually-hidden">-20%</li>
                        </ul>
                      </div>
                      <div className="product-desc">
                        <div className="product-info">
                          <h4 className="title">
                            <Link to="single-product.html">
                              Calvin Klein Jeans Reflective Logo Full Zip
                            </Link>
                          </h4>
                          <div className="star-content">
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                          </div>
                          <div className="prices">
                            <span className="price-old visually-hidden">
                              €23.06
                            </span>
                            <span className="price text-black">€35.38</span>
                          </div>
                        </div>
                        <div className="product-footer">
                          <Link className="btn-product-add" to="cart.html">
                            Add to cart
                          </Link>
                          <Link
                            className="btn-quick-view"
                            to="#"
                            title="Quick view"
                          >
                            Quick view
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="product-item">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img src="assets/img/shop/12.jpg" alt="HasTech" />
                          <img
                            className="second-image"
                            src="assets/img/shop/12-h1.jpg"
                            alt="HasTech"
                          />
                        </Link>
                        <div className="product-action">
                          <div className="addto-wrap">
                            <Link
                              className="add-wishlist"
                              to="wishlist.html"
                              title="Add to wishlist"
                            >
                              <i className="icon-heart icon"></i>
                            </Link>
                            <Link
                              className="add-compare"
                              to="compare.html"
                              title="Add to compare"
                            >
                              <i className="icon-shuffle icon"></i>
                            </Link>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                          <li className="discount visually-hidden">-20%</li>
                        </ul>
                      </div>
                      <div className="product-desc">
                        <div className="product-info">
                          <h4 className="title">
                            <Link to="single-product.html">
                              Juicy Couture Tricot Logo Stripe Jacket
                            </Link>
                          </h4>
                          <div className="star-content">
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                            <i className="ion-md-star"></i>
                          </div>
                          <div className="prices">
                            <span className="price-old visually-hidden">
                              €23.06
                            </span>
                            <span className="price text-black">€10.98</span>
                          </div>
                        </div>
                        <div className="product-footer">
                          <Link className="btn-product-add" to="cart.html">
                            Add to cart
                          </Link>
                          <Link
                            className="btn-quick-view"
                            to="#"
                            title="Quick view"
                          >
                            Quick view
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
      </section>
    </>
  );
};

export default ProductDetails;
