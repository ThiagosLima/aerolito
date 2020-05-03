import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Row, Col, Visible } from "react-grid-system";
import logo from "../logo.png";
// import br from "../assets/img/PT 1.png";
// import uk from "../assets/img/EN 1.png";
import facebookA from "../assets/img/01a - Facebook.png";
import facebookB from "../assets/img/01b - Facebook.png";
import instagramA from "../assets/img/04a - Instagram.png";
import instagramB from "../assets/img/04b - Instagram.png";
import youtubeA from "../assets/img/06a - YouTube.png";
import youtubeB from "../assets/img/06b - YouTube.png";

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
              <Col xs={3}>menu</Col>
            </Visible>
            <Visible lg xl>
              <Col xs={12} md={3} push={{ md: 6 }}>
                <img
                  className="header__social-media header__instagram"
                  src={instagramA}
                  onMouseOver={(e) => (e.currentTarget.src = instagramB)}
                  onMouseOut={(e) => (e.currentTarget.src = instagramA)}
                  alt="Link para o instagram"
                />
                <img
                  className="header__social-media header__youtube"
                  src={youtubeA}
                  onMouseOver={(e) => (e.currentTarget.src = youtubeB)}
                  onMouseOut={(e) => (e.currentTarget.src = youtubeA)}
                  alt="Link para o youtube"
                />
                <img
                  className="header__social-media header__facebook"
                  src={facebookA}
                  onMouseOver={(e) => (e.currentTarget.src = facebookB)}
                  onMouseOut={(e) => (e.currentTarget.src = facebookA)}
                  alt="Link para o facebook"
                />
              </Col>
              <Col align="end" xs={12} md={6} pull={{ md: 3 }}>
                <Row nogutter>
                  <Col lg={2} xl={4}>
                    {/* <div className="header__flags-container">
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
                    </div> */}
                  </Col>
                  <Col>
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
