import React from "react";
import { Link, NavLink } from "react-router-dom";

const MainNavBar = () => {
  return (
    <nav className="navbar navbar--dark">
      <Link className="navbar__brand" to="/series">
        aerolito
      </Link>
      <ul className="nav nav-tabs navbar__tabs">
        <li className="nav-item navbar__item">
          <Link className="nav-link navbar__link navbar--left-tab" to="/series">
            INÍCIO
          </Link>
        </li>
        <li className="nav-item navbar__item">
          <NavLink className="nav-link navbar__link" to="/shop">
            COMPRAR
          </NavLink>
        </li>
        <li className="nav-item navbar__item">
          <NavLink className="nav-link navbar__link" to="/credits">
            CRÉDITOS
          </NavLink>
        </li>
        <li className="nav-item navbar__item">
          <NavLink
            className="nav-link navbar__link navbar--right-tab"
            to="/contact">
            CONTATO
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavBar;
