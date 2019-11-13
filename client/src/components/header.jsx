import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import logo from "../logo.png";

const MainNavBar = () => {
  return (
    <header className="header">
      <Container fluid>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Link to="/series">
                <div className="header--logo">
                  <img src={logo} alt="Meteoro logo do site" />
                </div>
                <div className="header--circle" />
              </Link>
            </Col>
            <Col align="end" xs={12} md={2} push={{ md: 6 }}>
              O O O
            </Col>
            <Col xs={12} md={6} pull={{ md: 2 }}>
              <nav className="header--nav">
                <ul>
                  <li>
                    <NavLink className="header--nav__item header--nav__item-border" to="/series">Início</NavLink>
                  </li>
                  <li>
                    <NavLink className="header--nav__item header--nav__item-border"  to="/shop">Comprar</NavLink>
                  </li>
                  <li>
                    <NavLink className="header--nav__item header--nav__item-border"  to="/credits">Créditos</NavLink>
                  </li>
                  <li>
                    <NavLink className="header--nav__item"  to="/contact">Contato</NavLink>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="header--full-width-row" />
    </header>
  );
};

export default MainNavBar;
