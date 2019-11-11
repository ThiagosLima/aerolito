import React from 'react'
import Header from './Header'
import Draggable from 'react-draggable'
import './Page.css'

class HQPage extends React.Component {
  constructor() {
    super()
    
    this.state = {
      zoomLevel: 35
    }

    this.handleClick = this.handleClick.bind(this)
    this.changeZoom = this.changeZoom.bind(this)
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
        <Header
          changeImage={this.props.changeImage}
          changeZoom={this.changeZoom}
          changeFullscreen={this.props.changeFullscreen}
          exit={this.props.exit}
        />
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
      </div>
    )
  }
}

export default HQPage