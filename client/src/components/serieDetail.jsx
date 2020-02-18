import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Row, Col, Container } from "react-grid-system";
import SerieNavBar from "./serieNavBar";
import { getSerie } from "../services/serieService";

const SerieDetail = () => {
  let { url, params } = useRouteMatch();
  const [serieDetail, setSerieDetail] = useState({});

  useEffect(() => {
    async function getData() {
      const currentSerie = await getSerie(params.id);
      setSerieDetail(currentSerie);
    }

    getData();
  }, []);

  return (
    <div>
      <Container fluid className="section section--midLight section--no-bottom">
        <Container>
          <section>
            <Row>
              <Col xs={4}>
                <img
                  alt="Capa da HQ"
                  src={serieDetail.cover}
                  className="serie-detail__img"
                />
              </Col>
              <Col xs={8}>
                <h1 className="serie-detail__title">
                  {serieDetail.title && serieDetail.title.toUpperCase()}
                </h1>
                <section className="section section--light section--normal-padding">
                  <Row className="serie-detail__pair">
                    <Col xs={2} className="serie-detail__key">
                      Autores:
                    </Col>
                    <Col xs={10} className="serie-detail__value">
                      {serieDetail.authors}
                    </Col>
                    <div className="serie-detail__hr"></div>
                  </Row>
                  <Row className="serie-detail__pair">
                    <Col xs={2} className="serie-detail__key">
                      Desenhos:
                    </Col>
                    <Col xs={10} className="serie-detail__value">
                      {serieDetail.drawings}
                    </Col>
                    <div className="serie-detail__hr"></div>
                  </Row>
                  <Row className="serie-detail__pair">
                    <Col xs={2} className="serie-detail__key">
                      Cores:
                    </Col>
                    <Col xs={10} className="serie-detail__value">
                      {serieDetail.colors}
                    </Col>
                    <div className="serie-detail__hr"></div>
                  </Row>
                  <Row className="serie-detail__pair">
                    <Col xs={2} className="serie-detail__key">
                      Gênero:
                    </Col>
                    <Col xs={10} className="serie-detail__value">
                      {serieDetail.genre}
                    </Col>
                    <div className="serie-detail__hr"></div>
                  </Row>
                  <Row className="serie-detail__pair">
                    <Col xs={2} className="serie-detail__key">
                      Ano:
                    </Col>
                    <Col xs={10} className="serie-detail__value">
                      {serieDetail.year}
                    </Col>
                    <div className="serie-detail__hr"></div>
                  </Row>
                  <Row className="serie-detail__pair">
                    <Col xs={2} className="serie-detail__key">
                      Páginas:
                    </Col>
                    <Col xs={10} className="serie-detail__value">
                      {serieDetail.pages}
                    </Col>
                    <div className="serie-detail__hr"></div>
                  </Row>
                  <Row className="serie-detail__pair">
                    <Col xs={2} className="serie-detail__key">
                      Sinopse:
                    </Col>
                    <Col xs={10} className="serie-detail__value">
                      {serieDetail.synopsis}
                    </Col>
                  </Row>
                </section>
              </Col>
            </Row>
          </section>
        </Container>
      </Container>
      <SerieNavBar url={url} />
    </div>
  );
};

export default SerieDetail;
