import React from "react";
import Page from "./Page";
import eye from "../../assets/img/eye.png";
import menu from "../../assets/img/menu.png";
import share from "../../assets/img/share.png";
import { getPages } from "../../services/chapterService";

import "./Viewer.css";

class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startViewer: false,
      isFullscreen: false,
      pages: [],
      pageIndex: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeFullscreen = this.changeFullscreen.bind(this);
  }

  async componentDidMount() {
    const pages = await getPages(this.props.id);
    this.setState({ pages });
  }

  handleClick() {
    if (document.fullscreen) {
      return this.changeFullscreen();
    }

    this.setState(prev => {
      return {
        startViewer: !prev.startViewer
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
      pageIndex: pageIndex
    });
  }

  changeFullscreen() {
    if (this.state.isFullscreen) {
      document.exitFullscreen();
    } else {
      document.getElementById("viewer").requestFullscreen();
    }

    this.setState(prev => {
      return {
        isFullscreen: !prev.isFullscreen
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
            marginBottom: "50px"
          }}>
          <img style={{ padding: "3px" }} src={eye} alt="Abrir HQ" />
          <img style={{ padding: "3px" }} src={menu} alt="Menu HQ" />
          <img style={{ padding: "3px" }} src={share} alt="Compartilhar HQ" />
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
