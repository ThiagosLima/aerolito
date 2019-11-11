import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import Chapters from "./chapters";
import Comments from "./comments";
import Extras from "./extras";
import Accessibility from "./accessibility";
import SerieShop from "./serieShop";

const SerieNavBar = ({ url }) => {
  return (
    <>
      <nav className="navbar navbar--light">
        <ul className="nav nav-tabs navbar__tabs">
          <li className="nav-item navbar__item">
            <NavLink
              className="nav-link navbar__link navbar--left-tab"
              to={`${url}/chapters`}
            >
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
              to={`${url}/accessibility`}
            >
              ACESSIBILIDADE
            </NavLink>
          </li>
          <li className="nav-item navbar__item">
            <NavLink
              className="nav-link navbar__link navbar--right-tab"
              to={`${url}/serieShop`}
            >
              COMPRAR IMPRESSO
            </NavLink>
          </li>
        </ul>
      </nav>

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
      </Switch>
    </>
  );
};

export default SerieNavBar;
