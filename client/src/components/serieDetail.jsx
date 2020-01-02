import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Row, Col, Container } from "react-grid-system";
import SerieInfo from "./serieInfo";
import SerieNavBar from "./serieNavBar";
import currentSerie from "../mock/serie";
// import Chapters from "./chapters";

const SerieDetail = () => {
  let { url } = useRouteMatch();
  const [serieDetail, setSerieDetail] = useState({});

  useEffect(() => {
    const serieNumber = url.split("/")[2];
    // fetch serie number detail
    setSerieDetail(currentSerie);
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
                  src={serieDetail.img}
                  className="serie-detail__img"
                />
              </Col>
              <Col xs={8}>
                <h1 className="serie-detail__title">
                  {serieDetail.title && serieDetail.title.toUpperCase()}
                </h1>
                <section className="section section--light section--normal-padding">
                  <div className="serie-detail__pair">
                    <div className="serie-detail__key">Autores:</div>
                    <div className="serie-detail__value">
                      {serieDetail.authors}
                    </div>
                  </div>
                  <div className="serie-detail__pair">
                    <div className="serie-detail__key">Desenhos:</div>
                    <div className="serie-detail__value">
                      {serieDetail.drawings}
                    </div>
                  </div>
                  <div className="serie-detail__pair">
                    <div className="serie-detail__key">Cores:</div>
                    <div className="serie-detail__value">
                      {serieDetail.colors}
                    </div>
                  </div>
                  <div className="serie-detail__pair">
                    <div className="serie-detail__key">Gênero:</div>
                    <div className="serie-detail__value">
                      {serieDetail.colors}
                    </div>
                  </div>
                  <div className="serie-detail__pair">
                    <div className="serie-detail__key">Ano:</div>
                    <div className="serie-detail__value">
                      {serieDetail.year}
                    </div>
                  </div>
                  <div className="serie-detail__pair">
                    <div className="serie-detail__key">Páginas:</div>
                    <div className="serie-detail__value">
                      {serieDetail.pages}
                    </div>
                  </div>
                  <div className="serie-detail__pair">
                    <div className="serie-detail__key">Sinopse:</div>
                    <div className="serie-detail__value">
                     dsfdsfsd
                    </div>
                  </div>
                </section>
              </Col>
            </Row>
            {/* <SerieInfo />
            <SerieNavBar url={url} /> */}
          </section>
        </Container>
      </Container>
    </div>
  );
};

export default SerieDetail;
