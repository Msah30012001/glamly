import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ProductCard from "./Components/Product/ProductCard";
import CategoryCard from "./Components/Category/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubCategory } from "../redux/async/subcategory.async";
import { fetchWeeklyProductSku } from "../redux/async/productsku.async";
import {fetchTrendingProduct,fetchMostViewedProduct} from "../redux/async/productdetail.async";

const Home = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.subCategory);
  const productDetail = useSelector((state) => state.productDetail);
  const productSku = useSelector((state) => state.productSku);
  const responsive = {
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
    },
  };

  useEffect(() => {
    dispatch(fetchSubCategory());
    dispatch(fetchWeeklyProductSku());
    dispatch(fetchTrendingProduct());
    dispatch(fetchMostViewedProduct());
  }, []);

  return (
    <>
      <section className="home-slider-area">
        <div className="swiper-container swiper-pagination-style dots-bg-light home-slider-container default-slider-container">
          <Swiper
            className="home-slider-wrapper slider-default"
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
          >
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
                        <h2 className="title transition-slide-2">
                          FACIAL OILS
                        </h2>
                        <a className="btn-slide transition-slide-3" href="#/">
                          Shop Now
                        </a>
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
            </SwiperSlide>
          </Swiper>
        </div>
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
                <h2 className="title">Browse by Category</h2>
                <div className="desc">
                  {/* <p>Add our products to weekly line up</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <OwlCarousel
                // margin={15}
                nav={true}
                dots={false}
                smartSpeed={1000}
                items={4}
                // responsive={responsive}
                className="product-slider owl-theme"
                zindex="3"
              >
                {category.data.map((item) => {
                  return (
                    <CategoryCard
                      name={item.name}
                      slug={item.slug}
                      noOfProducts={item.productskus.length}
                      key={item._id}
                    />
                  );
                })}
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
                <h2 className="title">Trending Product</h2>
                <div className="desc">
                  {/* <p>Add our products to weekly line up</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <OwlCarousel
                // margin={15}
                nav={true}
                dots={false}
                smartSpeed={1000}
                items={5}
                // responsive={responsive}
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
        <div className="container pb-lg-60">
          <div className="row">
            <div className="col-sm-8 m-auto">
              <div className="section-title text-center mb-30">
                <h2 className="title">Most Viewed Product</h2>
                <div className="desc">
                  {/* <p>Add our products to weekly line up</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <OwlCarousel
                // margin={15}
                nav={true}
                dots={false}
                smartSpeed={1000}
                items={5}
                // responsive={responsive}
                className="product-slider owl-theme"
                zindex="3"
              >
                {productDetail.mostViewedProduct.map((item) => {
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
            {/* <div className="col-lg-6">
              <div className="thumb thumb-scale-hover-style">
                <Link to="single-product.html">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/img/photos/divider-01.jpg`}
                    alt="HasTech"
                    className="hover-img"
                  />
                </Link>
              </div>
            </div> */}
            <div className="col-12">
              <OwlCarousel
                // margin={15}
                nav={true}
                dots={false}
                autoplay={false}
                smartSpeed={1000}
                items={5}
                // responsive={responsive}
                className="product-col2-slider owl-theme"
                zindex="3"
              >
                {productSku.data.map((item) => {
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
    </>
  );
};

export default Home;
