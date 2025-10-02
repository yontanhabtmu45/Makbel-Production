import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../assets/img/10001.jpg";
import banner5 from "../assets/img/10005.png";
import banner2 from "../assets/img/10006.png";
import banner3 from "../assets/img/10007.png";
import banner4 from "../assets/img/10008.png";
import banner8 from "../assets/img/10009.png";
import banner6 from "../assets/img/10010.png";
import banner7 from "../assets/img/10011.png";
import Filmb1 from "../assets/img/banner1.jpg";
import Filmb2 from "../assets/img/banner2.jpg";
import Filmb3 from "../assets/img/banner3.jpg";
import Filmb4 from "../assets/img/banner4.jpg";

export default function Home() {
  return (
    <>
      {/* Carousel Start */}
      <div className="w-100" style={{ marginBottom: "3rem" }}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={4000}
          stopOnHover
          swipeable
          emulateTouch
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const style = {
              marginLeft: 6,
              color: isSelected ? "#007bff" : "#fff",
              cursor: "pointer",
            };
            return (
              <span
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              >
                ●
              </span>
            );
          }}
        >
          {[banner1, banner5, banner2, banner3, banner4].map((banner, idx) => (
            <div
              key={idx}
              style={{
                width: "100vw",
                height: "100vh",
                position: "relative",
              }}
            >
              <img
                src={banner}
                alt={`Slide ${idx + 1}`}
                style={{
                  width: "100vw",
                  height: "100vh",
                  objectFit: "cover",
                }}
              />
              <div
                className="carousel-caption d-flex flex-column align-items-center justify-content-center"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,0.3)",
                }}
              >
                <h2 className="text-primary font-weight-medium m-0">
                  We Have Been Serving
                </h2>
                <h1 className="display-1 text-white m-0">Film</h1>
                <h2 className="text-white m-0">* SINCE 2000 *</h2>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      {/* Carousel End */}

      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              About Us
            </h4>
            <h1 className="display-4">Serving Since 2000</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 py-0 py-lg-5">
              <h1 className="mb-3">Our Story</h1>
              <h5 className="mb-3">
                We create films, commercials, and digital stories connect with
                audiences worldwide.
              </h5>
              <p>
                At Makbel Film Production, we believe in the power of
                storytelling to inspire, connect, and transform. We are a
                creative production house specializing in film, television,
                commercials, and digital content, with a mission to bring bold
                ideas to life on screen.
              </p>
              <a
                href=""
                className="btn btn-secondary font-weight-bold py-2 px-4 mt-2"
              >
                Learn More
              </a>
            </div>
            <div
              className="col-lg-4 py-5 py-lg-0"
              style={{ minHeight: "500px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={Filmb1}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4 py-0 py-lg-5">
              <h1 className="mb-3">Our Vision</h1>
              <p>
                Our journey continues to be fueled by curiosity, creativity, and
                a relentless dedication to craft. At Makbel Film Production,
                every project is a chance to push boundaries, explore new ideas,
                and bring powerful stories to life.
              </p>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary mr-3"></i>Our journey is
                driven by curiosity,
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary mr-3"></i>craft, and the
                belief
              </h5>
              <h5 className="mb-3">
                <i className="fa fa-check text-primary mr-3"></i>that every
                story deserves to be told.
              </h5>
              <a
                href=""
                className="btn btn-primary font-weight-bold py-2 px-4 mt-2"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Service Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Our Services
            </h4>
            <h1 className="display-4">Fresh &amp; Organic Beans</h1>
          </div>
          <div className="row">
            {/* Service Items */}
            {[1, 2, 3, 4].map((i) => {
              const icons = ["fa-truck", "fa-coffee", "fa-award", "fa-table"];
              const titles = [
                "Commercials & Brand Films",
                "Music Videos",
                "Documentaries",
                "Post-Production",
              ];
              return (
                <div className="col-lg-6 mb-5" key={i}>
                  <div className="row align-items-center">
                    <div className="col-sm-5">
                      <img
                        className="img-fluid mb-3 mb-sm-0"
                        src={`img/service-${i}.jpg`}
                        alt=""
                      />
                    </div>
                    <div className="col-sm-7">
                      <h4>
                        <i className={`fa ${icons[i - 1]} service-icon`}></i>
                        {titles[i - 1]}
                      </h4>
                      <p className="m-0">
                        From concept to post-production, Makbel Film Production
                        delivers visually powerful stories that connect with
                        audiences.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Offer Start */}
      <div className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
        <div className="container py-5">
          <h1 className="display-3 text-primary mt-3">Join Our Filmmaker Community</h1>
          <h1 className="text-white mb-3">Exclusive Access for Subscribers</h1>
          <h4 className="text-white font-weight-normal mb-4 pb-3">
            Subscribe now for behind-the-scenes content, early film releases, and special event invites from Makbel Film Production.
          </h4>
          <form className="form-inline justify-content-center mb-4">
            <div className="input-group">
              <input
                type="email"
                className="form-control p-4"
                placeholder="Your Email"
                style={{ height: "60px" }}
                required
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary font-weight-bold px-4"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Offer End */}

      {/* Menu Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Production Packages
            </h4>
            <h1 className="display-4">Our Film Services & Pricing</h1>
          </div>
          <div className="row">
            {/* Short Films */}
            <div className="col-lg-6">
              <h1 className="mb-5">Short Film Packages</h1>
              {[1, 2, 3].map((i) => {
                const names = [
                  "Basic Short Film",
                  "Premium Short Film",
                  "Documentary Short",
                ];
                const prices = ["1.5k", "3k", "2.5k"];
                const descriptions = [
                  "Up to 5 minutes, 1 location, basic editing.",
                  "Up to 15 minutes, multiple locations, advanced editing, color grading.",
                  "Up to 10 minutes, interviews, voiceover, and b-roll.",
                ];
                const images = [banner6, banner7, banner8];
                return (
                  <div className="row align-items-center mb-5" key={i}>
                    <div className="col-4 col-sm-3">
                      <img
                        className="w-100 rounded-circle mb-3 mb-sm-0"
                        src={images[i - 1]}
                        alt={names[i - 1]}
                      />
                      <h5 className="menu-price">{prices[i - 1]}</h5>
                    </div>
                    <div className="col-8 col-sm-9">
                      <h4>{names[i - 1]}</h4>
                      <p className="m-0">{descriptions[i - 1]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Commercials */}
            <div className="col-lg-6">
              <h1 className="mb-5">Commercial & Music Video Packages</h1>
              {[1, 2, 3].map((i) => {
                const names = [
                  "Brand Commercial",
                  "Music Video",
                  "Social Media Promo",
                ];
                const prices = ["1.5k", "3k", "2.5k"];
                const descriptions = [
                  "30-60 seconds, script, filming, and editing.",
                  "Creative direction, multiple locations, professional editing.",
                  "Up to 1 minute, vertical/horizontal formats, fast turnaround.",
                ];
                const images = [banner6, banner7, banner8];
                return (
                  <div className="row align-items-center mb-5" key={i}>
                    <div className="col-4 col-sm-3">
                      <img
                        className="w-100 rounded-circle mb-3 mb-sm-0"
                        src={images[i - 1]}
                        alt={names[i - 1]}
                      />
                      <h5 className="menu-price">{prices[i - 1]}</h5>
                    </div>
                    <div className="col-8 col-sm-9">
                      <h4>{names[i - 1]}</h4>
                      <p className="m-0">{descriptions[i - 1]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Menu End */}

      {/* Reservation Start */}
      <div className="container-fluid my-5">
        <div className="container">
          <div className="reservation position-relative overlay-top overlay-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6 my-5 my-lg-0">
                <div className="p-5">
                  <div className="mb-4">
                    <h1 className="display-3 text-primary">
                      Request a Project Quote
                    </h1>
                    <h1 className="text-white">Start Your Film Journey</h1>
                  </div>
                  <p className="text-white">
                    Ready to bring your story to life? Fill out the form to request a quote for your film, commercial, or music video project with Makbel Film Production. Our team will contact you to discuss your vision and provide a tailored proposal.
                  </p>
                  <ul className="list-inline text-white m-0">
                    <li className="py-2">
                      <i className="fa fa-check text-primary mr-3"></i>Custom packages for every budget
                    </li>
                    <li className="py-2">
                      <i className="fa fa-check text-primary mr-3"></i>Professional production team
                    </li>
                    <li className="py-2">
                      <i className="fa fa-check text-primary mr-3"></i>Fast response & creative support
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="text-center p-5"
                  style={{ background: "rgba(51, 33, 29, .8)" }}
                >
                  <h1 className="text-white mb-4 mt-5">Request a Quote</h1>
                  <form className="mb-5">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-transparent border-primary p-4"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control bg-transparent border-primary p-4"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-transparent border-primary p-4"
                        placeholder="Project Type (e.g. Short Film, Commercial)"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-transparent border-primary p-4"
                        placeholder="Estimated Budget"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control bg-transparent border-primary p-4"
                        placeholder="Tell us about your project"
                        rows={3}
                      />
                    </div>
                    <div>
                      <button
                        className="btn btn-primary btn-block font-weight-bold py-3"
                        type="submit"
                      >
                        Send Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reservation End */}

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
            <h1 className="display-4">What Our Clients Say</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            {[
              {
                name: "Sarah Abera",
                profession: "Director, 123 Films",
                img: "img/testimonial-1.jpg",
                text:
                  "Makbel Film Production brought our vision to life with creativity and professionalism. Their team made the entire process seamless and enjoyable.",
              },
              {
                name: "dawit Kebede",
                profession: "Marketing Manager, BrandX",
                img: "img/testimonial-2.jpg",
                text:
                  "The commercial Makbel produced for us exceeded expectations. The storytelling and visuals truly captured our brand’s message.",
              },
              {
                name: "Alem Yilma",
                profession: "Musician & Artist",
                img: "img/testimonial-3.jpg",
                text:
                  "My music video was a dream come true! The Makbel crew was innovative, supportive, and delivered a stunning final product.",
              },
              {
                name: "Omar Sayed",
                profession: "Documentary Producer",
                img: "img/testimonial-4.jpg",
                text:
                  "Working with Makbel Film Production was a fantastic experience. Their attention to detail and passion for storytelling is unmatched.",
              },
            ].map((testimonial, i) => (
              <div className="testimonial-item" key={i}>
                <div className="d-flex align-items-center mb-3">
                  <img
                    className="img-fluid"
                    src={testimonial.img}
                    alt={testimonial.name}
                  />
                  <div className="ml-3">
                    <h4>{testimonial.name}</h4>
                    <i>{testimonial.profession}</i>
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
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
}
