import React from "react";
import Breadcrumb from "./Components/Breadcrumb";

const Contact = () => {
  return (
    <>
      <Breadcrumb />
      <section class="contact-area contact-page-area">
        <div class="container">
          <div class="row contact-page-wrapper">
            <div class="col-lg-6">
              <div class="contact-form-wrap">
                <div class="contact-form-title">
                  <h5 class="sub-title">Don’t worry!</h5>
                  <h2 class="title">If you have any query? Contact with us.</h2>
                </div>
                <div class="contact-form">
                  <form
                    id="contact-form"
                    action="http://whizthemes.com/mail-php/raju/arden/mail.php"
                    method="POST"
                  >
                    <div class="row row-gutter-20">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            class="form-control"
                            type="text"
                            name="con_name"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            class="form-control"
                            type="email"
                            name="con_email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            class="form-control"
                            type="tel"
                            name="con_phone"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group mb--0">
                          <textarea
                            class="form-control"
                            name="con_message"
                            placeholder="Massage"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group mb--0">
                          <button class="btn-theme" type="submit">
                            Submit Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="form-message"></div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="contact-info-list">
                <div class="contact-info">
                  <div class="info-item">
                    <div class="info">
                      <h5 class="title">Phone:</h5>
                      <p>
                        <a href="tel:7653882142">(765) 388-2142</a>
                        <a href="tel:3048553859">(304) 855-3859</a>
                      </p>
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info">
                      <h5 class="title">Email:</h5>
                      <p>
                        <a href="mailto:example@gmail.com">example@gmail.com</a>
                        <a href="mailto:yourmail@gmail.com">
                          yourmail@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info">
                      <h5 class="title">Address:</h5>
                      <p>
                        1229 Roma Ct San Jacinto,
                        <br />
                        California(CA), 92583
                      </p>
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

export default Contact;
