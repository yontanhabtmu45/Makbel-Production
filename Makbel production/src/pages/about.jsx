import React from "react";
import Filmb1 from "../assets/img/banner1.jpg";
import Filmb2 from "../assets/img/banner2.jpg";
import Filmb3 from "../assets/img/banner3.jpg";
import Filmb4 from "../assets/img/banner4.jpg";
import test1 from "../assets/img/Testimonial1.jfif";
import test2 from "../assets/img/Testimonial2.jfif";
import test3 from "../assets/img/Testimonial3.jfif";
import test4 from "../assets/img/Testimonial4.jfif";

export default function About() {
  const logoColor = "#C29D59";
  const team = [
    {
      name: "Mekdes Belay",
      role: "Founder & Director",
      img: Filmb1,
      desc: "Visionary leader and creative director with 20+ years of experience in film and media."
    },
    {
      name: "Samuel Tadesse",
      role: "Cinematographer",
      img: Filmb2,
      desc: "Award-winning cinematographer passionate about visual storytelling and innovation."
    },
    {
      name: "Lily Mulugeta",
      role: "Producer",
      img: Filmb3,
      desc: "Expert in project management, budgeting, and bringing stories from script to screen."
    },
    {
      name: "Abel Getachew",
      role: "Editor",
      img: Filmb4,
      desc: "Skilled editor with a keen eye for detail and a love for crafting compelling narratives."
    }
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
            About Us
          </h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white">
              <a className="text-white" href="/">
                Home
              </a>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">About</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Our Story
            </h4>
            <h1 className="display-4" style={{ color: logoColor }}>Serving Since 2000</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 py-0 py-lg-5">
              <h1 className="mb-3" style={{ color: logoColor }}>Makbel Film Production</h1>
              <h5 className="mb-3" style={{ color: logoColor }}>
                We create films, commercials, and digital stories that connect with audiences worldwide.
              </h5>
              <p>
                At Makbel Film Production, we believe in the power of storytelling to inspire, connect, and transform. We are a creative production house specializing in film, television, commercials, and digital content, with a mission to bring bold ideas to life on screen.
              </p>
              <ul>
                <li>Professional film, TV, and commercial production</li>
                <li>Creative direction and post-production expertise</li>
                <li>Passionate team dedicated to your vision</li>
              </ul>
              <a
                href="#"
                className="btn btn-secondary font-weight-bold py-2 px-4 mt-2"
                style={{ background: logoColor, border: "none" }}
              >
                Learn More
              </a>
            </div>
            <div className="col-lg-6 py-5 py-lg-0">
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={Filmb1}
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                  alt="Makbel Film Production"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

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

      {/* Our Team Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Our Team
            </h4>
            <h1 className="display-4" style={{ color: logoColor }}>Meet The Creatives</h1>
          </div>
          <div className="row">
            {team.map((member, i) => (
              <div className="col-lg-3 col-md-6 mb-5" key={i}>
                <div className="card border-0 shadow text-center h-100">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "10px"
                    }}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{member.name}</h4>
                    <h6 className="card-subtitle mb-2" style={{ color: logoColor }}>{member.role}</h6>
                    <p className="card-text">{member.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Our Team End */}

      {/* Testimonial Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Testimonials
            </h4>
            <h1 className="display-4" style={{ color: logoColor }}>What Our Clients Say</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            {[
              {
                name: "Sarah Abera",
                profession: "Director, 123 Films",
                img: test1,
                text:
                  "Makbel Film Production brought our vision to life with creativity and professionalism. Their team made the entire process seamless and enjoyable.",
              },
              {
                name: "dawit Kebede",
                profession: "Marketing Manager, BrandX",
                img: test2,
                text:
                  "The commercial Makbel produced for us exceeded expectations. The storytelling and visuals truly captured our brand’s message.",
              },
              {
                name: "Alem Yilma",
                profession: "Musician & Artist",
                img: test3,
                text:
                  "My music video was a dream come true! The Makbel crew was innovative, supportive, and delivered a stunning final product.",
              },
              {
                name: "Omar Sayed",
                profession: "Documentary Producer",
                img: test4,
                text:
                  "Working with Makbel Film Production was a fantastic experience. Their attention to detail and passion for storytelling is unmatched.",
              },
            ].map((testimonial, i) => (
              <div className="testimonial-item" key={i}>
                <div className="d-flex align-items-center mb-3">
                  <img
                    className="img-fluid rounded-circle"
                    src={testimonial.img}
                    alt={testimonial.name}
                    style={{
                      width: 80,
                      height: 80,
                      objectFit: "cover",
                      border: `4px solid ${logoColor}`,
                      background: "#fff",
                      filter: "blur(4px)",
                      transition: "filter 0.3s"
                    }}
                  />
                  <div className="ml-3">
                    <h4 style={{ color: logoColor }}>{testimonial.name}</h4>
                    <i style={{ color: logoColor }}>{testimonial.profession}</i>
                  </div>
                </div>
                <p className="m-0">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonial End */}

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