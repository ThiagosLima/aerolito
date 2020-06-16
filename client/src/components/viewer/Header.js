import React from "react";
import "./Header.css";
import prevA from "../../assets/img/14a - Info.png";
import prevB from "../../assets/img/14b - Info.png";
import nextA from "../../assets/img/14a - Info.png";
import nextB from "../../assets/img/14b - Info.png";
import zoomInA from "../../assets/img/14a - Info.png";
import zoomInB from "../../assets/img/14b - Info.png";
import zoomOutA from "../../assets/img/14a - Info.png";
import zoomOutB from "../../assets/img/14b - Info.png";
import fullscreenA from "../../assets/img/14a - Info.png";
import fullscreenB from "../../assets/img/14b - Info.png";
import Share from "../share";

class Header extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    const { name, type } = e.target;

    switch (name) {
      case "next":
        this.props.changeImage(1);
        break;
      case "prev":
        this.props.changeImage(-1);
        break;
      case "zoomIn":
        this.props.changeZoom(5);
        break;
      case "zoomOut":
        this.props.changeZoom(-5);
        break;
      case "fullscreenMode":
        this.props.changeFullscreen();
        break;
      case "exit":
        this.props.exit();
        break;
      default:
        console.warn(
          `No case for event type "${type}" and name "${name}", probably click on header`
        );
        break;
    }
  }

  share(
    socialMedia,
    url,
    winWidth = window.innerWidth,
    winHeight = window.innerHeight
  ) {
    var winTop = window.screen.height / 2 - winHeight / 2;
    var winLeft = window.screen.width / 2 - winWidth / 2;

    if (socialMedia === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        "sharer",
        `top=${winTop},left=${winLeft},toolbar=0,status=0,width=${
          winWidth / 2.6
        },height=${winHeight}`
      );
    } else if (socialMedia === "twitter") {
      window.open(
        `http://twitter.com/share?text=${"ue"}&url=${url}&hashtags=${"ue,rusbe,macae"}`,
        "sharer",
        `top=${winTop},left=${winLeft},toolbar=0,status=0,width=${
          winWidth / 2.6
        },height=${winHeight}`
      );
    } else if (socialMedia === "email") {
      window.open(`mailto:?subject=Aerolito&body=${url}`);
    } else if (socialMedia === "tumblr") {
      window.open(
        `http://www.tumblr.com/share?v=3&u=${url}&t=${encodeURIComponent(
          document.title
        )}`
      );
    }
  }

  render() {
    return (
      <header
        className="background"
        style={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          style={{ padding: "3px", width: "40px" }}
          alt="Voltar página"
          id="prev"
          name="prev"
          src={prevA}
          onMouseOver={e => (e.currentTarget.src = prevB)}
          onMouseOut={e => (e.currentTarget.src = prevA)}
          onClick={this.handleClick}
        />
        <img
          style={{ padding: "3px", width: "40px" }}
          alt="Voltar página"
          id="next"
          name="next"
          src={nextA}
          onMouseOver={e => (e.currentTarget.src = nextB)}
          onMouseOut={e => (e.currentTarget.src = nextA)}
          onClick={this.handleClick}
        />

        <div className="settings">
          <img
            style={{ padding: "3px", width: "40px" }}
            alt="zoom out"
            id="zoomOut"
            name="zoomOut"
            src={zoomOutA}
            onMouseOver={e => (e.currentTarget.src = zoomOutB)}
            onMouseOut={e => (e.currentTarget.src = zoomOutA)}
            onClick={this.handleClick}
          />
          <img
            style={{ padding: "3px", width: "40px" }}
            alt="Tela cheia"
            name="fullscreenMode"
            src={fullscreenA}
            onMouseOver={e => (e.currentTarget.src = fullscreenB)}
            onMouseOut={e => (e.currentTarget.src = fullscreenA)}
            onClick={this.handleClick}
          />
          <img
            style={{ padding: "3px", width: "40px" }}
            alt="zoom in"
            id="zoomIn"
            name="zoomIn"
            src={zoomInA}
            onMouseOver={e => (e.currentTarget.src = zoomInB)}
            onMouseOut={e => (e.currentTarget.src = zoomInA)}
            onClick={this.handleClick}
          />
        </div>
        <Share
          urlFacebook={() =>
            this.share("facebook", "https://www.google.com.br")
          }
          urlTwitter={() => this.share("twitter", "https://www.google.com.br")}
          urlEmail={() => this.share("email", "https://www.google.com.br")}
          urlTumblr={() => this.share("tumblr", "https://www.google.com.br")}
        />
        {/* <button name="exit" onClick={this.handleClick}>
          Exit
        </button> */}
      </header>
    );
  }
}

export default Header;
