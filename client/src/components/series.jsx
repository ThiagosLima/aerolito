import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-grid-system";
import SerieCard from "./serieCard";
import serieService from "../services/serieService";

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await serieService.getSeries();
      setSeries(data);
    }

    getData();
  }, []);

  return (
    <Container>
      <section className="section section--light">
        <Row gutterWidth={16}>
          {series.map(serie => {
            return (
              <Col key={serie._id} xs={12} md={6}>
                <SerieCard
                  img={{ src: serie.cover, alt: serie.title }}
                  title={serie.title}
                  text={serie.synopsis}
                  link={`/series/${serie._id}`}
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
