import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import AuthorCard from "./authorCard";
import { getCurrentUser } from "../services/authService";
import authorService from "../services/authorService";
import authorImage from "../assets/img/2018d.png";
import behance from "../assets/img/10a - Behance.png";
import behanceB from "../assets/img/10b - Behance.png";
import email from "../assets/img/09a - Email.png";
import emailB from "../assets/img/09b - Email.png";
import facebook from "../assets/img/01a - Facebook.png";
import facebookB from "../assets/img/01b - Facebook.png";
import instagram from "../assets/img/04a - Instagram.png";
import instagramB from "../assets/img/04b - Instagram.png";
import tumblr from "../assets/img/07a - Tumblr.png";
import tumblrB from "../assets/img/07b - Tumblr.png";
import twitter from "../assets/img/02a - Twitter.png";
import twitterB from "../assets/img/02b - Twitter.png";
import youtube from "../assets/img/06a - YouTube.png";
import youtubeB from "../assets/img/06b - YouTube.png";
import { useTranslation } from 'react-i18next';

const Credits = () => {
  const [authors, setAuthors] = useState([]);
  const user = getCurrentUser();
  const { t } = useTranslation();

  // TODO: add real urls
  const socialMedia = [
    { name: facebook, hover: facebookB, url: "https://www.google.com/" },
    { name: email, hover: emailB, url: "https://www.google.com/" },
    { name: instagram, hover: instagramB, url: "https://www.google.com/" },
    { name: tumblr, hover: tumblrB, url: "https://www.google.com/" },
    { name: twitter, hover: twitterB, url: "https://www.google.com/" },
    { name: youtube, hover: youtubeB, url: "https://www.google.com/" },
    { name: behance, hover: behanceB, url: "https://www.google.com/" }
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
                  <h5 className="credits__title">{t("aboutAuthors")}</h5>
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
                    {socialMedia.map(({ name, hover, url }) => (
                      <div key={name}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          <img
                            className="card__social-media"
                            src={name}
                            onMouseOver={e => (e.currentTarget.src = hover)}
                            onMouseOut={e => (e.currentTarget.src = name)}
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
        <Container>
          {user ? (
            <div className="manageContent manageContent__dark">
              <Link className="btn btn--margin-small" to={`/authors/upload`}>
                Adicionar Autor
              </Link>
            </div>
          ) : null}

          {authors.map(author => (
            <AuthorCard key={author._id} author={author} user={user} />
          ))}
        </Container>

        <Container>
          <div className="credits-contributor">
            <Row justify="between" className="credits-contributor__row">
              <Col xs={2}></Col>

              <Col xs={3}>
                <h6 className="credits-contributor__title">Nome da pessoa</h6>
                <p className="credits-contributor__text">Função no projeto</p>
                <a className="credits-contributor__a" href="_">
                  email@email.com
                </a>
              </Col>

              <Col xs={3}>
                <h6 className="credits-contributor__title">Nome da pessoa</h6>
                <p className="credits-contributor__text">Função no projeto</p>
                <a className="credits-contributor__a" href="_">
                  email@email.com
                </a>
              </Col>
              <Col xs={3}>
                <h6 className="credits-contributor__title">Nome da pessoa</h6>
                <p className="credits-contributor__text">Função no projeto</p>
                <a className="credits-contributor__a" href="_">
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
                <a className="credits-contributor__a" href="_">
                  email@email.com
                </a>
              </Col>

              <Col xs={3}>
                <h6 className="credits-contributor__title">Nome da pessoa</h6>
                <p className="credits-contributor__text">Função no projeto</p>
                <a className="credits-contributor__a" href="_">
                  email@email.com
                </a>
              </Col>
              <Col xs={3}>
                <h6 className="credits-contributor__title">Nome da pessoa</h6>
                <p className="credits-contributor__text">Função no projeto</p>
                <a className="credits-contributor__a" href="_">
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
