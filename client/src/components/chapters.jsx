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
  const [hiddenHeader, sethiddenHeader] = useState(true);
  const [timeoutId, settimeoutId] = useState(undefined);
  const user = getCurrentUser();

  useEffect(() => {
    async function getData() {
      const serie = await serieService.getSerie(params.id);
      const data = await chapterService.getChapters(serie._id);
      setChapters(data);
    }

    getData();
  }, []);

  const handleMouseMoviment = e => {
    clearTimeout(timeoutId)
    sethiddenHeader(false)
    const tId = setTimeout(() => {
      sethiddenHeader(true)
    }, 3000)
    settimeoutId(tId)
  }

  return (
    <div className="section section--light">
      {console.log(hiddenHeader)}
      <Container>
        <Row>
          {chapters.map(chapter => {
            return (
              <Col key={chapter._id} xs={4}>
                {user ? (
                  <div className="manageContent manageContent__dark">
                    <Link
                      className="btn btn--margin-small"
                      to={`/series/${params.id}/chapters/upload/${chapter._id}`}>
                      Editar
                    </Link>
                    <button
                      className="btn btn--margin-small"
                      onClick={async () => {
                        await chapterService.deleteChapter(chapter._id);
                        window.location = `/series/${params.id}/chapters`;
                      }}>
                      Deletar
                    </button>
                  </div>
                ) : null}

                <div onMouseMove={handleMouseMoviment}>
                  <Viewer
                    key={chapter._id}
                    id={chapter._id}
                    cover={chapter.cover}
                    background={chapter.background}
                    hiddenHeader={hiddenHeader}
                  />
                </div>

              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Chapters;
