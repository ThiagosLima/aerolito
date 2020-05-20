import React from "react";
import behance from "../assets/img/behance.png";
import email from "../assets/img/email.png";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";
import tumblr from "../assets/img/tumblr.png";
import twitter from "../assets/img/twitter.png";
import youtube from "../assets/img/youtube.png";
import { Link } from "react-router-dom";
import authorService from "../services/authorService";

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

  return (
    <div className="card-author">
      {user ? (
        <div className="card-author-edit">
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

      <div className="row no-gutters">
        <div className="col-md-2">
          <img
            className="card__author-img"
            src={image}
            alt="Imagem do author"></img>
        </div>
        <div className="col-md-10">
          <h5 className="card__title">{name}</h5>
          <p>{description}</p>
          <div className="row card__a-container">
            {socialMedia.map(({ _id, name, url }) => (
              <div key={_id}>
                <a href={url} target="_blank">
                  <img
                    className="card__social-media"
                    src={imgs[name]}
                    alt={`Link para ${name}`}></img>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
