import React from "react";
import { Container, Row, Col } from "react-grid-system";
import SerieCard from "./serieCard";
import series from "../mock/series";

const Series = () => {
  return (
    <section className="section section--light">
      <h1>Series</h1>
      <Container>
        <Row gutterWidth={16}>
          {series.map(serie => {
            console.log(serie)
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
      </Container>
    </section>
  );
};

export default Series;
