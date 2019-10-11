import React from "react";
// import { Route, Switch, Redirect } from "react-router-dom";
import SerieInfo from "./serieInfo";
import SerieNavBar from "./serieNavBar";
// import Chapters from "./chapters";

const SerieDetail = props => {
  const { url } = props.match;

  return (
    <div>
      <h1>SerieDetail</h1>
      <SerieInfo />
      <SerieNavBar url={url} />
    </div>
  );
};

export default SerieDetail;
