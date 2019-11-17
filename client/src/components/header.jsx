import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Row, Col, Visible } from "react-grid-system";
import logo from "../logo.png";
import br from "../assets/img/Br.png";
import uk from "../assets/img/Uk.png";

const MainNavBar = () => {
  return (
    <header>
      <Container fluid className="header">
        <Container>
          <Row>
            <Col xs={9} lg={3}>
              <Link to="/series">
                <div className="header__logo">
                  <img src={logo} alt="Meteoro logo do site" />
                </div>
                <div className="header__circle" />
              </Link>
            </Col>
            <Visible xs sm md>
              <Col xs={3}>
                menu
              </Col>
            </Visible>
            <Visible lg xl>
            <Col align="end" xs={12} md={1} push={{ md: 8 }}>
              O O O
            </Col>
            <Col xs={12} md={8} pull={{ md: 1 }}>
              <Row>
                <Col xs={2}>
                  <div className="header__flags-container">
                    <img
                      className="header__flag"
                      src={br}
                      alt="Bandeira do Brasil"
                    ></img>
                    <img
                      className="header__flag"
                      src={uk}
                      alt="Bandeira do Reino Unido"
                    ></img>
                  </div>
                </Col>
                <Col xs={8}>
                  <nav className="header__nav">
                    <ul className="header__ul">
                      <li className="header__li">
                        <NavLink
                          className="header__item header__item--active"
                          to="/series"
                        >
                          <span className="header__link header__link--active header__link--border">
                            Início
                          </span>
                        </NavLink>
                      </li>
                      <li className="header__li">
                        <NavLink
                          className="header__item header__item--active"
                          to="/shop"
                        >
                          <span className="header__link header__link--active header__link--border">
                            Comprar
                          </span>
                        </NavLink>
                      </li>
                      <li className="header__li">
                        <NavLink
                          className="header__item header__item--active"
                          to="/credits"
                        >
                          <span className="header__link header__link--active header__link--border">
                            Créditos
                          </span>
                        </NavLink>
                      </li>
                      <li className="header__li">
                        <NavLink
                          className="header__item header__item--active"
                          to="/contact"
                        >
                          <span className="header__link header__link--active">
                            Contato
                          </span>
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </Col>
              </Row>
            </Col>
            </Visible>
          </Row>
        </Container>
      </Container>
      <div className="header__full-width-row" />
    </header>
  );
};

export default MainNavBar;
