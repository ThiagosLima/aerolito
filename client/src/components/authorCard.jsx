import React from "react";
import { Link } from "react-router-dom";
import authorService from "../services/authorService";
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

const AuthorCard = ({ author, user }) => {
  const { _id, name, description, socialMedia, image } = author;
  const imgs = {
    behance,
    email,
    facebook,
    instagram,
    tumblr,
    twitter,
    youtube
  };
  const imgsHover = {
    behance: behanceB,
    email: emailB,
    facebook: facebookB,
    instagram: instagramB,
    tumblr: tumblrB,
    twitter: twitterB,
    youtube: youtubeB
  };

  return (
    <div className="card-author-container">
      {user ? (
        <div className="manageContent manageContent__dark">
          <Link className="btn btn--margin-small" to={`/authors/upload/${_id}`}>
            Editar
          </Link>
          <button
            className="btn btn--margin-small"
            onClick={() => {
              authorService.deleteAuthor(_id);
              window.location = "/credits";
            }}>
            Deletar
          </button>
        </div>
      ) : null}

      <div className="card-author">
        <div className="row no-gutters">
          <div className="col-md-2">
            <img
              className="card__author-img"
              src={image}
              alt="Imagem do author"></img>
          </div>
          <div className="col-md-10">
            <h5 className="card__title">{name}</h5>
            <div>
              {description?.split("\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="row card__a-container">
              {socialMedia?.map(({ _id, name, url }) => (
                <div key={_id}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <img
                      className="card__social-media"
                      src={imgs[name]}
                      onMouseOver={e => (e.currentTarget.src = imgsHover[name])}
                      onMouseOut={e => (e.currentTarget.src = imgs[name])}
                      alt={`Link para ${name}`}></img>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
