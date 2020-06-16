import React, { useState } from "react";
import { Row } from "react-grid-system";
import share from "../assets/img/15a - Share.png";
import shareB from "../assets/img/15b - Share.png";
import facebook from "../assets/img/01a - Facebook.png";
import facebookB from "../assets/img/01b - Facebook.png";
import twitter from "../assets/img/02a - Twitter.png";
import twitterB from "../assets/img/02b - Twitter.png";
import email from "../assets/img/09a - Email.png";
import emailB from "../assets/img/09b - Email.png";
import tumblr from "../assets/img/07a - Tumblr.png";
import tumblrB from "../assets/img/07b - Tumblr.png";

const Share = ({ urlFacebook, urlTwitter, urlEmail, urlTumblr }) => {
  const [show, setShow] = useState(false);

  const showMenu = event => {
    event.preventDefault();

    setShow(!show);
  };

  return (
    <div className="share" style={{ marginRight: "25px" }}>
      <Row>
        <button onClick={showMenu} className="share__btn share__btn--left">
          <img
            name="sharer"
            className="share__img"
            src={share}
            onMouseOver={e => (e.currentTarget.src = shareB)}
            onMouseOut={e => (e.currentTarget.src = share)}
            alt="Share"
          />
        </button>

        {show ? (
          <div className="share-wraper">
            <div className="share-container">
              <div className="share-items">
                <div onClick={urlFacebook}>
                  <img
                    name="sharer"
                    className="share__img"
                    src={facebook}
                    onMouseOver={e => (e.currentTarget.src = facebookB)}
                    onMouseOut={e => (e.currentTarget.src = facebook)}
                    alt="Share facebook"
                  />
                </div>
                <div onClick={urlTwitter}>
                  <img
                    name="sharer"
                    className="share__img "
                    src={twitter}
                    onMouseOver={e => (e.currentTarget.src = twitterB)}
                    onMouseOut={e => (e.currentTarget.src = twitter)}
                    alt="Share twitter"
                  />
                </div>
              </div>
              <div className="share-items">
                <div onClick={urlEmail}>
                  <img
                    name="sharer"
                    className="share__img"
                    src={email}
                    onMouseOver={e => (e.currentTarget.src = emailB)}
                    onMouseOut={e => (e.currentTarget.src = email)}
                    alt="Share email"
                  />
                </div>
                <div onClick={urlTumblr}>
                  <img
                    name="sharer"
                    className="share__img"
                    src={tumblr}
                    onMouseOver={e => (e.currentTarget.src = tumblrB)}
                    onMouseOut={e => (e.currentTarget.src = tumblr)}
                    alt="Share tumblr"
                  />
                </div>
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
