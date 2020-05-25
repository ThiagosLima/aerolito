import React from "react";
import behance from "../assets/img/10b - Behance.png";
import email from "../assets/img/09b - Email.png";
import facebook from "../assets/img/01b - Facebook.png";
import instagram from "../assets/img/04b - Instagram.png";
import tumblr from "../assets/img/07b - Tumblr.png";
import twitter from "../assets/img/02b - Twitter.png";
import youtube from "../assets/img/06b - YouTube.png";
import authorImage from "../assets/img/2018f.png";

const AuthorCard = ({ author }) => {
  const { name, description, socialMedia } = author;
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
      <div className="row no-gutters">
        <div className="col-md-2">
          <img
            className="card__author-img"
            src={authorImage}
            alt="Link para instagram"></img>
        </div>
        <div className="col-md-10">
          <h5 className="card__title">{name}</h5>
          <p>{description}</p>
          <div className="row card__a-container">
            {socialMedia.map(({ _id, name, url }) => (
              <div key={_id}>
                <a href={url} target="_blank" rel="noopener noreferrer">
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
