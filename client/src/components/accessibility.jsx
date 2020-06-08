import React, { useState, useEffect } from "react";
import { Row, Container } from "react-grid-system";
import storyService from "../services/storyService";

const Accessibility = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await storyService.getStories();
      setStories(data);
    }

    getData();
  }, []);

  return (
    <section className="section section--light">
      <Container>
        <Row>
          {stories.map(story => (
            <div key={story._id}>
              <a href={story.url} target="_blank" rel="noopener noreferrer">
                <h2>{story.title}</h2>
              </a>
              <p>{story.body}</p>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Accessibility;
