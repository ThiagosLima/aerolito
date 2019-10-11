import React from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
import SerieInfo from "./serieInfo";
import SerieNavBar from "./serieNavBar";
// import Chapters from "./chapters";

const SerieDetail = props => {
  const { url } = props.match;

  return (
    <section className="section section--midLight section--no-bottom">
      <h1>SerieDetail</h1>
      <SerieInfo />
      <SerieNavBar url={url} />
    </section>
  );
};

export default SerieDetail;
