import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <section className="bg-black-color">
        <div className="container pt-35 pb-40">
          <div className="row">
            <div className="col-12">
              <div className="contact-info contact-info-static">
                <div className="row">
                  <div className="col-border col-12 col-md-4 col-sm-6 border-0">
                    <div className="info-item">
                      <div className="icon-box">
                        <i className="icon las la-phone-volume"></i>
                      </div>
                      <p>1800.3687.6886 M-F 9AM-6PM</p>
                    </div>
                  </div>
                  <div className="col-border col-12 col-md-4 col-sm-6 mt-xs-35">
                    <div className="info-item">
                      <div className="icon-box">
                        <i className="icon las la-envelope"></i>
                      </div>
                      <p>demo@example.com</p>
                    </div>
                  </div>
                  <div className="col-border col-12 col-md-4 col-sm-12 mt-sm-35">
                    <div className="info-item">
                      <div className="icon-box">
                        <i className="icon lab la-facebook-messenger"></i>
                      </div>
                      <p>Virtual Chat 24/7 | Live M-F 9am-6pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="divider-area">
        <div className="container pt-90 pt-lg-70 pb-lg-60">
          <div className="row">
            <div className="col-12">
              <div className="divider-style-wrap">
                <div className="row">
                  <div className="col-md-6">
                    <div className="divider-content text-center">
                      <h4 className="title hidden-sm-down">
                        Let’s Connect On Social
                      </h4>
                      <h4
                        className="title2 hidden-md-up collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#dividerId-1"
                      >
                        Let’s Connect On Social
                      </h4>
                      <div id="dividerId-1" className="collapse">
                        <div className="social-icons">
                          <Link to="#/">
                            <i className="la la-facebook"></i>
                          </Link>
                          <Link to="#/">
                            <i className="la la-twitter"></i>
                          </Link>
                          <Link to="#/">
                            <i className="la la-youtube"></i>
                          </Link>
                          <Link to="#/">
                            <i className="la la-instagram"></i>
                          </Link>
                        </div>
                        <p className="mb-sm-25">
                          Follow us on your favorite platforms. Check out new
                          launch teasers, how-to videos, and share your favorite
                          looks.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="divider-content text-center">
                      <h4
                        className="title hidden-sm-down"
                        data-margin-bottom="32"
                      >
                        Sign Up For Newsletter
                      </h4>
                      <h4
                        className="title2 hidden-md-up collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#dividerId-2"
                      >
                        Sign Up For Newsletter
                      </h4>
                      <div id="dividerId-2" className="collapse">
                        <div className="newsletter-content-wrap">
                          <div className="newsletter-form">
                            <form>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Your email address"
                              />
                              <button className="btn btn-submit" type="button">
                                Sign up
                              </button>
                            </form>
                          </div>
                        </div>
                        <p>
                          You may unsubscribe at any moment. For that purpose,
                          please find our contact info in the legal notice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-widget-area pb-30">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="widget-item">
                      <div className="about-widget">
                        <div className="inner-content">
                          <div className="footer-logo">
                            <Link to="/">
                              <img
                                className="logo-light"
                                src={`${process.env.PUBLIC_URL}/assets/img/logo-light.png`}
                                alt="Logo"
                              />
                            </Link>
                          </div>
                          <p>
                            Location: 4710-4890 Breckỉnidge St, Fayettevill USA
                          </p>
                        </div>
                        <div className="widget-desc">
                          <p>
                            We are a team of designers and developers that
                            create high quality Magento, Prestashop, Opencart.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="widget-item">
                      <div className="widget-menu-wrap">
                        <ul className="nav-menu">
                          <li>
                            <Link to="#/">Delivery</Link>
                          </li>
                          <li>
                            <Link to="#/">Legal Notice</Link>
                          </li>
                          <li>
                            <Link to="about-us.html">About us</Link>
                          </li>
                          <li>
                            <Link to="#/">Secure payment</Link>
                          </li>
                          <li>
                            <Link to="contact.html">Contact us</Link>
                          </li>
                          <li>
                            <Link to="#/">Sitemap</Link>
                          </li>
                          <li>
                            <Link to="login.html">Login</Link>
                          </li>
                          <li>
                            <Link to="my-account.html">My account</Link>
                          </li>
                          <li>
                            <Link to="shop.html">Stores</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p className="copyright">
                  Copyright © 2022 All Rights Reserved | Made with{" "}
                  <i className="fa fa-heart-o"></i> by{" "}
                  <Link target="_blank" to="https://www.hasthemes.com/">
                    HasThemes.
                  </Link>
                </p>
              </div>
              <div className="col-lg-6">
                <div className="payment">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/photos/payment.png`} alt="Payment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
