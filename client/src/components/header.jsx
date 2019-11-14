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
                <div className="header__logo">
                  <img src={logo} alt="Meteoro logo do site" />
                </div>
                <div className="header__circle" />
              </Link>
            </Col>
            <Col align="end" xs={12} md={2} push={{ md: 6 }}>
              O O O
            </Col>
            <Col xs={12} md={6} pull={{ md: 2 }}>
              <nav className="header__nav">
                <ul className="header__ul">
                  <li className="header__li">
                    <NavLink
                      className="header__item--active"
                      to="/series"
                    >
                      <span className="header__link header__link--border">
                        Início
                      </span>
                    </NavLink>
                  </li>
                  <li className="header__li">
                    <NavLink
                      className="header__item--active"
                      to="/shop"
                    >
                      <span className="header__link header__link--border">
                        Comprar
                      </span>
                    </NavLink>
                  </li>
                  <li className="header__li">
                    <NavLink
                      className="header__item--active"
                      to="/credits"
                    >
                      <span className="header__link header__link--border">
                        Créditos
                      </span>
                    </NavLink>
                  </li>
                  <li className="header__li">
                    <NavLink
                      className="header__item--active"
                      to="/contact"
                    >
                      <span className="header__link">
                        Contato
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="header__full-width-row" />
    </header>
  );
};

export default MainNavBar;
