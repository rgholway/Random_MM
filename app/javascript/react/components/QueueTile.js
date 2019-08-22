import React, { Component } from 'react';

class QueueTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        }
        this.clickSong = this.clickSong.bind(this)
  }

  clickSong() {
    this.props.clickSong(this.props.id)
  }

  render() {
    return (
        <div className="queued__tracks" onClick={this.clickSong}>{this.props.name}</div>
    )
  }
}

export default QueueTile
