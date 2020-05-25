import React, { useState } from "react";
import { Container, Row } from "react-grid-system";
import share from "../assets/img/15b - Share.png";
import facebook from "../assets/img/01b - Facebook.png";
import twitter from "../assets/img/02b - Twitter.png";
import instagram from "../assets/img/04b - Instagram.png";
import email from "../assets/img/09b - Email.png";
import tumblr from "../assets/img/07b - Tumblr.png";

const Share = ({
  urlFacebook,
  urlTwitter,
  urlInstagram,
  urlEmail,
  urlTumblr
}) => {
  const [show, setShow] = useState(false);

  const showMenu = event => {
    event.preventDefault();

    setShow(!show);
  };

  return (
    <div className="share" style={{marginRight: '25px'}}>
      <Row>
        <button onClick={showMenu} className="share__btn share__btn--left">
          <img className="share__img" src={share} alt="Aerolito profile" />
        </button>

        {show ? (
          <div className="share-wraper">
            <div className="share-container">
              <div className="share-items">
                <a href={urlFacebook} target="_blank" rel="noopener noreferrer">
                  <img
                    className="share__img"
                    src={facebook}
                    alt="Aerolito profile"
                  />
                </a>
                <a href={urlTwitter} target="_blank" rel="noopener noreferrer">
                  <img
                    className="share__img "
                    src={twitter}
                    alt="Aerolito profile"
                  />
                </a>
                <a href={urlInstagram} target="_blank" rel="noopener noreferrer">
                  <img
                    className="share__img"
                    src={instagram}
                    alt="Aerolito profile"
                  />
                </a>
              </div>
              <div className="share-items">
                <a href={urlEmail} target="_blank" rel="noopener noreferrer">
                  <img
                    className="share__img"
                    src={email}
                    alt="Aerolito profile"
                  />
                </a>
                <a href={urlTumblr} target="_blank" rel="noopener noreferrer">
                  <img
                    className="share__img"
                    src={tumblr}
                    alt="Aerolito profile"
                  />
                </a>
              </div>
            </div>
            <div className="share-triangle" />
          </div>
        ) : null}
      </Row>
    </div>
  );
};

export default Share;
