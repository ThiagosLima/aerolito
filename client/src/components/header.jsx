import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";

const MainNavBar = () => {
  return (
    <header className="header">
      <Container fluid>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Link to="/series">Aerolito</Link>
            </Col>
            <Col xs={12} md={2} push={{ md: 6 }}>
              O O O{" "}
            </Col>
            <Col xs={12} md={6} pull={{ md: 2 }}>
              <nav>
                <ul>
                  <li>
                    <NavLink to="/series">Início</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop">Comprar</NavLink>
                  </li>
                  <li>
                    <NavLink to="/credits">Créditos</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contato</NavLink>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </Container>
    </header>
  );
};

export default MainNavBar;
