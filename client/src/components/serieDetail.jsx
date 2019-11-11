import React from "react";
import { useRouteMatch } from "react-router-dom";
import SerieInfo from "./serieInfo";
import SerieNavBar from "./serieNavBar";
// import Chapters from "./chapters";

const SerieDetail = () => {
  let { url } = useRouteMatch();

  return (
    <section className="section section--midLight section--no-bottom">
      <h1>SerieDetail</h1>
      <SerieInfo />
      <SerieNavBar url={url} />
    </section>
  );
};

export default SerieDetail;
