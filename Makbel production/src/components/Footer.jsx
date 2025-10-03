import React from 'react'

function Footer() {
  // Use your logo color or brand color for icons
  const logoColor = "#C29D59";

  return (
    <>
    {/* Footer Start */}
      <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
        <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
          <div className="col-lg-3 col-md-6 mb-5">
            <h4
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: "3px" }}
            >
              Get In Touch
            </h4>
            <p>
              <i className="fa fa-map-marker-alt mr-2"></i>Ayer Tena, Addis Ababa, Ethiopia
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2"></i>+251 987 654 321
            </p>
            <p className="m-0">
              <i className="fa fa-envelope mr-2"></i>info@makbelproduction.com
            </p>
          </div>
          <div className="col-lg-6 col-md-6 mb-5">
            <h4
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: "3px" }}
            >
              Follow Us
            </h4>
            <p>
              Connect with Makbel Film Production on social media for the latest updates, behind-the-scenes, and more.
            </p>
            <div className="d-flex justify-content-start">
              <a
                className="btn btn-lg btn-lg-square mr-2"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#fff",
                  border: "none",
                  color: 'black',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                }}
              >
                <i className="fab fa-twitter" style={{ color: logoColor, fontSize: 22 }}></i>
              </a>
              <a
                className="btn btn-lg btn-lg-square mr-2"
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#fff",
                  border: "none",
                  color: logoColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                }}
              >
                <i className="fab fa-facebook-f" style={{ color: logoColor, fontSize: 22 }}></i>
              </a>
              <a
                className="btn btn-lg btn-lg-square mr-2"
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#fff",
                  border: "none",
                  color: logoColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                }}
              >
                <i className="fab fa-linkedin-in" style={{ color: logoColor, fontSize: 22 }}></i>
              </a>
              <a
                className="btn btn-lg btn-lg-square"
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#fff",
                  border: "none",
                  color: logoColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                }}
              >
                <i className="fab fa-instagram" style={{ color: logoColor, fontSize: 22 }}></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: "3px" }}
            >
              Open Hours
            </h4>
            <div>
              <h6 className="text-white text-uppercase">Monday - Friday</h6>
              <p>8.00 AM - 8.00 PM</p>
              <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
              <p>2.00 PM - 8.00 PM</p>
            </div>
          </div>
        </div>
        <div
          className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5"
          style={{ borderColor: "rgba(256, 256, 256, .1)" }}
        >
          <p className="mb-2 text-white">
            Copyright &copy;{" "}
            <span className="font-weight-bold">
              Makbel Film Production
            </span>
            . All Rights Reserved.
          </p>
          <p className="m-0 text-white">
            Designed by{" "}
            <a className="font-weight-bold" href="https://bitlayer-tech.netlify.app/" target="_blank" rel="noopener noreferrer">
              Yonatan H.
            </a>{" "}
            | Customized by BitLayer Technologies
          </p>
        </div>
      </div>
      {/* Footer End */}
    </>
  )
}

export default Footer