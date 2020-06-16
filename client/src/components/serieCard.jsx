import React from "react";
import { Link } from "react-router-dom";

const SerieCard = props => {
  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-md-6">
          <img alt={props.img.alt} src={props.img.src} className="card__img" />
        </div>
        <div className="col-md-6 d-flex flex-column">
          <div className="card-body">
            <h5 className="card__title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
          </div>
          <div className="text-center">
            <Link className="btn card__btn card__btn--margin" to={props.link}>
              LER MAIS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerieCard;
