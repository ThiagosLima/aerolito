import React from "react";
import { NavLink } from "react-router-dom";

const SerieNavBar = ({ url }) => {
  return (
    <nav className="navbar navbar--light">
      <ul className="nav nav-tabs navbar__tabs">
        <li className="nav-item navbar__item">
          <NavLink
            className="nav-link navbar__link navbar--left-tab"
            to={`${url}/chapters`}>
            LER AGORA
          </NavLink>
        </li>
        <li className="nav-item navbar__item">
          <NavLink className="nav-link navbar__link" to={`${url}/comments`}>
            COMENTÁRIOS & FEEDBACK
          </NavLink>
        </li>
        <li className="nav-item navbar__item">
          <NavLink className="nav-link navbar__link" to={`${url}/extras`}>
            EXTRAS
          </NavLink>
        </li>
        <li className="nav-item navbar__item">
          <NavLink
            className="nav-link navbar__link"
            to={`${url}/accessibility`}>
            ACESSIBILIDADE
          </NavLink>
        </li>
        <li className="nav-item navbar__item">
          <NavLink
            className="nav-link navbar__link navbar--right-tab"
            to={`${url}/serieShop`}>
            COMPRAR IMPRESSO
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SerieNavBar;
