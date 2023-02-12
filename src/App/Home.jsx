import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";  
import {Swiper,SwiperSlide} from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Home = () => {
  const responsive =  {
            0: {
              items: 1,
            },
            540: {
              items: 2,
            },
            576: {
              items: 2,
            },
            768: {
              items: 3,
            },
            992: {
              items: 3,
            },
            1200: {
              items: 4,
            }
          }
  return (
    <>
      <section className="home-slider-area">
        <Swiper>
          <SwiperSlide>
            <div
              className="slider-content-area"
              style={{
                backgroundImage: `url("assets/img/slider/slider-04.jpg")`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-10 col-sm-6 col-md-5">
                    <div className="slider-content slider-content-light animate-pulse">
                      <h5 className="sub-title transition-slide-0">
                        A SKINCARE ESSENTIAL
                      </h5>
                      <h2 className="title transition-slide-1 mb-0">
                        <span className="font-weight-400">100% NATURAL</span>
                      </h2>
                      <h2 className="title transition-slide-2">FACIAL OILS</h2>
                      <Link className="btn-slide transition-slide-3" to="#/">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slider-content-area"
              style={{
                backgroundImage: `url("assets/img/slider/slider-05.jpg")`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-10 col-sm-6 col-md-5">
                    <div className="slider-content slider-content-light animate-flipInX">
                      <h5 className="sub-title transition-slide-0">
                        ONE STEP MAXI BRUSH
                      </h5>
                      <h2 className="title transition-slide-1 mb-0">
                        <span className="font-weight-400">GOLDEN ROSE</span>
                      </h2>
                      <h2 className="title transition-slide-2">RICH COLOUR</h2>
                      <Link className="btn-slide transition-slide-3" to="#/">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="swiper-container swiper-pagination-style dots-bg-light home-slider-container default-slider-container">
          <div className="swiper-wrapper home-slider-wrapper slider-default">
            <div className="swiper-slide">
              <div className="slider-content-area" style={{backgroundImage: `url("assets/img/slider/slider-04.jpg")`}}>
                <div className="container">
                  <div className="row">
                    <div className="col-10 col-sm-6 col-md-5">
                      <div className="slider-content slider-content-light animate-pulse">
                        <h5 className="sub-title transition-slide-0">
                          A SKINCARE ESSENTIAL
                        </h5>
                        <h2 className="title transition-slide-1 mb-0">
                          <span className="font-weight-400">100% NATURAL</span>
                        </h2>
                        <h2 className="title transition-slide-2">
                          FACIAL OILS
                        </h2>
                        <Link className="btn-slide transition-slide-3" to="#/">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slider-content-area" style={{ backgroundImage: `url("assets/img/slider/slider-05.jpg")`}}>
                <div className="container">
                  <div className="row">
                    <div className="col-10 col-sm-6 col-md-5">
                      <div className="slider-content slider-content-light animate-flipInX">
                        <h5 className="sub-title transition-slide-0">
                          ONE STEP MAXI BRUSH
                        </h5>
                        <h2 className="title transition-slide-1 mb-0">
                          <span className="font-weight-400">GOLDEN ROSE</span>
                        </h2>
                        <h2 className="title transition-slide-2">
                          RICH COLOUR
                        </h2>
                        <Link className="btn-slide transition-slide-3" to="#/">
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div> */}
      </section>

      <section>
        <div className="container pt-30 pt-sm-15 pb-15 pb-lg-5">
          <div className="row">
            <div className="col-12">
              <OwlCarousel
                item={1}
                margin={8}
                autoplay={true}
                className="images-col3-slider"
              >
                <div className="item">
                  <div className="thumb thumb-scale-hover-style">
                    <Link to="single-product.html">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/img/shop/banner/03.jpg`}
                        alt="HasTech"
                        className="hover-img"
                      />
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb thumb-scale-hover-style">
                    <Link to="single-product.html">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/img/shop/banner/04.jpg`}
                        alt="HasTech"
                        className="hover-img"
                      />
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb thumb-scale-hover-style">
                    <Link to="single-product.html">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/img/shop/banner/05.jpg`}
                        alt="HasTech"
                        className="hover-img"
                      />
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="product-area">
        <div className="container pb-lg-60">
          <div className="row">
            <div className="col-sm-8 m-auto">
              <div className="section-title text-center mb-30">
                <h2 className="title">Our Products</h2>
                <div className="desc">
                  <p>Add our products to weekly line up</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-tabs-content-wrap">
                <ul
                  className="nav mb-25 product-tab-nav"
                  id="pills-tab"
                  role="tablist"
                >
                  <li role="presentation">
                    <Link
                      className="active"
                      id="makeup-tab"
                      data-bs-toggle="pill"
                      to="#makeup"
                      role="tab"
                      aria-controls="makeup"
                      aria-selected="true"
                    >
                      Makeup
                    </Link>
                  </li>
                  <li role="presentation">
                    <Link
                      id="skin-care-tab"
                      data-bs-toggle="pill"
                      to="#skin-care"
                      role="tab"
                      aria-controls="skin-care"
                      aria-selected="false"
                    >
                      Skin Care
                    </Link>
                  </li>
                  <li role="presentation">
                    <Link
                      id="health-care-tab"
                      data-bs-toggle="pill"
                      to="#health-care"
                      role="tab"
                      aria-controls="health-care"
                      aria-selected="false"
                    >
                      Health Care
                    </Link>
                  </li>
                </ul>
                <div
                  className="tab-content product-tab-content"
                  id="pills-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="makeup"
                    role="tabpanel"
                    aria-labelledby="makeup-tab"
                  >
                    <div className="row">
                      <div className="col-12">
                        <OwlCarousel
                          // margin={15}
                          nav={true}
                          dots={false}
                          autoplay={false}
                          smartSpeed={1000}
                          items={4}
                          responsive={responsive}
                          className="product-slider owl-theme"
                          zindex="3"
                        >
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <Link to="single-product.html">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/01.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/01-h1.jpg`}
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
                                        Originals Kaval Windbreaker Winter
                                        Jac...
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
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <Link to="single-product.html">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/02.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/02-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -10%
                                    </li>
                                  </ul>
                                </div>
                                <div className="product-desc">
                                  <div className="product-info">
                                    <h4 className="title">
                                      <Link to="single-product.html">
                                        Juicy Couture Juicy Quilted Terry
                                        Track...
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
                                      <span className="price text-black">
                                        €43.80
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <Link to="single-product.html">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/03.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/03-h1.jpg`}
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
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <Link to="single-product.html">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/04.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/04-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -5%
                                    </li>
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
                                      <span className="price text-black">
                                        €14.52
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <Link to="single-product.html">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/05.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/05-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -5%
                                    </li>
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
                                      <span className="price text-black">
                                        €14.52
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <Link to="single-product.html">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/06.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -5%
                                    </li>
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
                                      <span className="price text-black">
                                        €23.06
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <Link to="single-product.html">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/07.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/07-h1.jpg`}
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
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <Link to="single-product.html">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/08.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/08-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €23.06
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <Link to="single-product.html">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/09.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €35.38
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <Link to="single-product.html">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/10.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/10-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €23.06
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <Link to="single-product.html">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/11.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/11-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
                                  </ul>
                                </div>
                                <div className="product-desc">
                                  <div className="product-info">
                                    <h4 className="title">
                                      <Link to="single-product.html">
                                        Calvin Klein Jeans Reflective Logo Full
                                        Zip
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
                                      <span className="price text-black">
                                        €35.38
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <Link to="single-product.html">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/12.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/12-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €10.98
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                        </OwlCarousel>
                        {/* <div className="product-slider owl-carousel owl-theme">
                          <div className="item">
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <Link to="single-product.html">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/01.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/01-h1.jpg`}
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
                                        Originals Kaval Windbreaker Winter
                                        Jac...
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
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/02.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/02-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -10%
                                    </li>
                                  </ul>
                                </div>
                                <div className="product-desc">
                                  <div className="product-info">
                                    <h4 className="title">
                                      <Link to="single-product.html">
                                        Juicy Couture Juicy Quilted Terry
                                        Track...
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
                                      <span className="price text-black">
                                        €43.80
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/03.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/03-h1.jpg`}
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
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/04.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/04-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -5%
                                    </li>
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
                                      <span className="price text-black">
                                        €14.52
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/05.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/05-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -5%
                                    </li>
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
                                      <span className="price text-black">
                                        €14.52
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/06.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -5%
                                    </li>
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
                                      <span className="price text-black">
                                        €23.06
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/07.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/07-h1.jpg`}
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
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/08.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/08-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €23.06
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/09.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €35.38
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/10.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/10-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €23.06
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/11.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/11-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
                                  </ul>
                                </div>
                                <div className="product-desc">
                                  <div className="product-info">
                                    <h4 className="title">
                                      <Link to="single-product.html">
                                        Calvin Klein Jeans Reflective Logo Full
                                        Zip
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
                                      <span className="price text-black">
                                        €35.38
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/12.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/12-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €10.98
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="skin-care"
                    role="tabpanel"
                    aria-labelledby="skin-care-tab"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="product-slider owl-carousel owl-theme">
                          <div className="item">
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <Link to="single-product.html">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/01.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/01-h1.jpg`}
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
                                        Originals Kaval Windbreaker Winter
                                        Jac...
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
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/02.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/02-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -10%
                                    </li>
                                  </ul>
                                </div>
                                <div className="product-desc">
                                  <div className="product-info">
                                    <h4 className="title">
                                      <Link to="single-product.html">
                                        Juicy Couture Juicy Quilted Terry
                                        Track...
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
                                      <span className="price text-black">
                                        €43.80
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/03.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/03-h1.jpg`}
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
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/04.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/04-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -5%
                                    </li>
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
                                      <span className="price text-black">
                                        €14.52
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/05.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/05-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -5%
                                    </li>
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
                                      <span className="price text-black">
                                        €14.52
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/06.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -5%
                                    </li>
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
                                      <span className="price text-black">
                                        €23.06
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/07.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/07-h1.jpg`}
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
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/08.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/08-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €23.06
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/09.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €35.38
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/10.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/10-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €23.06
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/11.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/11-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
                                  </ul>
                                </div>
                                <div className="product-desc">
                                  <div className="product-info">
                                    <h4 className="title">
                                      <Link to="single-product.html">
                                        Calvin Klein Jeans Reflective Logo Full
                                        Zip
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
                                      <span className="price text-black">
                                        €35.38
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/12.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/12-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €10.98
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                  <div
                    className="tab-pane fade"
                    id="health-care"
                    role="tabpanel"
                    aria-labelledby="health-care-tab"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="product-slider owl-carousel owl-theme">
                          <div className="item">
                            <div className="product-item">
                              <div className="inner-content">
                                <div className="product-thumb">
                                  <Link to="single-product.html">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/01.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/01-h1.jpg`}
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
                                        Originals Kaval Windbreaker Winter
                                        Jac...
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
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/02.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/02-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -10%
                                    </li>
                                  </ul>
                                </div>
                                <div className="product-desc">
                                  <div className="product-info">
                                    <h4 className="title">
                                      <Link to="single-product.html">
                                        Juicy Couture Juicy Quilted Terry
                                        Track...
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
                                      <span className="price text-black">
                                        €43.80
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/03.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/03-h1.jpg`}
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
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/04.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/04-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -5%
                                    </li>
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
                                      <span className="price text-black">
                                        €14.52
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/05.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/05-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -5%
                                    </li>
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
                                      <span className="price text-black">
                                        €14.52
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/06.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -5%
                                    </li>
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
                                      <span className="price text-black">
                                        €23.06
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/07.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/07-h1.jpg`}
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
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/08.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/08-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €23.06
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/09.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €35.38
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/10.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/10-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €23.06
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/11.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/11-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
                                  </ul>
                                </div>
                                <div className="product-desc">
                                  <div className="product-info">
                                    <h4 className="title">
                                      <Link to="single-product.html">
                                        Calvin Klein Jeans Reflective Logo Full
                                        Zip
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
                                      <span className="price text-black">
                                        €35.38
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                                    <img
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/12.jpg`}
                                      alt="HasTech"
                                    />
                                    <img
                                      className="second-image"
                                      src={`${process.env.PUBLIC_URL}/assets/img/shop/12-h1.jpg`}
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
                                    <li className="discount visually-hidden">
                                      -20%
                                    </li>
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
                                      <span className="price text-black">
                                        €10.98
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-footer">
                                    <Link
                                      className="btn-product-add"
                                      to="single-product.html"
                                    >
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-area">
        <div className="container pt-5 pb-45">
          <div className="row">
            <div className="col-sm-8 m-auto">
              <div className="section-title text-center">
                <h2 className="title">New Arrivals</h2>
                <div className="desc">
                  <p>Add our new arrivals to your weekly lineup</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="thumb thumb-scale-hover-style">
                <Link to="single-product.html">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/photos/divider-01.jpg`}
                    alt="HasTech"
                    className="hover-img"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-col2-slider owl-carousel owl-theme">
                <div className="item">
                  <div className="product-item mb-30">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/01.jpg`}
                            alt="HasTech"
                          />
                          <img
                            className="second-image"
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/01-h1.jpg`}
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
                          <Link
                            className="btn-product-add"
                            to="single-product.html"
                          >
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

                  <div className="product-item mb-30">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/02.jpg`}
                            alt="HasTech"
                          />
                          <img
                            className="second-image"
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/02-h1.jpg`}
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
                          <Link
                            className="btn-product-add"
                            to="single-product.html"
                          >
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
                  <div className="product-item mb-30">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/03.jpg`}
                            alt="HasTech"
                          />
                          <img
                            className="second-image"
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/03-h1.jpg`}
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
                          <Link
                            className="btn-product-add"
                            to="single-product.html"
                          >
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

                  <div className="product-item mb-30">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/04.jpg`}
                            alt="HasTech"
                          />
                          <img
                            className="second-image"
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/04-h1.jpg`}
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
                          <Link
                            className="btn-product-add"
                            to="single-product.html"
                          >
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
                  <div className="product-item mb-30">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/05.jpg`}
                            alt="HasTech"
                          />
                          <img
                            className="second-image"
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/05-h1.jpg`}
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
                          <Link
                            className="btn-product-add"
                            to="single-product.html"
                          >
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

                  <div className="product-item mb-30">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/06.jpg`}
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
                          <Link
                            className="btn-product-add"
                            to="single-product.html"
                          >
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
                  <div className="product-item mb-30">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/07.jpg`}
                            alt="HasTech"
                          />
                          <img
                            className="second-image"
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/07-h1.jpg`}
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
                          <Link
                            className="btn-product-add"
                            to="single-product.html"
                          >
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

                  <div className="product-item mb-30">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/08.jpg`}
                            alt="HasTech"
                          />
                          <img
                            className="second-image"
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/08-h1.jpg`}
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
                          <Link
                            className="btn-product-add"
                            to="single-product.html"
                          >
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
                  <div className="product-item mb-30">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/09.jpg`}
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
                          <Link
                            className="btn-product-add"
                            to="single-product.html"
                          >
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

                  <div className="product-item mb-30">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/10.jpg`}
                            alt="HasTech"
                          />
                          <img
                            className="second-image"
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/10-h1.jpg`}
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
                          <Link
                            className="btn-product-add"
                            to="single-product.html"
                          >
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
                  <div className="product-item mb-30">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/11.jpg`}
                            alt="HasTech"
                          />
                          <img
                            className="second-image"
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/11-h1.jpg`}
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
                          <Link
                            className="btn-product-add"
                            to="single-product.html"
                          >
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

                  <div className="product-item mb-30">
                    <div className="inner-content">
                      <div className="product-thumb">
                        <Link to="single-product.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/12.jpg`}
                            alt="HasTech"
                          />
                          <img
                            className="second-image"
                            src={`${process.env.PUBLIC_URL}/assets/img/shop/12-h1.jpg`}
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
                          <Link
                            className="btn-product-add"
                            to="single-product.html"
                          >
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

      <section
        className="divider-area divider-product-discount-area bg-img"
        style={{ backgroundImage: `url("assets/img/photos/bg-01.jpg")` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="divider-style2-wrap">
                <div className="row">
                  <div className="col-xl-4">
                    <div className="divider-content">
                      <h5 className="sub-title">NATURAL SKINCARE</h5>
                      <h2 className="title">40% Off</h2>
                      <p>
                        No Parabens. No Sulfates. No Compromises. Shop Clean
                        Beauty.
                      </p>
                      <div
                        className="ht-countdown ht-countdown-style2 mb-45 d-block"
                        data-date="10/24/2023"
                      ></div>
                      <Link className="btn-theme btn-white" to="shop.html">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-area">
        <div className="container pt-95 pb-95 pt-lg-70 pb-lg-70">
          <div className="row">
            <div className="col-sm-8 m-auto">
              <div className="section-title text-center">
                <h2 className="title">Client Testimonials</h2>
                <div className="desc">
                  <p>What our happy customers says !</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="testimonials-slider testi-first-active owl-carousel owl-theme">
                <div className="item">
                  <div className="testimonial-item testi-height-style matchHeight">
                    <div className="testi-inner-content">
                      <div className="testi-author">
                        <div className="testi-thumb">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/testimonial/01.png`}
                            alt="HasTech"
                            className="img"
                          />
                        </div>
                        <div className="testi-info">
                          <span className="name">orando BLoom</span>
                          <span className="email">demo@example.com</span>
                        </div>
                      </div>
                      <div className="testi-content">
                        <p>
                          All Perfect !! I have three sites with magento , this
                          theme is the best !! Excellent support , advice theme
                          installation package , sorry for English, are Italian
                          but I had no problem !! Thank you !
                        </p>
                        <div className="testi-info">
                          <span className="name">orando BLoom</span>
                          <span className="email">demo@example.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-item testi-height-style matchHeight">
                    <div className="testi-inner-content">
                      <div className="testi-author">
                        <div className="testi-thumb">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/testimonial/02.png`}
                            alt="HasTech"
                            className="img"
                          />
                        </div>
                        <div className="testi-info">
                          <span className="name">orando BLoom</span>
                          <span className="email">demo@example.com</span>
                        </div>
                      </div>
                      <div className="testi-content">
                        <p>
                          All Perfect !! I have three sites with magento , this
                          theme is the best !! Excellent support , advice theme
                          installation package , sorry for English, are Italian
                          but I had no problem !! Thank you !
                        </p>
                        <div className="testi-info">
                          <span className="name">orando BLoom</span>
                          <span className="email">demo@example.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-item testi-height-style matchHeight">
                    <div className="testi-inner-content">
                      <div className="testi-author">
                        <div className="testi-thumb">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/testimonial/01.png`}
                            alt="HasTech"
                            className="img"
                          />
                        </div>
                        <div className="testi-info">
                          <span className="name">orando BLoom</span>
                          <span className="email">demo@example.com</span>
                        </div>
                      </div>
                      <div className="testi-content">
                        <p>
                          All Perfect !! I have three sites with magento , this
                          theme is the best !! Excellent support , advice theme
                          installation package , sorry for English, are Italian
                          but I had no problem !! Thank you !
                        </p>
                        <div className="testi-info">
                          <span className="name">orando BLoom</span>
                          <span className="email">demo@example.com</span>
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

      <section>
        <div className="container pt-0 pb-0">
          <div className="row">
            <div className="col-12">
              <div className="thumb thumb-scale-hover-style">
                <Link to="single-product.html">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/shop/banner/06.jpg`}
                    alt="HasTech"
                    className="hover-img"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-area">
        <div className="container pt-95 pb-100 pt-lg-70 pb-lg-70">
          <div className="row">
            <div className="col-sm-8 m-auto">
              <div className="section-title text-center">
                <h2 className="title">Latest Blogs</h2>
                <div className="desc">
                  <p>
                    Present posts in a best way to highlight interesting moments
                    of your blog.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="blog-slider owl-carousel owl-theme">
                <div className="item">
                  <div className="post-item">
                    <div className="inner-content">
                      <div className="thumb">
                        <Link to="blog.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/blog/01.jpg" className="img`}
                            alt="HasTech"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <Link className="category" to="blog.html">
                          Fashion
                        </Link>
                        <h4 className="title">
                          <Link to="single-blog.html">
                            This is Secound Post For XipBlog
                          </Link>
                        </h4>
                        <div className="meta">
                          <span>Posted by</span>
                          <Link className="author" to="blog.html">
                            Demo Posthemes
                          </Link>
                          <Link className="date" to="blog.html">
                            Sep 26TH, 2020
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="post-item">
                    <div className="inner-content">
                      <div className="thumb">
                        <Link to="blog.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/blog/02.jpg" className="img`}
                            alt="HasTech"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <Link className="category" to="blog.html">
                          Fashion
                        </Link>
                        <h4 className="title">
                          <Link to="single-blog.html">
                            This is Secound Post For XipBlog
                          </Link>
                        </h4>
                        <div className="meta">
                          <span>Posted by</span>
                          <Link className="author" to="blog.html">
                            Demo Posthemes
                          </Link>
                          <Link className="date" to="blog.html">
                            Sep 26TH, 2020
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="post-item">
                    <div className="inner-content">
                      <div className="thumb">
                        <Link to="blog.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/blog/03.jpg" className="img`}
                            alt="HasTech"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <Link className="category" to="blog.html">
                          Fashion
                        </Link>
                        <h4 className="title">
                          <Link to="single-blog.html">
                            This is Secound Post For XipBlog
                          </Link>
                        </h4>
                        <div className="meta">
                          <span>Posted by</span>
                          <Link className="author" to="blog.html">
                            Demo Posthemes
                          </Link>
                          <Link className="date" to="blog.html">
                            Sep 26TH, 2020
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="post-item">
                    <div className="inner-content">
                      <div className="thumb">
                        <Link to="blog.html">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/img/blog/04.jpg" className="img`}
                            alt="HasTech"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <Link className="category" to="blog.html">
                          Fashion
                        </Link>
                        <h4 className="title">
                          <Link to="single-blog.html">
                            This is Secound Post For XipBlog
                          </Link>
                        </h4>
                        <div className="meta">
                          <span>Posted by</span>
                          <Link className="author" to="blog.html">
                            Demo Posthemes
                          </Link>
                          <Link className="date" to="blog.html">
                            Sep 26TH, 2020
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

export default Home;
