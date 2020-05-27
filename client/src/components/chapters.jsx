import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import { Viewer } from "./viewer";
import chapterService from "../services/chapterService";
import serieService from "../services/serieService";
import { getCurrentUser } from "../services/authService";

const Chapters = () => {
  const { params } = useRouteMatch();
  const [chapters, setChapters] = useState([]);
  const user = getCurrentUser();

  useEffect(() => {
    async function getData() {
      const serie = await serieService.getSerie(params.id);
      const data = await chapterService.getChapters(serie._id);
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
                {user ? (
                  <div>
                    <Link
                      className="btn btn--margin-small"
                      to={`/series/${params.id}/chapters/upload/${chapter._id}`}>
                      Editar
                    </Link>
                    <button
                      className="btn btn--margin-small"
                      onClick={() => {
                        serieService.deleteSerie(params.id);
                        window.location = "/series";
                      }}>
                      Deletar
                    </button>
                  </div>
                ) : null}
                <Viewer
                  key={chapter._id}
                  id={chapter._id}
                  cover={chapter.cover}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Chapters;
