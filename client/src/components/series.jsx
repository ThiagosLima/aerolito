import React from "react";
import { Row, Col, Container } from "react-grid-system";
import SerieCard from "./serieCard";
import series from "../mock/series";

const Series = () => {
  return (
    <Container>
      <section className="section section--light">
        <Row gutterWidth={16}>
          {series.map(serie => {
            return (
              <Col key={serie.id} xs={12} md={6}>
                <SerieCard
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
    </Container>
  );
};

export default Series;
