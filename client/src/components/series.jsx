import React from "react";
import { Link } from "react-router-dom";

const Series = () => {
  return (
    <section className="section section--light">
      <h1>Series</h1>
      <Link className="btn" to="/series/1/chapters">
        LER MAIS
      </Link>
    </section>
  );
};

export default Series;
