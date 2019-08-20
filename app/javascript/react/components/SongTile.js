import React, { Component } from 'react';

class SongTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        youtube: ""
        }
        this.onClick = this.onClick.bind(this)
  }

    onClick(e) {
      if (e.type == "click") {
        this.props.onClick(this.props.id)
        }
      if (e.nativeEvent.which == 3) {
        e.preventDefault()
        this.props.onNext(this.props.youtube, this.props.title)
      }

    }

  render() {
    return (
      <div>
        <a className="tracks" onContextMenu={this.onClick} onClick={this.onClick}>{this.props.num}. {this.props.title}
        </a>
      </div>
    )
  }
}

export default SongTile
