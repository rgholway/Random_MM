import React, { Component } from 'react';

class VoteTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: ""
        }
        this.handleHover = this.handleHover.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
        this.createPlaylist = this.createPlaylist.bind(this)
  }

  handleHover() {
    this.props.handleHover("active", this.props.youtube)
  }

  handleLeave() {
    this.props.handleHover( "", "")
  }

  createPlaylist() {
    let jsonStringInfo = JSON.stringify(this.props.category)
      fetch(`/api/v1/playlists`, {
        method: 'POST',
        body: jsonStringInfo,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json' },
        credentials: 'same-origin'
      })
      .then(formPayload => formPayload.json())
      }

  render() {
    return (
      <div>
        <div className="music__vote" onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave} onClick={this.createPlaylist}>
          {this.props.name}
        </div>
      </div>
    )
  }
}

export default VoteTile
