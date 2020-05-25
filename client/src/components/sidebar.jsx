import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Visible } from "react-grid-system";

const Series = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    if (!nav) {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("sidenavDetail").style.marginLeft = "250px";
    } else {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("sidenavDetail").style.marginLeft = "0";
    }
    setNav(!nav);
  };
  return (
    <Visible xs>
      <span
        id="hamburguer"
        style={{ cursor: "pointer", marginLeft: "5px" }}
        onClick={toggleNav}
      >
        &#9776;
      </span>
      <div id="mySidenav" className="sidenav">
        <div className="closebtn" onClick={toggleNav}>
          &times;
        </div>
        <NavLink to="/series">Início</NavLink>
        <NavLink to="/shop">Comprar</NavLink>
        <NavLink to="/credits">Créditos</NavLink>
        <NavLink to="/contact">Contato</NavLink>
      </div>
      <div
        id="sidenavDetail"
        style={{ width: "5px" }}
        className="sidenavDetail"
      ></div>
      <div id="wrapper"></div>
    </Visible>
  );
};

export default Series;
