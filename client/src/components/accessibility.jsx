import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Row, Container } from "react-grid-system";
import storyService from "../services/storyService";
import { getCurrentUser } from "../services/authService";

const Accessibility = () => {
  const { params } = useRouteMatch();
  const [stories, setStories] = useState([]);
  const user = getCurrentUser();

  useEffect(() => {
    async function getData() {
      const data = await storyService.getStories(params.id);
      setStories(data);
    }

    getData();
  }, []);

  return (
    <section className="section section--light">
      <Container>
        {user ? (
          <Row>
            <div className="manageContent manageContent__dark accessibility__container">
              <Link
                className="btn btn--margin-small"
                to={`/story/upload/${params.id}`}>
                Adicionar História
              </Link>
            </div>
          </Row>
        ) : null}

        <Row>
          {stories.map(story => (
            <div key={story._id} className="accessibility">
              {user ? (
                <div className="manageContent manageContent__dark">
                  <Link
                    className="btn btn--margin-small"
                    to={`/story/upload/${params.id}/${story._id}`}>
                    Editar
                  </Link>
                  <button
                    className="btn btn--margin-small"
                    onClick={() => {
                      storyService.deleteStory(story._id);
                      window.location = `/series/${params.id}/accessibility`;
                    }}>
                    Deletar
                  </button>
                </div>
              ) : null}
              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="accessibility__a">
                <h2 className="accessibility__title">{story.title}</h2>
              </a>
              <div>
                {story.body.split("\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Accessibility;
