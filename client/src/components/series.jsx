import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-grid-system";
import queryString from "query-string";
import Promotion from "./promotion";
import SerieCard from "./serieCard";
import AuthorCard from "./authorCard";
import serieService from "../services/serieService";
import authorService from "../services/authorService";
import { getCurrentUser } from "../services/authService";

const Series = ({ location }) => {
  const [series, setSeries] = useState([]);
  const [author, setAuthor] = useState({});
  const user = getCurrentUser();
  const { authorId } = queryString.parse(location.search);

  useEffect(() => {
    async function getData() {
      const data = await serieService.getSeries();
      setSeries(data);

      if (authorId) {
        const authorResponse = await authorService.getAuthor(authorId);
        setAuthor(authorResponse);
      }
    }

    getData();
  }, []);

  return (
    <div>
      <Container>
        <section className="section section--light">
          {user ? (
            <div className="manageContent manageContent__dark">
              <Link className="btn btn--margin-small" to={`/series/upload`}>
                Adicionar Série
              </Link>
            </div>
          ) : null}

          {authorId ? <AuthorCard key={author._id} author={author} /> : null}

          <Row gutterWidth={16}>
            {series.map(serie => {
              return (
                <Col key={serie._id} xs={12} lg={6}>
                  <SerieCard
                    img={{ src: serie.cover, alt: serie.title }}
                    title={serie.title}
                    text={serie.call}
                    link={`/series/${serie._id}`}
                  />
                </Col>
              );
            })}
          </Row>
        </section>
      </Container>
      <Promotion />
    </div>
  );
};

export default Series;
