import React, { Component } from 'react';

class SongTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        youtube: ""
        }
        this.onClick = this.onClick.bind(this)
        this.playNext = this.playNext.bind(this)
  }

    onClick(e) {
      if (e.type == "click") {
        this.props.onClick(this.props.id)
        }
      if (e.type == "contextmenu") {
        this.props.onNext(this.props.youtube)
      }

    }

    playNext(e) {
      e.preventDefault()
      this.props.onNext(this.props.youtube, this.props.title)
    }

  render() {
    return (
      <div>
        <div className="tracks" onContextMenu={ this.playNext} onClick={this.onClick}>{this.props.num}. {this.props.title}
          <div className="play__next" onClick={this.playNext}>O</div>
        </div>
      </div>
    )
  }
}

export default SongTile
