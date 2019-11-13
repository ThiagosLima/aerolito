import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-grid-system";

const SerieCard = props => {
  return (
    <div className="card">
        <Row>
          <Col xs={6}>
            <img
              alt={props.img.alt}
              src={props.img.src}
              className="card--img"
            />
          </Col>
          <Col xs={6}>
            <div className="card--text">
              <p>{props.title}</p>
              <p>{props.text}</p>
              <Link className="btn" to={props.link}>
                LER MAIS
              </Link>
            </div>
          </Col>
        </Row>
    </div>
  );
};

export default SerieCard;
