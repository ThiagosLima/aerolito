import React from 'react'
import Page from './Page'
import './Viewer.css'

class Viewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startViewer: false,
      isFullscreen: false,
      pages: [],
      pageIndex: 0
    }

    this.handleClick = this.handleClick.bind(this)
    this.changeImage = this.changeImage.bind(this)
    this.changeFullscreen = this.changeFullscreen.bind(this)
  }

  componentDidMount() {
    this.setState({
      pages: this.props.HQ
    })
  }

  handleClick() {
    if (document.fullscreen) {
      return this.changeFullscreen()
    }

    this.setState(prev => {
      return {
        startViewer: !prev.startViewer
      }
    })
  }

  changeImage(imageChange) {
    let pageIndex = this.state.pageIndex + imageChange
        
    if (pageIndex <= 0) {
      pageIndex = 0
    } else if (pageIndex >= this.state.pages.images.length) {
      pageIndex = this.state.pages.images.length
    }

    this.setState({
      pageIndex: pageIndex
    })
  }

  changeFullscreen() {
    if (this.state.isFullscreen) {
      document.exitFullscreen()
    } else {
      document.getElementById("viewer").requestFullscreen()
    }

    this.setState(prev => {
      return {
        isFullscreen: !prev.isFullscreen
      }
    })
  }

  render() {
    const startViewer = this.state.startViewer ? 'overlay':'none'
    const currentPage = this.state.pages.images && this.state.pages.images[this.state.pageIndex]
  
    return (
      <div>
        <button onClick={this.handleClick}>Viewer</button>

        <div onClick={this.handleClick} id="viewer" className={startViewer}>
          <Page
            page={currentPage && currentPage.img}
            changeImage={this.changeImage}
            changeFullscreen={this.changeFullscreen}
            exit={this.handleClick}
          />
        </div>
      </div>
    )
  }
}

export default Viewer