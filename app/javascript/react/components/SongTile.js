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
    onClick() {
      this.props.onClick(this.props.id)
    }

    playNext() {
      this.props.onNext(this.props.youtube)
    }

  render() {
    return (
      <div>
        <div className="tracks">{this.props.num}. {this.props.title}
          <div className="play__next" onClick={this.playNext}>O</div>
        </div>
      </div>
    )
  }
}

export default SongTile
