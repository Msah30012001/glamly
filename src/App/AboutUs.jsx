import React from "react";
import Breadcrumb from "./Components/Breadcrumb";

const AboutUs = () => {
  return (
    <>
      <Breadcrumb />
      <section class="about-area about-page-area">
        <div class="container">
          <div class="row about-page-wrap">
            <div class="col-md-6">
              <div class="about-content">
                <h3 class="title">
                  Cartic Story, We Craft Awesome Stuff With Great Experiences.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusm tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat Duis aute
                  irure dolor
                </p>
                <a class="btn-theme" href="contact.html">
                  Contact Us
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="about-thumb">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/img/about/01.jpg`}
                  alt="Image-HasTech"
                  class="img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="feature-area feature-about-area position-relative z-index-1">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="feature-icon-box-style2">
                <div class="inner-content">
                  <div class="icon-box">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/img/icons/f01.png`}
                      alt="Image-HasTech"
                      class="icon-img"
                    />
                  </div>
                  <div class="content">
                    <h5 class="title">Free Shipping</h5>
                    <p>
                      Provide free home delivery <br />
                      for all product over $100
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="feature-icon-box-style2">
                <div class="inner-content">
                  <div class="icon-box">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/img/icons/f02.png`}
                      alt="Image-HasTech"
                      class="icon-img"
                    />
                  </div>
                  <div class="content">
                    <h5 class="title">Online Support</h5>
                    <p>
                      To satisfy our customer we <br />
                      try to give support online
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="feature-icon-box-style2">
                <div class="inner-content">
                  <div class="icon-box">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/img/icons/f03.png`}
                      alt="Image-HasTech"
                      class="icon-img"
                    />
                  </div>
                  <div class="content">
                    <h5 class="title">Secure Payment</h5>
                    <p>
                      We ensure our product Good <br />
                      quality all times
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="shape-group">
          <div class="shape-img1">
            <img src={`${process.env.PUBLIC_URL}/assets/img/shape/01.png`} alt="Image" />
          </div>
          <div class="shape-img2">
            <img src={`${process.env.PUBLIC_URL}/assets/img/shape/02.png`} alt="Image" />
          </div>
        </div>
      </div>
      <section class="team-area">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 m-auto">
              <div class="section-title text-center">
                <h2 class="title">Team Member</h2>
                <div class="desc">
                  <p>Some of our popular team member</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-lg-3">
              <div class="team-item">
                <div class="inner-content">
                  <div class="thumb">
                    <a href="#/">
                      <img src={`${process.env.PUBLIC_URL}/assets/img/team/01.jpg`} alt="Image-HasTech" />
                    </a>
                    <div class="member-icons">
                      <a href="#/">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="#/">
                        <i class="fa fa-dribbble"></i>
                      </a>
                      <a href="#/">
                        <i class="fa fa-pinterest-p"></i>
                      </a>
                      <a href="#/">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div class="content">
                    <h4 class="title">
                      <a href="#/">Rosa Lawson</a>
                    </h4>
                    <p>Team Member</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="team-item">
                <div class="inner-content">
                  <div class="thumb">
                    <a href="#/">
                      <img src={`${process.env.PUBLIC_URL}/assets/img/team/02.jpg`} alt="Image-HasTech" />
                    </a>
                    <div class="member-icons">
                      <a href="#/">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="#/">
                        <i class="fa fa-dribbble"></i>
                      </a>
                      <a href="#/">
                        <i class="fa fa-pinterest-p"></i>
                      </a>
                      <a href="#/">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div class="content">
                    <h4 class="title">
                      <a href="#/">Mario Palmer</a>
                    </h4>
                    <p>Team Member</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="team-item">
                <div class="inner-content">
                  <div class="thumb">
                    <a href="#/">
                      <img src={`${process.env.PUBLIC_URL}/assets/img/team/03.jpg`} alt="Image-HasTech" />
                    </a>
                    <div class="member-icons">
                      <a href="#/">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="#/">
                        <i class="fa fa-dribbble"></i>
                      </a>
                      <a href="#/">
                        <i class="fa fa-pinterest-p"></i>
                      </a>
                      <a href="#/">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div class="content">
                    <h4 class="title">
                      <a href="#/">Maria Randall</a>
                    </h4>
                    <p>Team Member</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="team-item">
                <div class="inner-content">
                  <div class="thumb">
                    <a href="#/">
                      <img src={`${process.env.PUBLIC_URL}/assets/img/team/04.jpg`} alt="Image-HasTech" />
                    </a>
                    <div class="member-icons">
                      <a href="#/">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="#/">
                        <i class="fa fa-dribbble"></i>
                      </a>
                      <a href="#/">
                        <i class="fa fa-pinterest-p"></i>
                      </a>
                      <a href="#/">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div class="content">
                    <h4 class="title">
                      <a href="#/">Yousif Cross</a>
                    </h4>
                    <p>Team Member</p>
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

export default AboutUs;
