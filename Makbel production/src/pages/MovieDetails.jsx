import React from "react";
import { useParams, Link } from "react-router-dom";
import { movies } from "./Portfolio";

export default function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));
  const logoColor = "#C29D59";

  if (!movie) {
    return (
      <div className="container py-5 text-center">
        <h2>Movie not found.</h2>
        <Link to="/portfolio" className="btn btn-secondary mt-3">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow">
            <img
              src={movie.img}
              alt={movie.title}
              className="card-img-top"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "10px 10px 0 0"
              }}
            />
            <div className="card-body">
              <h2 className="card-title mb-3" style={{ color: logoColor }}>
                {movie.title}
              </h2>
              <h5 className="mb-2 text-muted">
                {movie.year} &middot; {movie.genre} &middot; {movie.duration}
              </h5>
              <p className="mb-4">{movie.desc}</p>
              <ul className="list-unstyled mb-4">
                <li>
                  <strong style={{ color: logoColor }}>Writer:</strong> {movie.writer}
                </li>
                <li>
                  <strong style={{ color: logoColor }}>Director:</strong> {movie.director}
                </li>
                <li>
                  <strong style={{ color: logoColor }}>Cast:</strong> {movie.cast}
                </li>
              </ul>
              <Link to="/portfolio" className="btn btn-secondary">
                &larr; Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}