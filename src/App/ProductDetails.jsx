import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "./Components/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import GiveFeedback from "./Components/Feedback/GiveFeedback";
import FeedbackCard from "./Components/Feedback/FeedbackCard"
import { fetchProductDetail,fetchSimilarProduct,fetchTrendingProduct } from "../redux/async/productdetail.async";
import {updateProductSkuIncrementView} from "../redux/async/productsku.async";
import { postWishlist } from "../redux/async/wishlist.async";
import { postCart } from "../redux/async/cart.async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom } from "swiper";
import OwlCarousel from "react-owl-carousel";
import ProductCard from "./Components/Product/ProductCard";


const ProductDetails = () => {
  const navigate = useNavigate();
  const [Qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const feedback = useSelector(state=>state.feedback)
  const param = useParams();

  useEffect(() => {
    dispatch(fetchProductDetail(`${param.slug}`));
    dispatch(fetchSimilarProduct(`${param.slug}`));
    dispatch(fetchTrendingProduct());
    dispatch(updateProductSkuIncrementView({slug:`${param.slug}`}))
  }, [param.slug,feedback.status]);

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
                          <Swiper
                            modules={[Zoom]}
                            className="single-product-thumb-content single-product-thumb-slider2"
                          >
                            <SwiperSlide>
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href={`${process.env.PUBLIC_URL}/assets/upload/${item.thumbnail}`}
                              >
                                <img
                                  src={`${process.env.PUBLIC_URL}/assets/upload/${item.thumbnail}`}
                                  alt="HasTech"
                                />
                                <span className="product-flag-new">New</span>
                              </a>
                            </SwiperSlide>
                            <SwiperSlide>
                              <a
                                className="lightbox-image"
                                data-fancybox="gallery"
                                href={`${process.env.PUBLIC_URL}/assets/upload/${item.thumbnail_hover}`}
                              >
                                <img
                                  src={`${process.env.PUBLIC_URL}/assets/upload/${item.thumbnail_hover}`}
                                  alt="HasTech"
                                />
                                <span className="product-flag-new">New</span>
                              </a>
                            </SwiperSlide>
                            {item.image.map((item) => {
                              return (
                                <SwiperSlide key={item}>
                                  <a
                                    className="lightbox-image"
                                    data-fancybox="gallery"
                                    href={`${process.env.PUBLIC_URL}/assets/upload/${item}`}
                                  >
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/upload/${item}`}
                                      alt="HasTech"
                                    />
                                    {/* <span className="product-flag-new">
                                      New
                                    </span> */}
                                  </a>
                                </SwiperSlide>
                              );
                            })}
                          </Swiper>
                          <Swiper className="single-product-nav-content single-product-nav-slider2">
                            <SwiperSlide>
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/upload/${item.thumbnail}`}
                                alt="HasTech"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src={`${process.env.PUBLIC_URL}/assets/upload/${item.thumbnail_hover}`}
                                alt="HasTech"
                              />
                            </SwiperSlide>
                            {item.image.map((item) => {
                              return (
                                <SwiperSlide key={item}>
                                  <img
                                    src={`${process.env.PUBLIC_URL}/assets/upload/${item}`}
                                    alt="HasTech"
                                  />
                                </SwiperSlide>
                              );
                            })}
                          </Swiper>
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
                                <Link
                                  to="#/"
                                  className="reviews"
                                  data-bs-toggle="pill"
                                  to="#reviews"
                                  role="tab"
                                >
                                  <i className="fa fa-commenting-o"></i>Read
                                  reviews ({item.feedback.length})
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
                                <GiveFeedback _id={item._id} />
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
                          </div>
                          {/* <div className="social-sharing">
                            <span>Share</span>
                            <div className="social-icons">
                              <Link to="#/">
                                <i className="la la-facebook"></i>
                              </Link>
                              <Link to="#/">
                                <i className="la la-twitter"></i>
                              </Link>
                            </div>
                          </div> */}
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
                            <Link
                              to="#/"
                              className="btn-review"
                              data-bs-toggle="modal"
                              data-bs-target="#feedback"
                            >
                              Write your review !
                            </Link>
                            {item.feedback.map((item) => {
                              return (
                                <FeedbackCard
                                  rate={item.rate}
                                  review={item.review}
                                  date={item.date}
                                />
                              );
                            })}
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
              <OwlCarousel
                nav={true}
                dots={false}
                autoplay={false}
                smartSpeed={1000}
                items={5}
                className="product-slider owl-theme"
                zindex="3"
              >
                {productDetail.trendingProduct.map((item) => {
                  return (
                    <ProductCard
                      _id={item._id}
                      slug={item.slug}
                      title={item.name}
                      thumbnail={item.thumbnail}
                      thumbnailHover={item.thumbnail_hover}
                      rate={item.avg}
                      price={item.price}
                      discount={item.discount}
                      key={item._id}
                      className="mb-30"
                    />
                  );
                })}
              </OwlCarousel>
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
                  <p>other products in the same category:</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <OwlCarousel
                nav={true}
                dots={false}
                autoplay={false}
                smartSpeed={1000}
                items={5}
                className="product-col2-slider owl-theme"
                zindex="3"
              >
                {productDetail.similarProduct.map((item) => {
                  return (
                    <ProductCard
                      _id={item._id}
                      slug={item.slug}
                      title={item.name}
                      thumbnail={item.thumbnail}
                      thumbnailHover={item.thumbnail_hover}
                      rate={item.avg}
                      price={item.price}
                      discount={item.discount}
                      key={item._id}
                      className="mb-30"
                    />
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
