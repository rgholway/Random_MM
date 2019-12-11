import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import VoteTile from './VoteTile';

class PlaylistShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: ""
        }
      this.fetchPlaylist = this.fetchPlaylist.bind(this)
  }

  fetchPlaylist() {
    fetch(`/api/v1/playlists/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ playlist: body });
    })
  }

  componentWillMount() {
    this.fetchPlaylist()
  }

  render() {
    return (
      <div className="vote">
          <div className="song__playlist">
            <div className="song__playlist__title"> First Playlist </div>

          </div>
      </div>
    )
  }
}

export default PlaylistShow
