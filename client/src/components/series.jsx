import React from "react";
import { Link } from "react-router-dom";

const Series = () => {
  return (
    <div>
      <h1>Series</h1>
      <Link className="btn btn-primary" to="/series/1/chapters">
        Ler mais
      </Link>
    </div>
  );
};

export default Series;
