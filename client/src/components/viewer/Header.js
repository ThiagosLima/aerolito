import React from 'react'
import './Header.css'

class Header extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.stopPropagation()
    let {name, type} = e.target

    switch (name) {
      case "next":
        this.props.changeImage(1)
        break
      case "prev":
        this.props.changeImage(-1)
        break
      case "zoomIn":
        this.props.changeZoom(5)
        break
      case "zoomOut":
        this.props.changeZoom(-5)
        break
      case "fullscreen":
        this.props.changeFullscreen()
        break
      case "exit":
        this.props.exit()
        break
      default:
        console.warn(`No case for event type "${type}", probably click on header`)
        break
    }
  }

  share(socialMedia, url, winWidth, winHeight) {
    var winTop = (window.screen.height / 2) - (winHeight / 2)
    var winLeft = (window.screen.width / 2) - (winWidth / 2)

    if (socialMedia === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'sharer', `top=${winTop},left=${winLeft},toolbar=0,status=0,width=${winWidth/2.6},height=${winHeight}`)
    } else {
      window.open(`http://twitter.com/share?text=${'ue'}&url=${url}&hashtags=${'ue,rusbe,macae'}`, 'sharer', `top=${winTop},left=${winLeft},toolbar=0,status=0,width=${winWidth/2.6},height=${winHeight}`);
    }
  }

  render () {
    return (
      <header onClick={this.handleClick} className="background" style={{ display: 'flex', justifyContent: 'flex-end'}}>
        <button id="prev" name="prev" onClick={this.handleClick}>Prev</button>
        <button id="next" name="next" onClick={this.handleClick}>Next</button>
        <button name="zoomIn" onClick={this.handleClick}>Zomm IN</button>
        <button name="zoomOut" onClick={this.handleClick}>Zoom OUT</button>
        <button name="fullscreen" onClick={this.handleClick}>FullScreen</button>
        <button name="facebook" onClick={(e) =>
          this.share(e.target.name, 'https://www.google.com.br', window.innerWidth, window.innerHeight)
        }>Share FB</button>
        <button name="twitter" onClick={(e) =>
          this.share(e.target.name, 'https://www.google.com.br', window.innerWidth, window.innerHeight)
        }>Share TW</button>
        <button name="exit" onClick={this.handleClick}>Exit</button>
      </header>
    )
  }
}

export default Header