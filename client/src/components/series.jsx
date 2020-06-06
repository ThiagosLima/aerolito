import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-grid-system";
import SerieCard from "./serieCard";
import serieService from "../services/serieService";
import { getCurrentUser } from "../services/authService";

const Series = () => {
  const [series, setSeries] = useState([]);
  const user = getCurrentUser();

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
        {user ? (
          <div className="manageContent manageContent__dark">
            <Link className="btn btn--margin-small" to={`/series/upload`}>
              Adicionar Série
            </Link>
          </div>
        ) : null}

        <Row gutterWidth={16}>
          {series.map(serie => {
            return (
              <Col key={serie._id} xs={12} lg={6}>
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
