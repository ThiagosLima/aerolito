import React from 'react'
import Header from './Header'
import Draggable from 'react-draggable'
import './Page.css'

const escKeyCode = 27
const righKeyCode = 39
const leftKeyCode = 37
const plusKeyCode = 107
const minusKeyCode = 109

class HQPage extends React.Component {
  constructor() {
    super()

    this.state = {
      zoomLevel: 35
    }

    this.buttonPress = this.buttonPress.bind(this);
    this.handleClick = this.handleClick.bind(this)
    this.changeZoom = this.changeZoom.bind(this)
  }

  buttonPress(event) {
    switch (event.keyCode) {
      case escKeyCode:
        this.props.exit()
        break;
      case righKeyCode:
        this.props.changeImage(1)
        break;
      case leftKeyCode:
        this.props.changeImage(-1)
        break;
      case plusKeyCode:
        this.changeZoom(5)
        break;
      case minusKeyCode:
        this.changeZoom(-5)
        break;
      default:
        break;
    }
  }

  async componentDidMount() {
    document.addEventListener("keydown", this.buttonPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.buttonPress, false);
  }

  handleClick(e) {
    e.stopPropagation()

    if (e.target.name === "nextHQ") {
      //
    }
  }

  changeZoom(zoomChange) {
    this.setState(prev => {
      return {
        zoomLevel: prev.zoomLevel + zoomChange
      }
    })
  }



  render() {
    const imgStyle = {
      width: `${this.state.zoomLevel}%`
    }
    return (
      <div>
        {!this.props.hiddenHeader && <Header
          changeImage={this.props.changeImage}
          changeZoom={this.changeZoom}
          changeFullscreen={this.props.changeFullscreen}
          exit={this.props.exit}
        />}


        <Draggable>
          {
            this.props.page ?
              <img
                onClick={this.handleClick}
                className='center'
                style={imgStyle}
                src={this.props.page}
                draggable='false'
                alt=""
              /> :
              <div onClick={this.handleClick} className="centerText">
                proxima HQ?
              <button name="nextHQ" onClick={this.handleClick}>
                  Sim
              </button>
              </div>
          }
        </Draggable>
      </div >
    )
  }
}

export default HQPage