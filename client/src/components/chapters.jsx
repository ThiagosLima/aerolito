import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
// import chapters from "../mock/chapters";
import { getChapters } from "../services/chapterService";
import { getSerie } from "../services/serieService";
import HQ from "../mock/chapter";
import { Viewer } from "./viewer";

const Chapters = () => {
  const { params } = useRouteMatch();
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    async function getData() {
      const serie = await getSerie(params.id);
      const data = await getChapters(serie._id, serie.awsId);
      setChapters(data);
    }

    getData();
  }, []);

  return (
    <div className="section section--light">
      <Container>
        <Row>
          {chapters.map(chapter => {
            return (
              <Col key={chapter._id} xs={4}>
                <Viewer key={chapter._id} HQ={HQ} cover={chapter.cover} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Chapters;
