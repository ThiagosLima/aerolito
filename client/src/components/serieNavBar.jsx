import React from "react";
import { Link } from "react-router-dom";

const SerieNavBar = ({ url }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={`${url}/chapters`}>
              LER AGORA
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${url}/comments`}>
              COMENTÁRIOS & FEEDBACK
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${url}/extras`}>
              EXTRAS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${url}/accessibility`}>
              ACESSIBILIDADE
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${url}/`}>
              COMPRAR IMPRESSO
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SerieNavBar;
