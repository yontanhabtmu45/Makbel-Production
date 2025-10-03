import React from "react";
import Filmb1 from "../assets/img/banner1.jpg";
import Filmb2 from "../assets/img/banner2.jpg";
import Filmb3 from "../assets/img/banner3.jpg";
import Filmb4 from "../assets/img/banner4.jpg";

export default function Service() {
  const logoColor = "#C29D59";
  const services = [
    {
      icon: "fa-film",
      title: "Commercials & Brand Films",
      img: Filmb1,
      desc: "From concept to post-production, we deliver visually powerful commercials and brand films that connect with audiences.",
    },
    {
      icon: "fa-music",
      title: "Music Videos",
      img: Filmb2,
      desc: "Creative direction, multiple locations, and professional editing for artists and labels seeking standout music videos.",
    },
    {
      icon: "fa-video",
      title: "Documentaries",
      img: Filmb3,
      desc: "We craft compelling documentaries with interviews, voiceover, and b-roll to tell real stories that matter.",
    },
    {
      icon: "fa-edit",
      title: "Post-Production",
      img: Filmb4,
      desc: "Advanced editing, color grading, sound design, and visual effects to bring your project to life.",
    },
  ];

  return (
    <>

      {/* Page Header Start */}
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div
          className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
          style={{ minHeight: "400px" }}
        >
          <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
            Services
          </h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white">
              <a className="text-white" href="">
                Home
              </a>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Services</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Service Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-uppercase"
              style={{ letterSpacing: "5px", color: logoColor }}
            >
              Our Services
            </h4>
            <h1 className="display-4" style={{ color: logoColor }}>
              What We Offer
            </h1>
          </div>
          <div className="row">
            {services.map((service, i) => (
              <div className="col-lg-6 mb-5" key={i}>
                <div className="row align-items-center">
                  <div className="col-sm-5">
                    <img
                      className="img-fluid mb-3 mb-sm-0"
                      src={service.img}
                      alt={service.title}
                      style={{
                        borderRadius: "10px",
                        objectFit: "cover",
                        width: "100%",
                        height: "220px",
                      }}
                    />
                  </div>
                  <div className="col-sm-7">
                    <h4 style={{ color: logoColor }}>
                      <i
                        className={`fa ${service.icon} service-icon mr-2`}
                        style={{ color: logoColor }}
                      ></i>
                      {service.title}
                    </h4>
                    <p className="m-0">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Why Choose Us Start */}
      <div className="container-fluid my-5 py-5 bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h4
              className="text-uppercase"
              style={{ letterSpacing: "5px", color: logoColor }}
            >
              Why Choose Makbel
            </h4>
            <h2 className="mb-4" style={{ color: logoColor }}>
              Your Vision, Our Expertise
            </h2>
            <p className="lead">
              We combine creativity, technical skill, and a passion for storytelling to deliver outstanding results for every client. Whether you need a commercial, music video, documentary, or post-production services, Makbel Film Production is your trusted partner from concept to screen.
            </p>
          </div>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <i className="fa fa-users fa-3x mb-3" style={{ color: logoColor }}></i>
              <h5 className="font-weight-bold" style={{ color: logoColor }}>Experienced Team</h5>
              <p>Our crew brings decades of experience in film, TV, and digital content production.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa fa-lightbulb fa-3x mb-3" style={{ color: logoColor }}></i>
              <h5 className="font-weight-bold" style={{ color: logoColor }}>Creative Approach</h5>
              <p>We turn your ideas into visually stunning stories that engage and inspire audiences.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa fa-star fa-3x mb-3" style={{ color: logoColor }}></i>
              <h5 className="font-weight-bold" style={{ color: logoColor }}>Quality Results</h5>
              <p>We deliver high-quality productions on time and on budget, every time.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us End */}

      {/* Back to Top */}
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
        style={{ background: logoColor, border: "none" }}
      >
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}