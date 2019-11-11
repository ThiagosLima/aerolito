import React from "react";
import { Container, Row, Col } from "react-grid-system";
import SerieCard from "./serieCard";

const src =
  "https://www.thoughtco.com/thmb/G74U0Iy2AP9lQ68WXpIprMMIDK8=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fall-of-the-berlin-wall-596687587-5ab906bc875db900376413b5.jpg";

const Series = () => {
  return (
    <section className="section section--light">
      <h1>Series</h1>
      <Container>
        <Row gutterWidth={16}>
          <Col xs={12} md={6}>
            <SerieCard
              img={{ alt: "rusbé", src: src }}
              title="Berlin"
              text="Queda do muro de Berlin"
              link="/series/1"
            />
          </Col>
          <Col xs={12} md={6}>
            <SerieCard
              img={{ alt: "rusbé", src: src }}
              title="Berlin"
              text="Queda do muro de Berlin"
              link="/series/1"
            />
          </Col>
          <Col xs={12} md={6}>
            <SerieCard
              img={{ alt: "rusbé", src: src }}
              title="Berlin"
              text="Queda do muro de Berlin"
              link="/series/1"
            />
          </Col>
          <Col xs={12} md={6}>
            <SerieCard
              img={{ alt: "rusbé", src: src }}
              title="Berlin"
              text="Queda do muro de Berlin"
              link="/series/1"
            />
          </Col>
          <Col xs={12} md={6}>
            <SerieCard
              img={{ alt: "rusbé", src: src }}
              title="Berlin"
              text="Queda do muro de Berlin"
              link="/series/1"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Series;
