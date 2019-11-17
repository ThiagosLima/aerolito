import React from "react";
import { Row, Col } from "react-grid-system";
import SerieCard from "./serieCard";
import series from "../mock/series";

const Series = () => {
  return (
    <section className="section section--light">
      <Row gutterWidth={16}>
        {series.map(serie => {
          return (
            <Col xs={12} md={6}>
              <SerieCard
                key={serie.id}
                img={{ src: serie.img.src, alt: serie.img.alt }}
                title={serie.title}
                text={serie.text}
                link={`/series/${serie.id}`}
              />
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default Series;
