import React from "react";

export default function Contact() {
  return (
    <>

      {/* Page Header Start */}
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div
          className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
          style={{ minHeight: "400px" }}
        >
          <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
            Contact
          </h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white">
              <a className="text-white" href="">
                Home
              </a>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Contact</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Contact Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Contact Us
            </h4>
            <h1 className="display-4">Feel Free To Contact</h1>
          </div>
          <div className="row px-3 pb-2">
            <div className="col-sm-4 text-center mb-3">
              <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
              <h4 className="font-weight-bold">Address</h4>
              <p>Ayer Tena, Addis Abeba Ethiopia</p>
            </div>
            <div className="col-sm-4 text-center mb-3">
              <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
              <h4 className="font-weight-bold">Phone</h4>
              <p>+251 987 654 321</p>
            </div>
            <div className="col-sm-4 text-center mb-3">
              <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
              <h4 className="font-weight-bold">Email</h4>
              <p>info@makbelproduction.com</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pb-5">
              <iframe
                title="Google Map"
                style={{ width: "100%", height: "443px", border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190.1782898690871!2d38.692156668041804!3d8.9879973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b872032ff6135%3A0x3d1cb2a586ed7830!2sXMQR%2B6X3%2C%2005%2C%20Addis%20Ababa!5e1!3m2!1sen!2set!4v1759516750925!5m2!1sen!2set"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="col-md-6 pb-5">
              <div className="contact-form">
                <div id="success"></div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  noValidate="novalidate"
                  // You may want to add onSubmit handler here for React
                >
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control bg-transparent p-4"
                      id="name"
                      placeholder="Your Name"
                      required
                      data-validation-required-message="Please enter your name"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control bg-transparent p-4"
                      id="email"
                      placeholder="Your Email"
                      required
                      data-validation-required-message="Please enter your email"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control bg-transparent p-4"
                      id="subject"
                      placeholder="Subject"
                      required
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control bg-transparent py-3 px-4"
                      rows="5"
                      id="message"
                      placeholder="Message"
                      required
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary font-weight-bold py-3 px-5"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}