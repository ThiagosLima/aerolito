import React, { useState } from "react";
import { Container, Row } from "react-grid-system";
import share from "../assets/img/share.png";
import facebook from "../assets/img/facebook.png";
import twitter from "../assets/img/twitter.png";
import instagram from "../assets/img/instagram.png";
import email from "../assets/img/email.png";
import tumblr from "../assets/img/tumblr.png";

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
    <Container className="share">
      <Row>
        <button onClick={showMenu} className="share__btn share__btn--left">
          <img className="share__img" src={share} alt="Aerolito profile" />
        </button>

        {show ? (
          <div className="share-wraper">
            <div className="share-container">
              <div className="share-items">
                <a href={urlFacebook} target="_blank">
                  <img
                    className="share__img"
                    src={facebook}
                    alt="Aerolito profile"
                  />
                </a>
                <a href={urlTwitter} target="_blank">
                  <img
                    className="share__img "
                    src={twitter}
                    alt="Aerolito profile"
                  />
                </a>
                <a href={urlInstagram} target="_blank">
                  <img
                    className="share__img"
                    src={instagram}
                    alt="Aerolito profile"
                  />
                </a>
              </div>
              <div className="share-items">
                <a href={urlEmail} target="_blank">
                  <img
                    className="share__img"
                    src={email}
                    alt="Aerolito profile"
                  />
                </a>
                <a href={urlTumblr} target="_blank">
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
    </Container>
  );
};

export default Share;
