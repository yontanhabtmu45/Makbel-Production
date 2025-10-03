import React from "react";
import { Link } from "react-router-dom";
import movie1 from "../assets/img/banner1.jpg";
import movie2 from "../assets/img/banner2.jpg";
import movie3 from "../assets/img/banner3.jpg";
import movie4 from "../assets/img/banner4.jpg";
import movie5 from "../assets/img/banner2.jpg";
import movie6 from "../assets/img/banner1.jpg";

// Add more details for each movie
export const movies = [
  {
    id: 1,
    title: "The Journey Within",
    img: movie1,
    year: "2022",
    genre: "Drama",
    desc: "An inspiring story of self-discovery and resilience, following the life of a young artist in Addis Ababa.",
    writer: "Mekdes Belay",
    director: "Samuel Tadesse",
    cast: "Lily Mulugeta, Abel Getachew",
    duration: "1h 45m"
  },
  {
    id: 2,
    title: "Echoes of Tradition",
    img: movie2,
    year: "2021",
    genre: "Documentary",
    desc: "A visually stunning documentary exploring Ethiopia’s rich cultural heritage and music.",
    writer: "Lily Mulugeta",
    director: "Mekdes Belay",
    cast: "Various",
    duration: "55m"
  },
  {
    id: 3,
    title: "Urban Pulse",
    img: movie3,
    year: "2023",
    genre: "Short Film",
    desc: "A fast-paced short film capturing the energy and challenges of city life through the eyes of local youth.",
    writer: "Abel Getachew",
    director: "Samuel Tadesse",
    cast: "Local Youth",
    duration: "25m"
  },
  {
    id: 4,
    title: "Shadows of Hope",
    img: movie4,
    year: "2020",
    genre: "Feature Film",
    desc: "A powerful drama about overcoming adversity and finding hope in unexpected places.",
    writer: "Samuel Tadesse",
    director: "Mekdes Belay",
    cast: "Lily Mulugeta, Abel Getachew",
    duration: "2h 10m"
  },
  {
    id: 5,
    title: "Rhythm of the Streets",
    img: movie5,
    year: "2022",
    genre: "Music Video",
    desc: "A vibrant music video blending traditional Ethiopian rhythms with modern beats.",
    writer: "Lily Mulugeta",
    director: "Samuel Tadesse",
    cast: "Featured Artists",
    duration: "4m"
  },
  {
    id: 6,
    title: "Faces of Change",
    img: movie6,
    year: "2023",
    genre: "Documentary",
    desc: "Stories of individuals making a difference in their communities, told through compelling interviews and visuals.",
    writer: "Abel Getachew",
    director: "Mekdes Belay",
    cast: "Community Leaders",
    duration: "1h 20m"
  },
];

export default function Portfolio() {
  const logoColor = "#C29D59";

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div
          className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
          style={{ minHeight: "400px" }}
        >
          <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
            Portfolio
          </h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white">
              <Link className="text-white" to="/">
                Home
              </Link>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Portfolio</p>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Portfolio Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h4
              className="text-uppercase"
              style={{ letterSpacing: "5px", color: logoColor }}
            >
              Our Work
            </h4>
            <h1 className="display-4" style={{ color: logoColor }}>
              Movies by Makbel Film Production
            </h1>
            <p className="lead">
              Explore a selection of films, documentaries, and music videos produced by our creative team.
            </p>
          </div>
          <div className="row">
            {movies.map((movie) => (
              <div className="col-lg-4 col-md-6 mb-5" key={movie.id}>
                <div className="card border-0 shadow h-100">
                  <Link
                    to={`/portfolio/${movie.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src={movie.img}
                      alt={movie.title}
                      className="card-img-top"
                      style={{
                        width: "100%",
                        height: "260px",
                        objectFit: "cover",
                        borderRadius: "10px 10px 0 0",
                        cursor: "pointer"
                      }}
                    />
                  </Link>
                  <div className="card-body">
                    <h4 className="card-title" style={{ color: logoColor }}>{movie.title}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {movie.year} &middot; {movie.genre}
                    </h6>
                    <p className="card-text">{movie.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Portfolio End */}

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