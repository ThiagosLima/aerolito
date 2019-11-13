import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import chapters from "../mock/chapters";
import HQ from "../mock/chapter";
import { Viewer } from "./viewer";

const Chapters = () => {
  const { id } = useParams();

  return (
    <div className="section section--light">
      <h2>Chapters</h2>
      <Container>
        <Row>
          {chapters.map(chapter => {
            return (
              <Col xs={4}>
                <img
                  style={{ maxWidth: "100%", marginBottom: "32px" }}
                  alt={chapter.id}
                  src={chapter.src}
                  key={chapter.id}
                />
                <Viewer key={chapter.id} HQ={HQ} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Chapters;
