import React from "react";
import Page from "./Page";
import eyeA from "../../assets/img/13a - Leitura.png";
import eyeB from "../../assets/img/13b - Leitura.png";
import menuA from "../../assets/img/14a - Info.png";
import menuB from "../../assets/img/14b - Info.png";
import shareA from "../../assets/img/15a - Share.png";
import shareB from "../../assets/img/15b - Share.png";
import { getPages } from "../../services/chapterService";
import "./Viewer.css";

class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startViewer: false,
      isFullscreen: false,
      pages: [],
      pageIndex: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeFullscreen = this.changeFullscreen.bind(this);
  }

  async componentDidMount() {
    const pages = await getPages(this.props.id);
    this.setState({ pages });
  }

  handleClick(e) {
    const { name } = e.target
    if (name === "sharer") return

    if (document.fullscreen) {
      return this.changeFullscreen();
    }

    this.setState((prev) => {
      return {
        startViewer: !prev.startViewer,
      };
    });
  }

  changeImage(imageChange) {
    let pageIndex = this.state.pageIndex + imageChange;

    if (pageIndex <= 0) {
      pageIndex = 0;
    } else if (pageIndex >= this.state.pages.length) {
      pageIndex = this.state.pages.length;
    }

    this.setState({
      pageIndex: pageIndex,
    });
  }

  changeFullscreen() {
    if (this.state.isFullscreen) {
      document.exitFullscreen();
    } else {
      document.getElementById("viewer").requestFullscreen();
    }

    this.setState((prev) => {
      return {
        isFullscreen: !prev.isFullscreen,
      };
    });
  }

  render() {
    const startViewer = this.state.startViewer ? "overlay" : "none";
    const currentPage =
      this.state.pages && this.state.pages[this.state.pageIndex];

    return (
      <div>
        <img
          style={{ maxWidth: "100%", marginBottom: "32px" }}
          onClick={this.handleClick}
          src={this.props.cover}
          alt="Capa da HQ"
        />

        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginTop: "-20px",
            marginBottom: "50px",
          }}
        >
          <img
            style={{ padding: "3px", width: "40px" }}
            src={eyeA}
            onMouseOver={(e) => (e.currentTarget.src = eyeB)}
            onMouseOut={(e) => (e.currentTarget.src = eyeA)}
            onClick={this.handleClick}
            alt="Abrir HQ"
          />

          <img
            style={{ padding: "3px", width: "40px" }}
            src={menuA}
            onMouseOver={(e) => (e.currentTarget.src = menuB)}
            onMouseOut={(e) => (e.currentTarget.src = menuA)}
            alt="Menu HQ"
          />
          <img
            style={{ padding: "3px", width: "40px" }}
            src={shareA}
            onMouseOver={(e) => (e.currentTarget.src = shareB)}
            onMouseOut={(e) => (e.currentTarget.src = shareA)}
            alt="Compartilhar HQ"
          />

        </div>

        <div onClick={this.handleClick} id="viewer" className={startViewer}>
          <Page
            page={currentPage}
            changeImage={this.changeImage}
            changeFullscreen={this.changeFullscreen}
            exit={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default Viewer;
