import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MainNavBar from "./components/mainNavBar";
import Shop from "./components/shop";
import Contact from "./components/contact";
import Credits from "./components/credits";
import Series from "./components/series";
import SerieDetail from "./components/serieDetail";
import Chapters from "./components/chapters";
import Comments from "./components/comments";
import Extras from "./components/extras";
import NotFound from "./components/notFound";
import Accessibility from "./components/accessibility";
import "./App.css";

function App() {
  return (
    <div className="container">
      <MainNavBar />
      <Switch>
        <Route path="/series/:id" component={SerieDetail} />
        <Route path="/series" component={Series} />
        <Route path="/credits" component={Credits} />
        <Route path="/contact" component={Contact} />
        <Route path="/shop" component={Shop} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/series" />
      </Switch>
      <Route path="/series/:id/chapters" exact component={Chapters} />
      <Route path="/series/:id/comments" exact component={Comments} />
      <Route path="/series/:id/extras" exact component={Extras} />
      <Route path="/series/:id/accessibility" exact component={Accessibility} />
      <Redirect to="/not-found" />
    </div>
  );
}

export default App;
