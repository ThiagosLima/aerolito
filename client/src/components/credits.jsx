import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import AuthorCard from "./authorCard";
import { getCurrentUser } from "../services/authService";
import authorService from "../services/authorService";

import authorImage from "../assets/img/author.png";
import behance from "../assets/img/behance.png";
import email from "../assets/img/email.png";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";
import tumblr from "../assets/img/tumblr.png";
import twitter from "../assets/img/twitter.png";
import youtube from "../assets/img/youtube.png";

const Credits = () => {
  const [authors, setAuthors] = useState([]);
  const user = getCurrentUser();

  // TODO: add real urls
  const socialMedia = [
    { name: facebook, url: "https://www.google.com/" },
    { name: email, url: "https://www.google.com/" },
    { name: instagram, url: "https://www.google.com/" },
    { name: tumblr, url: "https://www.google.com/" },
    { name: twitter, url: "https://www.google.com/" },
    { name: youtube, url: "https://www.google.com/" },
    { name: behance, url: "https://www.google.com/" }
  ];

  useEffect(() => {
    const fetch = async () => {
      const data = await authorService.getAuthors();
      setAuthors(data);
    };
    fetch();
  }, []);

  return (
    // Aerolito
    <div>
      <section className="section section--dark">
        <Container>
          <Row>
            <Container>
              <Row>
                <Col xs={2}>
                  <img
                    className="card__author-img"
                    src={authorImage}
                    alt="Aerolito profile"></img>
                </Col>
                <Col xs={9}>
                  <h5 className="credits__title">Sobre o projeto aerolito</h5>
                  <p className="credits__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto, obcaecati incidunt. Iste, temporibus id qui
                    provident debitis eaque fugiat mollitia numquam corrupti
                    accusamus. Sed eius fuga magnam excepturi ullam earum.Lorem
                    ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus consectetur ullam ad! Libero dolorum quia eveniet
                    adipisci quidem cum excepturi assumenda similique a?
                    Perferendis inventore corrupti distinctio optio aliquid
                    harum.
                  </p>
                  <p className="credits__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus consectetur ullam ad! Libero dolorum quia eveniet
                    adipisci quidem cum excepturi assumenda similique a?
                    Perferendis inventore corrupti distinctio optio aliquid
                    harum.
                  </p>
                  <p className="credits__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore laudantium recusandae minima porro, cupiditate ipsam
                    ex quod ad eum itaque veritatis amet alias a perferendis
                    vitae deleniti, sint quaerat. Aperiam.
                  </p>
                  <div className="row credits-social-media">
                    {socialMedia.map(({ name, url }) => (
                      <div key={name}>
                        <a href={url} target="_blank">
                          <img
                            className="card__social-media"
                            src={name}
                            alt={`Link para ${name}`}></img>
                        </a>
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </section>

      <section className="section">
        {user ? (
          <div className="manageContent manageContent__dark manageContent__container">
            <Link className="btn btn--margin-small" to={`/authors/upload`}>
              Adicionar Autor
            </Link>
          </div>
        ) : null}

        {authors.map(author => (
          <AuthorCard key={author._id} author={author} user={user} />
        ))}

        <Container>
          <div className="credits-contributor">
            <Row justify="between" className="credits-contributor__row">
              <Col xs={2}></Col>

              <Col xs={3}>
                <h6 className="credits-contributor__title">Nome da pessoa</h6>
                <p className="credits-contributor__text">Função no projeto</p>
                <a className="credits-contributor__a" href="#">
                  email@email.com
                </a>
              </Col>

              <Col xs={3}>
                <h6 className="credits-contributor__title">Nome da pessoa</h6>
                <p className="credits-contributor__text">Função no projeto</p>
                <a className="credits-contributor__a" href="#">
                  email@email.com
                </a>
              </Col>
              <Col xs={3}>
                <h6 className="credits-contributor__title">Nome da pessoa</h6>
                <p className="credits-contributor__text">Função no projeto</p>
                <a className="credits-contributor__a" href="#">
                  email@email.com
                </a>
              </Col>

              <Col xs={1}></Col>
            </Row>

            <Row justify="between">
              <Col xs={2}></Col>

              <Col xs={3}>
                <h6 className="credits-contributor__title">Nome da pessoa</h6>
                <p className="credits-contributor__text">Função no projeto</p>
                <a className="credits-contributor__a" href="#">
                  email@email.com
                </a>
              </Col>

              <Col xs={3}>
                <h6 className="credits-contributor__title">Nome da pessoa</h6>
                <p className="credits-contributor__text">Função no projeto</p>
                <a className="credits-contributor__a" href="#">
                  email@email.com
                </a>
              </Col>
              <Col xs={3}>
                <h6 className="credits-contributor__title">Nome da pessoa</h6>
                <p className="credits-contributor__text">Função no projeto</p>
                <a className="credits-contributor__a" href="#">
                  email@email.com
                </a>
              </Col>

              <Col xs={1}></Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Credits;
