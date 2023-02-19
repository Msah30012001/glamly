import React ,{useEffect} from "react";
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
import {fetchWeeklyProductSku} from "../redux/async/productsku.async"

const Home = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.subCategory);
  const productSku = useSelector((state)=>state.productSku)
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
    dispatch(fetchSubCategory())
    dispatch(fetchWeeklyProductSku())
  }, [])
  

  const data = [
    {
      title: "Fila Locker Room varsity Jacket",
      thumbnail: "assets/img/shop/13.jpg",
      thumbnailHover: "assets/img/shop/13-h1.jpg",
      rate: "4",
      price: "1000",
      discount: "50",
      desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
      stock: "300",
    },
    {
      title: "Juicy Couture Tricot Logo Stripe Jacket",
      thumbnail: "assets/img/shop/12.jpg",
      thumbnailHover: "assets/img/shop/12-h1.jpg",
      rate: "5",
      price: "1000",
      discount: "50",
      desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
      stock: "300",
    },
    {
      title: "New Balance Fresh Foam LAZR v1 Sport",
      thumbnail: "assets/img/shop/07.jpg",
      thumbnailHover: "assets/img/shop/07-h1.jpg",
      rate: "5",
      price: "1000",
      discount: "50",
      desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
      stock: "300",
    },
    {
      title: "New Balance Fresh Foam Kaymin",
      thumbnail: "assets/img/shop/06.jpg",
      thumbnailHover: "assets/img/shop/06-h1.jpg",
      rate: "5",
      price: "1000",
      discount: "50",
      desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
      stock: "300",
    },
    {
      title: "Water and Wind Resistant Insulated Ja...",
      thumbnail: "assets/img/shop/05.jpg",
      thumbnailHover: "assets/img/shop/05-h1.jpg",
      rate: "4",
      price: "1000",
      discount: "50",
      desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
      stock: "300",
    },
    {
      title: "Trans-Weight Hooded Wind and Water...",
      thumbnail: "assets/img/shop/04.jpg",
      thumbnailHover: "assets/img/shop/04-h1.jpg",
      rate: "5",
      price: "1000",
      discount: "50",
      desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
      stock: "300",
    },
    {
      title: "Madden by Steve Madden Cale 6",
      thumbnail: "assets/img/shop/03.jpg",
      thumbnailHover: "assets/img/shop/03-h1.jpg",
      rate: "5",
      price: "1000",
      discount: "50",
      desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
      stock: "300",
    },
    {
      title: "Calvin Klein Jeans Reflactive Logo Full zip",
      thumbnail: "assets/img/shop/11.jpg",
      thumbnailHover: "assets/img/shop/11-h1.jpg",
      rate: "4",
      price: "1000",
      discount: "50",
      desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
      stock: "300",
    },
    {
      title: "Fila Locker Room varsity Jacket",
      thumbnail: "assets/img/shop/10.jpg",
      thumbnailHover: "assets/img/shop/10-h1.jpg",
      rate: "4",
      price: "1000",
      discount: "50",
      desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
      stock: "300",
    },
    {
      title: "Fila Locker Room varsity Jacket",
      thumbnail: "assets/img/shop/09.jpg",
      thumbnailHover: "assets/img/shop/02-h1.jpg",
      rate: "5",
      price: "1000",
      discount: "50",
      desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
      stock: "300",
    },
    {
      title: "Fila Locker Room varsity Jacket",
      thumbnail: "assets/img/shop/02.jpg",
      thumbnailHover: "assets/img/shop/02-h1.jpg",
      rate: "4",
      price: "1000",
      discount: "50",
      desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
      stock: "300",
    },
    {
      title: "Fila Locker Room varsity Jacket",
      thumbnail: "assets/img/shop/08.jpg",
      thumbnailHover: "assets/img/shop/08-h1.jpg",
      rate: "4",
      price: "1000",
      discount: "50",
      desc: "Create a cool and sporty look with the FILA® Locker Room Varsity Jacket Comfortable cotton-blend fabrication Classic varsity jacket features brand details throughout Flat knit collar",
      stock: "300",
    },
  ];
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
                <h2 className="title">Category</h2>
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
                autoplay={true}
                smartSpeed={1000}
                items={4}
                // responsive={responsive}
                className="product-slider owl-theme"
                zindex="3"
              >
                {category.data.map((item) => {
                  return (
                    <CategoryCard name={item.name} slug={item.slug} noOfProducts={item.productskus.length} key={item._id} />
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
                          autoplay={true}
                          smartSpeed={1000}
                          items={4}
                          responsive={responsive}
                          className="product-slider owl-theme"
                          zindex="3"
                        >
                          {data.map((item) => {
                            return (
                              <ProductCard
                                _id={1}
                                slug={item.slug}
                                title={item.name}
                                thumbnail={item.thumbnail}
                                thumbnailHover={item.thumbnail_hover}
                                rate={item.avg}
                                price={item.price}
                                discount={item.discount}
                                key={item._id}
                              />
                            );
                          })}
                        </OwlCarousel>
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
                        <OwlCarousel
                          // margin={15}
                          nav={true}
                          dots={false}
                          autoplay={true}
                          smartSpeed={1000}
                          items={4}
                          responsive={responsive}
                          className="product-slider owl-theme"
                          zindex="3"
                        >
                          {productSku.data.map((item) => {
                            return (
                              <ProductCard
                                _id={1}
                                slug={item.slug}
                                title={item.name}
                                thumbnail={item.thumbnail}
                                thumbnailHover={item.thumbnail_hover}
                                rate={item.avg}
                                price={item.price}
                                discount={item.discount}
                                key={item._id}
                              />
                            );
                          })}
                        </OwlCarousel>
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
                        <OwlCarousel
                          // margin={15}
                          nav={true}
                          dots={false}
                          autoplay={true}
                          smartSpeed={1000}
                          items={4}
                          responsive={responsive}
                          className="product-slider owl-theme"
                          zindex="3"
                        >
                          {data.map((item) => {
                            return (
                              <ProductCard
                                _id={1}
                                slug={item.slug}
                                title={item.name}
                                thumbnail={item.thumbnail}
                                thumbnailHover={item.thumbnail_hover}
                                rate={item.avg}
                                price={item.price}
                                discount={item.discount}
                                key={item._id}
                              />
                            );
                          })}
                        </OwlCarousel>
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
              <OwlCarousel
                // margin={15}
                nav={true}
                dots={false}
                autoplay={false}
                smartSpeed={1000}
                items={2}
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

      {/* <section className="blog-area">
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
      </section> */}
    </>
  );
};

export default Home;
