import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Row, Col, Container } from "react-grid-system";

import Chapters from "./chapters";
import Comments from "./comments";
import Extras from "./extras";
import Accessibility from "./accessibility";
import SerieShop from "./serieShop";

const SerieNavBar = ({ url }) => {
  return (
    <>
      <Container fluid className="header__container">
        <Row>
          <Col>
            <nav className="header__nav">
              <ul className="header__ul">
                <li className="header__li">
                  <NavLink
                    className="header__item header__item--active header__item--color"
                    to={`${url}/chapters`}
                  >
                    <span className="header__link header__link--color header__link--active header__link--border">
                      LER AGORA
                    </span>
                  </NavLink>
                </li>
                <li className="header__li">
                  <NavLink
                    className="header__item header__item--active header__item--color"
                    to={`${url}/comments`}
                  >
                    <span className="header__link header__link--color header__link--active header__link--border">
                      COMENTÁRIOS & FEEDBACK
                    </span>
                  </NavLink>
                </li>
                <li className="header__li">
                  <NavLink
                    className="header__item header__item--active header__item--color"
                    to={`${url}/extras`}
                  >
                    <span className="header__link header__link--color header__link--active header__link--border">
                      EXTRAS
                    </span>
                  </NavLink>
                </li>
                <li className="header__li">
                  <NavLink
                    className="header__item header__item--active header__item--color"
                    to={`${url}/accessibility`}
                  >
                    <span className="header__link header__link--color header__link--active header__link--border">
                      ACESSIBILIDADE
                    </span>
                  </NavLink>
                </li>
                <li className="header__li">
                  <NavLink
                    className="header__item header__item--active header__item--color"
                    to={`${url}/serieShop`}
                  >
                    <span className="header__link header__link--color header__link--active header__link--border">
                      COMPRAR IMPRESSO
                    </span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>

      <Container>
        <Switch>
          <Route path="/series/:id/chapters" exact component={Chapters} />
          <Route path="/series/:id/comments" exact component={Comments} />
          <Route path="/series/:id/extras" exact component={Extras} />
          <Route
            path="/series/:id/accessibility"
            exact
            component={Accessibility}
          />
          <Route path="/series/:id/serieShop" exact component={SerieShop} />
          <Redirect from="/series/:id" exact to="/series/:id/chapters"/>
        </Switch>
      </Container>
    </>
  );
};

export default SerieNavBar;
